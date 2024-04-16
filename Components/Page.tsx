import React from "react";
import { View, Text } from "react-native";
import ReferenceText from "./ReferenceText";
import FactText from "./FactText";
import Question from "./Question";

// Import your quiz question components here

const Page: React.FC = () => {
  return (
    <View>
      <ReferenceText />
      <FactText />
      <Question />
      {/* Render your quiz question components here */}
    </View>
  );
};

export default Page;
