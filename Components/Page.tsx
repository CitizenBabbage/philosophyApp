import React from "react";
import { View, Text } from "react-native";
import ReferenceText from "./ReferenceText";
import FactText from "./FactText";
import Question from "./Question";
import pageDB from "../Data/pages.json";
import referenceDB from "../Data/references.json";

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
    layout: number[]; // Assuming layout is an array of strings. Adjust this type based on actual data.
  }

  interface Reference {
    id: number;
    chapter: number;
    section: number;
    subsection: number;
    subsectionTitle: string;
    index: number;
    text: string; // Assuming layout is an array of strings. Adjust this type based on actual data.
  }

  function getReferenceText(
    pageIdLocal: number,
    pageDBLocal: Page[],
    referenceDBLocal: Reference[]
  ): string | undefined {
    const pageLocal = pageDBLocal.find((item) => item.id === pageIdLocal);
    if (pageLocal && pageLocal.layout.length > 0) {
      let referenceId = pageLocal.layout[0];
      const refObject = referenceDBLocal.find(
        (item) => item.id === referenceId
      );
      if (refObject && refObject.text) {
        return refObject.text;
      }
      return "";
    } else return "";
  }

  let refText = getReferenceText(pageId, pageDB, referenceDB);
  refText = refText ? refText : "Undefined at Page.tsx line 53";
  console.log(refText);
  //      <ReferenceText refText={refText} />
  // <ReferenceText />
  return (
    <View>
      <ReferenceText refText={refText} />
      <FactText />
      <Question />
      {/* Render your quiz question components here */}
    </View>
  );
};

export default Page;
