import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'; 
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';

const SleepInfo = () => {

  const [quality, setQuality] = useState('');
  const [sleepTime, setSleepTime] = useState('08:00');
  const qualityPercentage = Math.min(Math.max(parseFloat(quality), 0), 100); 

  const totalMinutes = 8 * 60; 
  const [hours, minutes] = sleepTime.split(':').map(Number); 
  const enteredMinutes = (hours * 60) + minutes;
  
  
  const sleepDurationPercentage = Math.min((enteredMinutes / totalMinutes) * 100, 100); 

  
  const remainingPercentage = 100 - sleepDurationPercentage;

  return (
    <View style={styles.container}>
      <View style={styles.divisionRow}>
        <View style={[styles.division, styles.qualityContainer]}>
          <View style={styles.titleContainer}>
          <Entypo name="bar-graph" size={24} color="black" />
            <Text style={styles.title}>Quality</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter the sleep quality (%)"
            value={quality}
            onChangeText={setQuality}
          />
          <View style={[styles.bar, {
            width: `${qualityPercentage}%`,
            backgroundColor: '#D898E8',
            borderRadius: 10,
          }]}/>
          <Text>{qualityPercentage}%</Text>
        </View>

        <View style={[styles.division, styles.qualityContainer]}>
          <View style={styles.titleContainer}>
          <Foundation name="graph-pie" size={24} color="black" />
            <Text style={styles.title}>Duration</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="HH:MM"
            value={sleepTime}
            onChangeText={setSleepTime}
          />
          <View style={styles.barContainer}>
            <View style={[styles.barFilled, {
              width: `${sleepDurationPercentage}%`,
              backgroundColor: '#D898E8',
              borderRadius: 10,
            }]}/>

          
          </View>
          <Text>{`${hours}h ${minutes}m`} / 8h 00m</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  divisionRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
  },
  division: {
    width: '48%', 
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  qualityContainer: {
    backgroundColor: 'rgba(200, 162, 255, 0.2)',
  },
  durationContainer: {
    backgroundColor: 'rgba(200, 162, 255, 0.2)', 
  },
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8, 
    color: 'purple',
  },
  icon: {
    marginRight: 8,
    marginTop: 3,
    color: 'black',
    backgroundColor: 'rgba(200, 162, 255, 0.2)', 
    borderRadius: 5,
    padding: 5,
    fontSize: 16,

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
  },
  barContainer: {
    height: 12,
    marginBottom: 10,
    flexDirection: 'column', 
    width: '100%',
    backgroundColor: 'rgba(200, 162, 255, 0.2)', 
    borderRadius: 10,
  },
  barFilled: {
    height: '100%',
  },
  barRemaining: {
    height: '100%',
  },
  bar: {
    height: 12,
    marginBottom: 10,
  },
});

export default SleepInfo;
