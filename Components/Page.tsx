import React from "react";
import { View, Text } from "react-native";
import ReferenceText from "./ReferenceText";
import FactText from "./FactText";
import Question from "./Question";
import pageDB from "../Data/pages.json";
import referenceDB from "../Data/references.json";
import factDB from "../Data/facts.json";
import qDB from "../Data/questions.json";

const pageId = 20;

// Import your quiz question components here

const Page: React.FC = () => {
  interface Page {
    id: number;
    chapter: number;
    section: number;
    subsection: number;
    subsectionTitle: string;
    index: number;
    layout: number[];
  }

  interface Reference {
    id: number;
    chapter: number;
    section: number;
    subsection: number;
    subsectionTitle: string;
    index: number;
    text: string;
  }

  interface Fact {
    id: number;
    chapter: number;
    section: number;
    subsection: number;
    subsectionTitle: string;
    number: number;
    text: string;
  }

  interface Question {
    id: number;
    chapter: number;
    section: number;
    subsection: number;
    subsectionTitle: string;
    number: number;
    type: string;
    text: string;
    answer_selection: string[];
    correct_answers: string[];
  }

  function getID(
    pageIdLocal: number,
    pageDBLocal: Page[],
    dBLocal: Reference[] | Fact[] | Question[]
  ): number {
    const layoutNumber =
      dBLocal === referenceDB ? 0 : dBLocal === factDB ? 1 : 2;
    const pageLocal = pageDBLocal.find((item) => item.id === pageIdLocal);
    if (pageLocal && pageLocal.layout.length > 0) {
      return pageLocal.layout[layoutNumber];
    } else return -1;
  }

  //   let refText = getText(pageId, pageDB, referenceDB);
  //   refText = refText ? refText : "Undefined refText at Page.tsx line 51";
  let refID = getID(pageId, pageDB, referenceDB);

  //   let factText = getText(pageId, pageDB, factDB);
  //   factText = factText ? factText : "Undefined factText at Page.tsx line 54";
  let factID = getID(pageId, pageDB, factDB);

  //   let qText = getText(pageId, pageDB, qDB);
  //   qText = qText ? qText : "Undefined qText at Page.tsx line 57";
  let qID = getID(pageId, pageDB, qDB);

  // <ReferenceText />
  return (
    <View>
      <ReferenceText refID={refID} />
      <FactText factID={factID} />
      <Question qID={qID} />
      {/* Render your quiz question components here */}
    </View>
  );
};

export default Page;
