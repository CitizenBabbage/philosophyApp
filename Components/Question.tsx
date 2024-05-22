import React from "react";
import { View, Text } from "react-native";
import questionDB from "../Data/questions.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import GapFillQuestion from "./GapFillQuestion";
import { QuestionType } from "./PageGetterSQL";
import { PageType } from "./PageHandler";

interface QuestionTextProps {
  page: PageType;
  historyUpdater: (direction: number) => void;
}

const Question: React.FC<QuestionTextProps> = ({ page, historyUpdater }) => {
  const handleAnswerSelected = (selected: string) => {
    if (page.answer && page.answer === selected) {
      alert("Correct!");
      historyUpdater(1);
    } else {
      alert("Wrong answer. Try again!");
    }
  };

  console.log("question.type is ", page.question_type);
  return page.question_type === "multiple choice" ? (
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
        handleAnswerSelected={handleAnswerSelected}
        question={page.question}
      />
    </View>
  );
};

export default Question;
