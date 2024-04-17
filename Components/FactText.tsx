import React from "react";
import { View, Text } from "react-native";
// Import your quiz question components here

interface FactTextProps {
  factText: string;
}

const FactText: React.FC<FactTextProps> = ({ factText }) => {
  return (
    <View>
      <Text>{factText}</Text>
    </View>
  );
};

export default FactText;
