
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

const Clock = () => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const [sleepPercentage, setSleepPercentage] = useState(50); 
  const sleepCircumference = (sleepPercentage / 100) * circumference;
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);



  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const centerX = 110;
    const centerY = 110;


    const angle = Math.atan2(locationY - centerY, locationX - centerX);
    const angleInDegrees = (angle * 180) / Math.PI + 180;

    const newPercentage = Math.round((angleInDegrees / 360) * 100);
    setSleepPercentage(newPercentage);
  };


  return (
    <View style={styles.container}>
      <Svg width={220} height={220} viewBox="0 0 220 220" onPress={handlePress}>
        <Circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#ddd"
          strokeWidth={15}  
          fill="none"
        />

        <Circle
          cx="110"
          cy="110"
          r={radius}
          stroke="blue"
          strokeWidth={15} 
          strokeDasharray={circumference}
          strokeDashoffset={circumference - sleepCircumference}
          fill='none'
        />
        <SvgText
            x='110'
            y='110'
            textAnchor='middle'
            fontSize= '35'
            fill = 'purple'
            fontWeight= 'bold'
            alignmentBaseline= 'middle'
        >
          {currentTime}
        </SvgText>
      </Svg>

      <Text style={styles.centerText}>{sleepPercentage}% of the day's sleep</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  centerText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default Clock;
