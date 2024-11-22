import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Clock from '../components/Clock';
import SleepInfo from '../components/SleepInfo';
import Alarm from '../components/Alarm';

const AlarmsScreen = () => {
  const [quality, setQuality] = useState(''); 
  const [sleepTime, setSleepTime] = useState('08:00'); 

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <View style={styles.container}>
    
      <Clock />

      <SleepInfo
        quality={quality}
        setQuality={setQuality}
        sleepTime={sleepTime}
        setSleepTime={setSleepTime}
      />

  
      <Alarm />
    </View>
      
    </SafeAreaView>
  );
};

export default AlarmsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
