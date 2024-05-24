import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Options } from "./archive/Page";

interface QuestionProps {
  question: string | undefined;
  options: string[] | undefined;
  answer: string | undefined;
  onAnswerSelected: (selection: string) => void;
}

const MultipleChoiceQuestion: React.FC<QuestionProps> = ({
  question,
  options,
  answer,
  onAnswerSelected,
}) => {
  console.log("MultipleChoiceQuestion reached ");
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleAnswerPress = (selection: string) => {
    setSelectedAnswer(selection);
    onAnswerSelected(selection);
  };
  console.log("question in multiple choice question is ", question);
  console.log("answer in multiple choice question is ", answer);
  console.log("options in multiple choice question is ", options);
  console.log(JSON.stringify(options)); // logs the array
  // options && console.log(Array.isArray(JSON.parse(options))); // should log true
  // console.log(typeof options.map); // should log 'function'
  // options.map((option) => console.log(option)); // test .map()
  // let multipleOptions: string[] | undefined;
  // if (options) {
  //   multipleOptions = JSON.parse(options);
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      {options &&
        options.map((answ, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              answ === selectedAnswer ? styles.selected : null,
            ]}
            onPress={() => handleAnswerPress(answ)}
          >
            <Text style={styles.answerText}>{answ}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default MultipleChoiceQuestion;
