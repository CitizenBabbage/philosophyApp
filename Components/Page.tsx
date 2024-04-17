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

  function getText(
    pageIdLocal: number,
    pageDBLocal: Page[],
    dBLocal: Reference[] | Fact[] | Question[]
  ): string | undefined {
    const layoutNumber =
      dBLocal === referenceDB ? 0 : dBLocal === factDB ? 1 : 2;
    const pageLocal = pageDBLocal.find((item) => item.id === pageIdLocal);
    if (pageLocal && pageLocal.layout.length > 0) {
      let referenceId = pageLocal.layout[layoutNumber];
      const refObject = dBLocal.find((item) => item.id === referenceId);
      if (refObject && refObject.text) {
        return refObject.text;
      }
      return "boo";
    } else return "yah";
  }

  let refText = getText(pageId, pageDB, referenceDB);
  refText = refText ? refText : "Undefined refText at Page.tsx line 51";

  let factText = getText(pageId, pageDB, factDB);
  factText = factText ? factText : "Undefined factText at Page.tsx line 54";

  let qText = getText(pageId, pageDB, qDB);
  qText = qText ? qText : "Undefined qText at Page.tsx line 57";

  // <ReferenceText />
  return (
    <View>
      <ReferenceText refText={refText} />
      <FactText factText={factText} />
      <Question qText={qText} />
      {/* Render your quiz question components here */}
    </View>
  );
};

export default Page;
