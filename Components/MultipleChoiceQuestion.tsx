import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Options } from "./Page";

interface QuestionProps {
  question: string;
  options: Options;
  answer: string[] | undefined;
  onAnswerSelected: (selection: string) => void;
}

const MultipleChoiceQuestion: React.FC<QuestionProps> = ({
  question,
  options,
  answer,
  onAnswerSelected,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerPress = (selection: string) => {
    setSelectedAnswer(selection);
    onAnswerSelected(selection);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      {answer &&
        answer.map((answ, index) => (
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
