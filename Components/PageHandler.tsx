import SQLite from "react-native-sqlite-storage";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ReferenceText from "./ReferenceText";
import FactText from "./FactText";
import Question from "./Question";
import Swipeable from "react-native-gesture-handler/Swipeable";
import FactSwiper from "./FactSwiper";
import db from "../Data/arguments1.json";

console.log(
  "+++++++++++++SwipePage.tsx refreshed+++++++++++++" + new Date().toString()
);
//child of Quiz.tsx

const dummyFactList = [
  "An argument is a piece of persuasive reasoning.",
  "For example, in the USA many years ago a certain bumper sticker became popular. It said 'if guns are outlawed, only outlaws will have guns'. This is an abbreviated argument.",
  "Unfortunately, most people decide whether an argument is good or bad by looking at the conclusion. If they agree with the conclusion, they will find the argument agreeable. If they disagree with the conclusion, they will dislike the argument for it.",
  "This is the wrong way to decide whether an argument is good or bad.",
];

// "id": 10000,
//     "chapter": "arguments 1",
//     "facts": [
//       "An argument is a piece of persuasive reasoning.",
//       "For example, in the USA many years ago a certain bumper sticker became popular. It said 'if guns are outlawed, only outlaws will have guns'. This is an abbreviated argument."
//     ],
//     "question": "Do you think the argument is in favor of, or against, making it illegal to own guns?",
//     "options": [
//       "in favor of making it illegal to own guns",
//       "against making it illegal to own guns"
//     ],
//     "answer": "against making it illegal to own guns",
//     "question_type": "multiple choice"

export interface PageType {
  id: number;
  chapter: string;
  facts: string[];
  question: string;
  options: string[];
  answer: string;
  question_type: string;
}

const PageHandler: React.FC = () => {
  const [pageId, setPageId] = useState<number>(10000);

  const [page, setPage] = useState<PageType | undefined>(
    db.find((obj) => obj.id === pageId)
  );

  const [pageRecord, setPageRecord] = useState<number[]>([]);

  const [factList, setFactList] = useState<string[]>(page ? page.facts : []);

  const [isLoading, setIsLoading] = useState(true);

  function updatePageId(num: number) {
    let page;
    let newRecord = pageRecord;
    if (num === 1) {
      newRecord.push(pageId);
      setPageRecord(newRecord);
      page = db.find((obj) => obj.id > pageId);
      page && setPageId(page.id);
    } else {
      page = db.find((obj) => obj.id === newRecord[newRecord.length - 1]);
      newRecord.pop();
      setPageRecord(newRecord);
      page && setPageId(page.id);
    }
    if (page) console.log(`new page number is ${page.id}`);
    else console.log(`Error: page out of range.`);
  }

  useEffect(() => {
    setPage(db.find((obj) => obj.id === pageId));
  }, [pageId]);

  console.log("page id is", page.id);
  return (
    <View>
      <FactSwiper page={page} pageUpdater={updatePageId} />
    </View>
  );
};

export default PageHandler;
