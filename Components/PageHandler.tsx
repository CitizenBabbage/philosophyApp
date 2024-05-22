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
  const [pageId, setPageId] = useState<number | undefined>(
    db.find((item) => item.id)?.id
  );

  const [page, setPage] = useState<PageType | undefined>(
    db.find((obj) => obj.id === pageId)
  );

  const [pageRecord, setPageRecord] = useState<number[]>([]);

  const [factList, setFactList] = useState<string[]>(page ? page.facts : []);

  const [isLoading, setIsLoading] = useState(true);

  const [index, setIndex] = useState(0);

  // determines next/previous page from database
  // maintains array that logs page position relative to predecessors
  // takes 1 (to advance and push latest page to list)
  // or -1 (to go back and pop latest page from list) as input
  function updateHistory(num: number) {
    let page;
    let newRecord = pageRecord;
    if (num === 1) {
      newRecord.push(pageId);
      setPageRecord(newRecord);
      page = db.find((obj) => obj.id > pageId);
      if (page) {
        setPageId(page.id);
        setIndex(0);
      }
    } else {
      page = db.find((obj) => obj.id === newRecord[newRecord.length - 1]);
      newRecord.pop();
      setPageRecord(newRecord);
      if (page) {
        setPageId(page.id);
        setIndex(page.facts.length);
      }
    }
    if (page) console.log(`new page number is ${page.id}`);
    else console.log(`Error: page out of range.`);
  }

  useEffect(() => {
    setPage(db.find((obj) => obj.id === pageId));
  }, [pageId]);

  page && console.log("page id is", page.id);
  if (page)
    return (
      <View>
        <FactSwiper
          page={page}
          historyUpdater={updateHistory}
          setIndex={setIndex}
          index={index}
        />
      </View>
    );
  else console.log("Error: no page found");
};

export default PageHandler;
