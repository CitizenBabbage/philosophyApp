import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { styles } from "./styles";

// Define the type for the question props
interface GapFillQuestionProps {
  handleAnswerSelected: (selection: string) => void;
  question: string;
}

// GapFillQuestion Component
const GapFillQuestion: React.FC<GapFillQuestionProps> = ({
  handleAnswerSelected,
  question,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  // const [firstHalf, setFirstHalf] = useState("xxx");
  // const [secondHalf, setSecondHalf] = useState("yyy");

  // function getQuestionParts(gapFillText: string) {
  //   let phase = 0;
  //   let firstIndex = 0,
  //     secondIndex = gapFillText.length - 1;
  //   for (let i = 0; i < gapFillText.length; i++) {
  //     if (phase === 0 && gapFillText[i] === "_") {
  //       firstIndex = i;
  //       phase = 1;
  //     } else if (phase === 1 && gapFillText[i] !== "_") {
  //       secondIndex = i;
  //       break;
  //     } else {
  //     }
  //   }
  //   return [firstIndex, secondIndex];
  // }

  // useEffect(() => {
  //   const indices = getQuestionParts(question);
  //   const firstIndex = indices ? indices[0] : 5;
  //   const part1 = question.slice(0, firstIndex);
  //   const part2 = question.slice(indices ? indices[1] : 5);
  //   setFirstHalf(part1);
  //   setSecondHalf(question.slice(indices ? indices[1] : question.length));
  // }, [question]);

  const checkAnswer = () => {
    handleAnswerSelected(userAnswer.trim().toLowerCase());
  };
  // console.log("firstHalf is", firstHalf);
  return (
    <View style={styles.gapFillContainer}>
      <Text style={styles.gapFillQuestionText}>{question}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserAnswer}
        value={userAnswer}
        placeholder="Type your answer here"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <Button title="Submit" onPress={checkAnswer} />
    </View>
  );
};

export default GapFillQuestion;
