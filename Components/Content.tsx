import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import questionDB from "../Data/questions.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import GapFillQuestion from "./GapFillQuestion";
import { QuestionType } from "./PageGetterSQL";
import { PageType } from "./PageHandler";
import FactText from "./FactText";
import { styles } from "./styles";

// child of factSwiper

interface ContentTextProps {
  page: PageType;
  historyUpdater: (direction: number) => void;
  index: number;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const Content: React.FC<ContentTextProps> = ({
  page,
  index,
  answer,
  setAnswer,
}) => {
  const factList = page.facts;
  const handleAnswerSelected = (selected: string) => {
    if (page.answer && page.answer === selected) {
      //   alert("Correct!");
      setAnswer("correct");
      //historyUpdater(1);
    } else {
      //alert("Wrong answer. Try again!");
      setAnswer("incorrect");
    }
  };

  console.log("index is ", index);
  console.log("factList.length is ", factList.length);
  console.log("answer is ", answer);
  console.log("page.question_type is ", page.question_type);
  console.log("page.question is ", page.question);

  return index < factList.length ? (
    <View>
      <FactText content={factList[index]} />
    </View>
  ) : answer === "correct" ? (
    <View style={styles.container}>
      <Text style={styles.factText}>Correct!</Text>
    </View>
  ) : answer === "incorrect" ? (
    <View style={styles.container}>
      <Text style={styles.factText}>Incorrect! Try again!</Text>
    </View>
  ) : page.question_type === "multiple choice" ? (
    <View>
      <MultipleChoiceQuestion
        question={page.question}
        options={page.options}
        answer={page.answer}
        onAnswerSelected={handleAnswerSelected}
      />
    </View>
  ) : (
    <View>
      <GapFillQuestion
        key={`gap-fill-${answer}`}
        handleAnswerSelected={handleAnswerSelected}
        question={page.question}
      />
    </View>
  );
};

export default Content;
