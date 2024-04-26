import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

console.log(
  "+++++++++++++++++++DBcomponent5 refreshed +++++++++++++++++++++++++" +
    new Date().toString()
);

const factid = 10;
interface DatabaseRow {
  id: number;
  content: string;
}

export const DBComponent5 = () => {
  const [data, setData] = useState<DatabaseRow[]>([]); // Initialize state with the correct type
  const [example, setExample] = useState<DatabaseRow[]>([]); // Initialize state with the correct type

  useEffect(() => {
    async function checkDatabaseFile() {
      const dbPath = FileSystem.documentDirectory + "contentDB.db";
      const fileInfo = await FileSystem.getInfoAsync(dbPath);
      console.log("Database file info:", fileInfo);
      console.log("Database file path:", dbPath);
    }

    checkDatabaseFile();

    const db = SQLite.openDatabase("contentDB.db");

    db.transaction(
      (tx) => {
        tx.executeSql(
          `SELECT * FROM pages WHERE id = ${factid};`,
          [],
          (_, { rows }) => {
            console.log("Rows:", rows._array);
            setData(rows._array); // This should now be compatible with the state type
          },
          (_, error) => {
            console.error("Query error:", error);
            return true;
          }
        );
        console.log(`data after sql query is ${JSON.stringify(data)}`);
      },
      (error) => {
        console.error("Transaction error:", error);
      },
      () => {
        console.log("Transaction successful");
      }
    );

    db.transaction(
      (tx) => {
        tx.executeSql(
          `SELECT * FROM examples WHERE id = ${data[0].example_id};`,
          [],
          (_, { rows }) => {
            console.log("Rows:", rows._array);
            setExample(rows._array);
          },
          (_, error) => {
            console.error("Query error:", error);
            return true;
          }
        );
        console.log(`example after sql query is ${JSON.stringify(example)}`);
      },
      (error) => {
        console.error("Transaction error when seeking example:", error);
      },
      () => {
        console.log("Transaction successful when seeking example");
      }
    );
  }, []);
  console.log("Data to render:", example);
  console.log("Type of data ", typeof example);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Popeye</Text>
      <Text>Olive</Text>
      <Text>Bluto</Text>
      <ScrollView style={{ width: "100%" }}>
        {example.map((item, index) => (
          <Text key={index} style={{ margin: 10 }}>
            ID: {item.content}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
