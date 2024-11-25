import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Circle, Text as SvgText } from "react-native-svg";

const Clock = () => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const [sleepPercentage, setSleepPercentage] = useState(50);
  const sleepCircumference = (sleepPercentage / 100) * circumference;
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();

      // Ajuste para formato de 12 horas (sem AM ou PM)
      hours = hours > 12 ? hours - 12 : hours;
      setCurrentTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const centerX = 120;
    const centerY = 120;

    const angle = Math.atan2(locationY - centerY, locationX - centerX);
    const angleInDegrees = (angle * 180) / Math.PI + 180;

    const newPercentage = Math.round((angleInDegrees / 360) * 100);
    setSleepPercentage(newPercentage);
  };

  const getHourPosition = (hour) => {
    const angle = (hour / 24) * 360 - 90;
    const radians = (angle * Math.PI) / 180;
    const offset = 25;

    const x = 120 + (radius - offset) * Math.cos(radians);
    const y = 120 + (radius - offset) * Math.sin(radians);

    return { x, y };
  };

  const points = [0, 6, 12, 18].map((hour) => getHourPosition(hour));

  const progressLinePosition = (6 / 24) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={240} height={240} viewBox="0 0 240 240" onPress={handlePress}>
        <Circle
          cx="120"
          cy="120"
          r={radius}
          stroke="#6F7BF7"
          strokeWidth={25}
          fill="none"
        />

        <Circle
          cx="120"
          cy="120"
          r={radius}
          stroke="#9BF8F4"
          strokeWidth={15}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressLinePosition}
          fill="none"
          strokeLinecap="round"
        />

        {/* Marcações de hora */}
        {points.map((point, index) => (
          <SvgText
            key={index}
            x={point.x}
            y={point.y}
            textAnchor="middle"
            fontSize="10"
            fill="#15172C"
            alignmentBaseline="middle"
          >
            {index === 0
              ? "00"
              : index === 1
              ? "06"
              : index === 2
              ? "12"
              : "18"}
          </SvgText>
        ))}

        {/* Texto do relógio */}
        <SvgText
          x="120"
          y="120"
          textAnchor="middle"
          fontSize="35"
          fill="#6F7BF7"
          fontWeight="bold"
          alignmentBaseline="middle"
        >
          {currentTime}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 10,
  },
});

export default Clock;
