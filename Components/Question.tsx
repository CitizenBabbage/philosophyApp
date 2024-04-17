import React from "react";
import { View, Text } from "react-native";
// Import your quiz question components here

interface QuestionTextProps {
  qText: string;
}

const Question: React.FC<QuestionTextProps> = ({ qText }) => {
  return (
    <View>
      <Text>{qText}</Text>
      {/* Render your quiz question components here */}
    </View>
  );
};

export default Question;
