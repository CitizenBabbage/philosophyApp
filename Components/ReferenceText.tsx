import React from "react";
import { View, Text } from "react-native";
import referenceDB from "../Data/references.json";

interface ReferenceTextProps {
  refID: number; // Define the type for the 'text' prop
}

function getText(idNumber: number): string | undefined {
  const refObject = referenceDB.find((item) => item.id === idNumber);
  if (refObject && refObject.text) {
    return refObject.text;
  }
  return "Error: No text for reference space.";
}

// const ReferenceText: React.FC<ReferenceTextProps> = ({}) => {
const ReferenceText: React.FC<ReferenceTextProps> = ({ refID }) => {
  const text = getText(refID);
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default ReferenceText;
