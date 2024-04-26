import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import UIshell from "./Components/UIshell";
import { StatusBar } from "expo-status-bar";
import { copyDatabase } from "./Data/database";

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    console.log("++++++++++APP initiated+++++++++++++" + new Date().toString());

    async function setupDatabase() {
      try {
        // Wait for database copy to complete
        await copyDatabase(require("./assets/contentDB.db"));
        console.log("Database setup completed");
      } catch (error) {
        console.error("Error setting up database:", error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of the outcome
      }
    }

    setupDatabase();
  }, []);

  // Display loading indicator while database is being prepared
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Database...</Text>
      </View>
    );
  }

  // Render the main UI after the database setup is complete
  return (
    <View style={styles.container}>
      <UIshell />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
