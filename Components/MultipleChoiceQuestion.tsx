import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface QuestionProps {
  question: string | undefined;
  options: string[] | undefined;
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
      {options.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.answerButton,
            answer === selectedAnswer ? styles.selected : null,
          ]}
          onPress={() => handleAnswerPress(answer)}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MultipleChoiceQuestion;
