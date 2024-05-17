import React from "react";
import { View, Text } from "react-native";
import Quiz from "./Quiz";

///child of app.tsx

const dummyPage = 10;

const UIshell: React.FC = () => {
  return (
    <View>
      <Quiz />
    </View>
  );
};

export default UIshell;
