import React from "react";
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from "react-native";
import Header from "../components/Header";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>ACCOUNT</Text>
            <Ionicons name="shield" size={24} color='#fff' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>CLOCK</Text>
            <Ionicons name="alarm-outline" size={24} color='fff' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>Notificações</Text>
            <Ionicons name="notifications" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>HELP</Text>
            <Entypo name="help-with-circle" size={24} color="black" style={styles.icon}  />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: '#82B2F6',
        marginTop: 40,
        marginRight: 40,
        marginLeft: 40,
        height: 50,
        borderRadius: 10
    },
   title: {
        color: 'fff',
        fontSize: 25,
        marginLeft: 50
    },
    icon: {
        position: 'absolute',
        marginTop: 10,
        color: 'fff'
    }
});