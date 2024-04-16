import React from "react";
import { View, Text } from "react-native";

interface ReferenceTextProps {
  refText: string; // Define the type for the 'text' prop
}

// const ReferenceText: React.FC<ReferenceTextProps> = ({}) => {
const ReferenceText: React.FC<ReferenceTextProps> = ({ refText }) => {
  return (
    <View>
      <Text>{refText}</Text>
    </View>
  );
};

export default ReferenceText;
