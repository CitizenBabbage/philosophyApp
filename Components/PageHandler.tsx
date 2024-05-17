import SQLite from "react-native-sqlite-storage";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ReferenceText from "./ReferenceText";
import FactText from "./FactText";
import Question from "./Question";
import Swipeable from "react-native-gesture-handler/Swipeable";
import FactSwiper from "./FactSwiper";

console.log(
  "+++++++++++++SwipePage.tsx refreshed+++++++++++++" + new Date().toString()
);
//child of Quiz.tsx

const dummyFactList = [
  "An argument is a piece of persuasive reasoning.",
  "For example, in the USA many years ago a certain bumper sticker became popular. It said 'if guns are outlawed, only outlaws will have guns'. This is an abbreviated argument.",
  "Unfortunately, most people decide whether an argument is good or bad by looking at the conclusion. If they agree with the conclusion, they will find the argument agreeable. If they disagree with the conclusion, they will dislike the argument for it.",
  "This is the wrong way to decide whether an argument is good or bad.",
];

const PageHandler: React.FC = () => {
  const [factList, setFactList] = useState<string[]>(dummyFactList);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <View>
      <FactSwiper />
    </View>
  );
};

export default PageHandler;
