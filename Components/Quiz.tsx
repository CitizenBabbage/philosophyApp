import React from "react";
import { View, Text } from "react-native";
import Page from "./archive/Page";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import DatabaseComponent from "./archive/DatabaseComponent";
import DBComponent2 from "./archive/DBComponent2";
import { DBComponent3 } from "./archive/DBComponent3";
import { DBComponent4 } from "./archive/DBComponent4";
import { DBComponent5 } from "./archive/DBcomponent5";
import PageHandler from "./PageHandler";

//child of UIshell.tsx

const Quiz: React.FC = () => {
  return (
    <View>
      <PageHandler />
    </View>
  );
};

export default Quiz;
