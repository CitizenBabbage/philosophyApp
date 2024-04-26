import React from "react";
import { View, Text } from "react-native";
import Page from "./Page";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import DatabaseComponent from "./DatabaseComponent";
import DBComponent2 from "./DBComponent2";
import { DBComponent3 } from "./DBComponent3";
import { DBComponent4 } from "./DBComponent4";
import { DBComponent5 } from "./DBcomponent5";
import { DBComponent6 } from "./DBComponent6";

//child of UIshell.tsx

interface Options {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
}

interface Question {
  id: number;
  question_text: string;
  options: Options;
  answer: string;
  type: string | null;
}

interface FactTextProps {
  question: Question;
}

interface QuizProps {
  page: number;
}

const Quiz: React.FC<QuizProps> = ({ page }) => {
  return (
    <View>
      {/* <DatabaseComponent /> */}
      {/* <DBComponent2 /> */}
      {/* <Page pageNum={page} /> */}
      {/* <DBComponent3 /> */}
      {/* <DBComponent4 /> */}
      {/* <DBComponent5 /> */}
      <DBComponent6 />
    </View>
  );
};

export default Quiz;
