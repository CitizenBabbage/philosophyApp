import React from "react";
import { View, Text } from "react-native";
import questionDB from "../Data/questions.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import { QuestionType } from "./Page";

interface QuestionTextProps {
  question: QuestionType;
}

// function getQuobject(idNumber: number): Question | undefined {
//   return questionDB.find((item) => item.id === idNumber);
// }

const Question: React.FC<QuestionTextProps> = ({ question }) => {
  // const quobject: Question | string | undefined = getQuobject(qID);
  // const question: string = quobject ? quobject.text : "No quobject";
  // const options: string[] | undefined = quobject ? quobject.options : undefined;
  // const answer: string[] | undefined = quobject ? quobject.answer : undefined;

  const handleAnswerSelected = (selected: string) => {
    if (question.answer && question.answer.includes(selected)) {
      alert("Correct!");
    } else {
      alert("Wrong answer. Try again!");
    }
  };

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
