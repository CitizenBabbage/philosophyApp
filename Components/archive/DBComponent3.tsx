import * as SQLite from "expo-sqlite";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

console.log(
  "++++++++++++++++++++++DBComponent3 refreshed++++++++++++++++++++++++++++"
);
export const DBComponent3 = () => {
  useEffect(() => {
    // Open a database, creating it if it doesn't exist
    const db = SQLite.openDatabase("test2DB.db");

    // Perform a transaction to create a table and insert a row
    db.transaction(
      (tx) => {
        // Create a table if it does not already exist
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS Items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);",
          [],
          () => console.log("Table created"), // Success callback for CREATE TABLE
          (_, error) => {
            console.error("Error creating table:", error);
            return true;
          } // Error callback
        );

        // Insert a sample item into the table
        tx.executeSql(
          "INSERT INTO Items (name) VALUES (?);",
          ["Sample item"],
          (_, result) => console.log("Item inserted, ID:", result.insertId), // Success callback for INSERT
          (_, error) => {
            console.error("Error inserting item:", error);
            return true;
          } // Error callback
        );

        // Select all items from the table
        tx.executeSql(
          "SELECT * FROM Items;",
          [],
          (_, { rows }) => console.log("Items:", rows._array), // Success callback for SELECT
          (_, error) => {
            console.error("Error selecting items:", error);
            return true;
          } // Error callback
        );
      },
      (error) => {
        console.error("Transaction error:", error);
      },
      () => {
        console.log("Transaction completed successfully");
      }
    );
  }, []);

  // Basic UI to indicate the component is loaded
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Database Component Loaded</Text>
    </View>
  );
};
