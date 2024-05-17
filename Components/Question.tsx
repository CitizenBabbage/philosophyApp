import React from "react";
import { View, Text } from "react-native";
import questionDB from "../Data/questions.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import { QuestionType } from "./PageGetterSQL";

interface QuestionTextProps {
  question: QuestionType;
}

// function getQuobject(idNumber: number): Question | undefined {
//   return questionDB.find((item) => item.id === idNumber);
// }

const Question: React.FC<QuestionTextProps> = ({ question }) => {
  const handleAnswerSelected = (selected: string) => {
    if (question.answer && question.answer.includes(selected)) {
      alert("Correct!");
    } else {
      alert("Wrong answer. Try again!");
    }
  };

  console.log("question.type is ", question.type);
  return question.type === "multiple choice" ? (
    <View>
      <MultipleChoiceQuestion
        question={question.question_text}
        options={question.options}
        answer={question.answer}
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
