import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectionChange = (event) => {
    if (event.nativeEvent.selection) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
        <View style={{backgroundColor: 'blue', 
          fontWeight: 'bold', 
          borderRadius: 10, 
          margin: 30, 
          padding: 30}}>
        <Text style ={{fontSize: 15, color: '#FFF',
          marginLeft: -50,
          marginTop: -55,
          padding: 45
        }}>Tue, jan 18th, 2022</Text>
        <Text style = {{fontSize: 10, color: '#FFF', marginLeft: -5}}>Sleep Time</Text>
        <Text style = {{fontSize: 20, color: '#FFF', marginLeft: -5}}>00:00 - 07:00 a.m.</Text>
        </View>

        <View style={{backgroundColor: '#D6F1FF',  
          borderRadius: 10, 
          margin: 30, 
          marginTop: -20,
          padding: 30}}>
          <Text style ={{fontSize: 30, color: '#6F7BF7', fontWeight: 'bold', marginTop: -20, marginLeft: -15}}>Ready to Start</Text>
          <Text style ={{fontSize: 30, color: '#6F7BF7', fontWeight: 'bold', marginLeft: -15}}>Your Day?</Text>
          <Text style ={{fontSize: 13, color: '#232539', padding: 15, marginLeft: -25}}>Meditation to focus!</Text>
          <AntDesign name="play" size={30} color="#6F7BF7" style={styles.icon}/>
          <Text style ={{fontSize: 13, color: '#232539', fontWeight: 'bold', marginLeft: 15}}>5 Minutes</Text>
        </View>

        <TouchableOpacity onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <Text style={[ styles.alarmsText, isHovered || isSelected ? { textDecorationLine: 'underline' } : null]}
           onSelectionChange={handleSelectionChange}
           selectable={true}>
            Next Alarms
            </Text>
        </TouchableOpacity>

        <View style={{backgroundColor: '#6F7BF7', 
          fontWeight: 'bold', 
          borderRadius: 10, 
          margin: 40, 
          marginTop: -15,
          padding: 20}}>
          <Text style ={{fontSize: 25, 
            color: '#FFF', 
            marginLeft: -10, 
            marginTop: -15, 
            padding: 10}}>Drink Water</Text>
          <Text style ={{fontSize: 10, color: '#FFF', marginLeft: 1}}>Alarm at 8:20 a.m.</Text>
        </View>

        <View style={{backgroundColor: '#6F7BF7', 
          fontWeight: 'bold', 
          borderRadius: 10, 
          margin: 40, 
          marginTop: -30,
          padding: 20}}>
          <Text style ={{fontSize: 25, 
            color: '#FFF', 
            marginLeft: -10, 
            marginTop: -15, 
            padding: 10}}>Work Start</Text>
          <Text style ={{fontSize: 10, color: '#FFF', marginLeft: 1}}>Alarm at 9:00 a.m.</Text>
        </View>

        <View style={{backgroundColor: '#6F7BF7', 
          fontWeight: 'bold', 
          borderRadius: 10, 
          margin: 40, 
          marginTop: -30,
          padding: 20}}>
          <Text style ={{fontSize: 25, 
            color: '#FFF', 
            marginLeft: -10, 
            marginTop: -15, 
            padding: 10}}>Work Short Break</Text>
          <Text style ={{fontSize: 10, color: '#FFF', marginLeft: 1}}>Alarm at 9:25 a.m.</Text>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  alarmsText: {
    fontSize: 15, 
    color: '#6F7BF7', 
    marginLeft: 10, 
    padding: 30,
    fontWeight: 'bold',
    marginTop: -35,
    userSelect: 'text'

  },

  icon: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 123
  }

});

export default HomeScreen;
