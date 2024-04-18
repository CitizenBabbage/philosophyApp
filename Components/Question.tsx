import React from "react";
import { View, Text } from "react-native";
import questionDB from "../Data/questions.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

interface QuestionTextProps {
  qID: number;
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
  options: string[];
  answer: string[];
}

function getQuobject(idNumber: number): Question | undefined {
  return questionDB.find((item) => item.id === idNumber);
}

const Question: React.FC<QuestionTextProps> = ({ qID }) => {
  const quobject: Question | string | undefined = getQuobject(qID);
  const question: string = quobject ? quobject.text : "No quobject";
  const options: string[] | undefined = quobject ? quobject.options : undefined;
  const answer: string[] | undefined = quobject ? quobject.answer : undefined;

  const handleAnswerSelected = (selected: string) => {
    if (answer && answer.includes(selected)) {
      alert("Correct!");
    } else {
      alert("Wrong answer. Try again!");
    }
  };

  return (
    <View>
      <MultipleChoiceQuestion
        question={question}
        options={options}
        answer={answer}
        onAnswerSelected={handleAnswerSelected}
      />
    </View>
  );
};

export default Question;
