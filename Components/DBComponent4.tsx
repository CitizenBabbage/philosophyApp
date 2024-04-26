import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { openDatabase } from "../Data/database";

console.log(
  "+++++++++++++++++++DBcomponent5 refreshed +++++++++++++++++++++++++"
);
interface DatabaseRow {
  id: number;
  content: string;
}

export const DBComponent4 = () => {
  const [data, setData] = useState<DatabaseRow[]>([]); // Initialize state with the correct type

  useEffect(() => {
    console.log("use effect triggered");
    async function checkDatabaseFile() {
      const dbPath = FileSystem.documentDirectory + "testDB.db";
      const fileInfo = await FileSystem.getInfoAsync(dbPath);
      console.log("Database file path:", dbPath);
      console.log("Database file info:", fileInfo);
    }

    checkDatabaseFile();
    console.log("about to open database in DBcomponent...");
    const db = SQLite.openDatabase("testDB.db");

    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM strings;",
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
      },
      (error) => {
        console.error("Transaction error:", error);
      },
      () => {
        console.log("Transaction successful");
      }
    );
  }, []);
  console.log("Data to render:", data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>blah</Text>
      <ScrollView style={{ width: "100%" }}>
        {data.map((item, index) => (
          <Text key={index} style={{ margin: 10 }}>
            ID: {item.id}, Content: {item.content}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
