import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar as RNCalendar } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

const CustomCalendar = () => {
  return (
    <View style={styles.container}>
      <RNCalendar
        style={styles.calendar}
        renderArrow={(direction) => (
          <Feather size={24} color="#9BF8F4" name={`chevron-${direction}`} />
        )}
        headerStyle={{
          paddingBottom: 5,
          marginBottom: 10,
        }}
        renderHeader={() => (
          <Text style={styles.headerTitle}>November 2024</Text>
        )}
        theme={{
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#6F7BF7",
    textAlign: "center",
  },
});

export default CustomCalendar;
