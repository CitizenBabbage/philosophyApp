import React from "react";
import { View, Text } from "react-native";
import questionDB from "../Data/questions.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import { QuestionType } from "./PageGetterSQL";
import { PageType } from "./PageHandler";

interface QuestionTextProps {
  page: PageType;
}

// function getQuobject(idNumber: number): Question | undefined {
//   return questionDB.find((item) => item.id === idNumber);
// }

const Question: React.FC<QuestionTextProps> = ({ page }) => {
  const handleAnswerSelected = (selected: string) => {
    if (page.answer && page.answer === selected) {
      alert("Correct!");
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
      <Text />
    </View>
  );
};

export default Question;
