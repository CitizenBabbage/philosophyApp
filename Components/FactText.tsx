import React from "react";
import { View, Text } from "react-native";
import factDB from "../Data/facts.json";

interface FactTextProps {
  // factID: number;
  content: string;
}

// function getText(idNumber: number): string | undefined {
//   const factObject = factDB.find((item) => item.id === idNumber);
//   if (factObject && factObject.text) {
//     return factObject.text;
//   }
//   return "Error: No text for fact space.";
// }

const FactText: React.FC<FactTextProps> = ({ content }) => {
  // const text = getText(factID);
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default FactText;
