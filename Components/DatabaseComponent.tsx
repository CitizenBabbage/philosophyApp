import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("testDB.db");

const DatabaseComponent = () => {
  const [content, setContent] = useState("Loading..."); // Initialize with a safe string

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS strings (id INTEGER PRIMARY KEY NOT NULL, content TEXT NOT NULL);",
        [],
        () => {
          console.log("Table created successfully");
          tx.executeSql(
            "INSERT OR IGNORE INTO strings (id, content) VALUES (1, 'this is some content');",
            [],
            () => {
              console.log("Data inserted successfully");
              tx.executeSql(
                "SELECT content FROM strings WHERE id = 1;",
                [],
                (_, result) => {
                  if (result.rows.length > 0) {
                    setContent(result.rows.item(0).content);
                  } else {
                    setContent("No content found");
                  }
                },
                (t, error) => {
                  console.log("Error retrieving data");
                  console.log(error);
                }
              );
            },
            (t, error) => {
              console.log("Error while inserting data");
              console.log(error);
            }
          );
        },
        (t, error) => {
          console.log("Error while creating table");
          console.log(error);
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      {/* Ensure content is always a string */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
});

export default DatabaseComponent;
