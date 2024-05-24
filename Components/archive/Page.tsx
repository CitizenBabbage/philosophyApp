import SQLite from "react-native-sqlite-storage";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ReferenceText from "./ReferenceText";
import FactText from "../FactText";
import Question from "./Question";

console.log(
  "+++++++++++++page.tsx refreshed+++++++++++++" + new Date().toString()
);
//child of Quiz.tsx

const dummyExample = { id: -1, content: "this is just a dummy example" };
const dummyQuestion = {
  id: -1,
  question_text: "this is just a dummy question",
  options: { a: "dummy a", b: "dummy b", c: "dummy c" },
  answer: ["dummy a"],
  type: "multiple choice",
};
const dummyFact = { id: -1, content: "this is just a dummy fact" };

interface PageProps {
  pageNum: number;
}

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
  id: number;
  content: string;
}

interface FactType {
  id: number;
  content: string;
}

export interface Options {
  a: string;
  b: string;
  c: string;
}

export interface QuestionType {
  id: number;
  question_text: string;
  options: Options;
  answer: string[];
  type: string | null;
}

const Page: React.FC<PageProps> = ({ pageNum }) => {
  const [example, setExample] = useState<ExampleType>(dummyExample);
  const [fact, setFact] = useState<FactType>(dummyFact);
  const [question, setQuestion] = useState<QuestionType>(dummyQuestion);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(`1. example is ${example}`);
  }, [example]);

  useEffect(() => {
    console.log(`2. fact is ${fact}`);
  }, [fact]);

  useEffect(() => {
    console.log(`3. question is ${question}`);
  }, [question]);

  useEffect(() => {
    let db: SQLite.SQLiteDatabase;
    const fetchData = async () => {
      try {
        // db = await dbConnection();
        db = await dbConnection().catch((err) => {
          console.error("Failed to connect:", err);
          throw err;
        });
        console.log("beep 1");
        const pageResults = await queryPage(db, pageNum);
        console.log("beep 2");
        const currentPage = pageResults.find((p: PageType) => p.id === pageNum);
        console.log("beep 3");
        console.log("current page is", currentPage);
        if (currentPage) {
          setExample(await queryExample(db, currentPage.example_id));
          setFact(await queryFact(db, currentPage.fact_id));
          setQuestion(await queryQuestion(db, currentPage.question_id));
        }
      } catch (error) {
        console.error(
          `Database access error: example is ${example}, fact is ${fact}, question is ${question}`,
          error
        );
      } finally {
        setIsLoading(false);
        if (db) {
          closeDatabase(db);
        }
      }
    };

    fetchData();
  }, [pageNum]);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View>
      {example && <ReferenceText content={example.content} />}
      {fact && <FactText content={fact.content} />}
      {question && <Question question={question} />}
    </View>
  );
};

export default Page;
