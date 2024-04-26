import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SQLite, { SQLiteDatabase } from "react-native-sqlite-storage";
import { openDatabase } from "../Data/database";

// const DBComponent2: React.FC = () => {
//   const [content, setContent] = useState<string>("Loading...");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Open the database; adjust the location path as needed
//         const dbModule = require("../assets/testDB.db");
//         const db: SQLiteDatabase = await openDatabase(dbModule);
//         // const db: SQLiteDatabase = await openDatabase("../assets/testDB.db");
//         console.log("Database opened");

//         // Execute SQL query to fetch data from the 'strings' table
//         const results = await db.executeSql(
//           "SELECT content FROM strings WHERE id = 1;"
//         );
//         if (results[0].rows.length > 0) {
//           const row = results[0].rows.item(0);
//           setContent(row.content); // Assuming the column storing strings is named 'content'
//         } else {
//           setContent("No data found");
//         }

//         // Close the database
//         db.close();
//       } catch (error) {
//         console.error("Failed to access database", error);
//         setContent("Failed to load data");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{content}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5fcff",
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
// });

// export default DBComponent2;

const DBComponent2: React.FC = () => {
  const [content, setContent] = useState<string>("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Open the database; adjust the location path as needed
        const dbModule = require("../assets/testDB.db");

        const db: SQLiteDatabase = await openDatabase(dbModule);
        // const db: SQLiteDatabase = await openDatabase("../assets/testDB.db");
        console.log("Database opened");

        // Execute SQL query to fetch data from the 'strings' table
        const results = await db.executeSql(
          "SELECT content FROM strings WHERE id = 1;"
        );
        if (results[0].rows.length > 0) {
          const row = results[0].rows.item(0);
          setContent(row.content); // Assuming the column storing strings is named 'content'
        } else {
          setContent("No data found");
        }

        // Close the database
        db.close();
      } catch (error) {
        console.error("Failed to access database", error);
        setContent("Failed to load data");
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
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
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default DBComponent2;
