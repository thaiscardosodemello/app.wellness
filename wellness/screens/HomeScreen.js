import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Text>Conteúdo da Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
