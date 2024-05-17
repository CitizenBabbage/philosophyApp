import React from "react";
import { View, Text } from "react-native";
import Page from "./Page";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import DatabaseComponent from "./DatabaseComponent";
import DBComponent2 from "./DBComponent2";
import { DBComponent3 } from "./DBComponent3";
import { DBComponent4 } from "./DBComponent4";
import { DBComponent5 } from "./DBcomponent5";
import PageHandler from "./PageHandler";

//child of UIshell.tsx

const Quiz: React.FC = () => {
  return (
    <View>
      {/* <DatabaseComponent /> */}
      {/* <DBComponent2 /> */}
      {/* <Page pageNum={page} /> */}
      {/* <DBComponent3 /> */}
      {/* <DBComponent4 /> */}
      {/* <DBComponent5 /> */}
      {/* <DBComponent6 /> */}
      <PageHandler />
    </View>
  );
};

export default Quiz;
