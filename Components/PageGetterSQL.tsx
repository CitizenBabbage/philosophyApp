import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import Question from "./archive/Question";
import FactText from "./FactText";
import ExampleText from "./archive/ExampleText";
import { SafeAreaView } from "react-native";

const pagesid = 10;

interface PageType {
  id: number;
  chapter: number;
  section: number;
  subsection: number;
  subsection_index: number;
  example_id: number;
  fact_id: number;
  question_id: number;
  next_page_id: number;
}

interface ExampleType {
  id?: number;
  content?: string;
}

interface FactType {
  id?: number;
  content?: string;
}

export interface QuestionType {
  id?: number;
  question_text?: string;
  options?: string;
  answer?: string;
  type?: string | null;
}

const executeSqlAsync = (
  db: SQLite.SQLiteDatabase,
  sql: string,
  params: any[] = []
): Promise<any> => {
  // Ensure the function returns the new Promise
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLite.SQLTransaction) => {
      tx.executeSql(
        sql,
        params,
        (_, result) => resolve(result),
        (_, error) => {
          console.error("SQL Error:", error);
          reject(error);
          return false; // Stop transaction on error
        }
      );
    });
  });
};

export const PageGetterSQL = () => {
  const [data, setData] = useState([]);
  const [example, setExample] = useState<ExampleType>({});
  const [fact, setFact] = useState<FactType>({});
  const [question, setQuestion] = useState<QuestionType>({});

  useEffect(() => {
    const fetchData = async () => {
      const dbPath = FileSystem.documentDirectory + "contentDB.db";
      const db = SQLite.openDatabase("contentDB.db");

      try {
        const pagesResult = await executeSqlAsync(
          db,
          `SELECT * FROM pages WHERE id = ${pagesid};`
        );
        setData(pagesResult.rows._array);

        if (pagesResult.rows._array.length > 0) {
          const exampleId = pagesResult.rows._array[0].example_id;
          const examplesResult = await executeSqlAsync(
            db,
            `SELECT * FROM examples WHERE id = ${exampleId};`
          );
          setExample(examplesResult.rows._array[0]); // examplesResult.rows._array is an array containing a single example object

          const factId = pagesResult.rows._array[0].fact_id;
          const factResult = await executeSqlAsync(
            db,
            `SELECT * FROM facts WHERE id = ${factId};`
          );
          setFact(factResult.rows._array[0]);

          const qId = pagesResult.rows._array[0].question_id;
          const qResult = await executeSqlAsync(
            db,
            `SELECT * FROM questions WHERE id = ${qId};`
          );
          //console.log("qResult is", JSON.stringify(qResult));
          setQuestion(qResult.rows._array[0]);
        } else {
          console.log("No pages found for the given ID");
          setExample({});
          setFact({});
        }
      } catch (error) {
        console.error("Database operation failed", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
      {/* <Text>Popeye</Text>
      <Text>Olive</Text>
      <Text>Bluto</Text> */}
      <ScrollView style={{ width: "100%" }}>
        {/* <Text style={{ margin: 10 }}>{example.content}</Text>
        <Text style={{ margin: 10 }}>{fact.content}</Text> */}
        {/* <Question
          id={question.id}
          question_text={question.question_text}
          options={question.options}
          answer={question.answer}
          type={question.type}
        /> */}
        <ExampleText content={example.content} />
        <FactText content={fact.content} />
        <Question question={question} />
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};
