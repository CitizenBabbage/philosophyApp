import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface ExampleTextProps {
  // factID: number;
  content: string | undefined;
}

// function getText(idNumber: number): string | undefined {
//   const factObject = factDB.find((item) => item.id === idNumber);
//   if (factObject && factObject.text) {
//     return factObject.text;
//   }
//   return "Error: No text for fact space.";
// }

const ExampleText: React.FC<ExampleTextProps> = ({ content }) => {
  // const text = getText(factID);
  return (
    <View style={styles.container}>
      <Text style={styles.exampleText}>{content}</Text>
    </View>
  );
};

export default ExampleText;
