import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const pagesid = 10;

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

export const DBComponent6 = () => {
  const [data, setData] = useState([]);
  const [example, setExample] = useState([]);
  const [fact, setFact] = useState([]);

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
          setExample(examplesResult.rows._array);

          const factId = pagesResult.rows._array[0].fact_id;
          const factResult = await executeSqlAsync(
            db,
            `SELECT * FROM facts WHERE id = ${factId};`
          );
          setFact(factResult.rows._array);
        } else {
          console.log("No pages found for the given ID");
          setExample([]);
          setFact([]);
        }
      } catch (error) {
        console.error("Database operation failed", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Popeye</Text>
      <Text>Olive</Text>
      <Text>Bluto</Text>
      <ScrollView style={{ width: "100%" }}>
        {example.map((item, index) => (
          <Text key={index} style={{ margin: 10 }}>
            {item.content}
          </Text>
        ))}
        {fact.map((item, index) => (
          <Text key={index} style={{ margin: 10 }}>
            {item.content}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
