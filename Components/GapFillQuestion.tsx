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

  const checkAnswer = () => {
    handleAnswerSelected(userAnswer.trim().toLowerCase());
  };
  console.log("rendering gap fill");
  return (
    // <View>
    //   <Text>boo boo</Text>
    // </View>

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
