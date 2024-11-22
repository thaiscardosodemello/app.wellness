import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Alarm = ({ label }) => {

  const [time1, setTime1] = useState('06:00'); 
  const [isEnabled1, setIsEnabled1] = useState(false); 

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [time2, setTime2] = useState('07:00'); 
  const [isEnabled2, setIsEnabled2] = useState(false); 

  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Next Sleep Episode</Text>
    
      <View style={styles.alarmContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.alarmRow}>
          <Ionicons name="alarm-sharp" size={30} color="black" />
          <TextInput
            style={styles.input}
            value={time1}
            onChangeText={setTime1}
            placeholder="HH:MM"
            keyboardType="numeric"
          />
          <Switch
            value={isEnabled1}
            onValueChange={toggleSwitch1}
          />
        </View>
      </View>
      
  
      <View style={styles.alarmContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.alarmRow}>
          <Ionicons name="alarm-sharp" size={30} color="black" />
          <TextInput
            style={styles.input}
            value={time2}
            onChangeText={setTime2}
            placeholder="HH:MM"
            keyboardType="numeric"
          />
          <Switch
            value={isEnabled2}
            onValueChange={toggleSwitch2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'baseline',
  },
  alarmContainer: {
    marginTop: 10,
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'rgba(200, 162, 255, 0.2)', 
    borderRadius: 10,
    padding: 10,
    marginLeft: 5
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10,
  },
  alarmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: '100%', 
  },
  input: {
    height: 40,
    borderColor: 'rgba(200, 162, 255, 0.5)',
    borderWidth: 1,
    textAlign: 'center',
    marginRight: 10,
    width: '20%', 
    borderRadius: 5,
  },
  title: {
    color: 'purple',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 5
  }
});

export default Alarm;
