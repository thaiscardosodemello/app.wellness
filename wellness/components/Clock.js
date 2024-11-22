
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

const Clock = () => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const [sleepPercentage, setSleepPercentage] = useState(50); 
  const sleepCircumference = (sleepPercentage / 100) * circumference;

  // Função para lidar com o clique e atualizar o sono
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const centerX = 110;
    const centerY = 110;

    // Calculando o ângulo do clique
    const angle = Math.atan2(locationY - centerY, locationX - centerX);
    const angleInDegrees = (angle * 180) / Math.PI + 180; // Convertendo para graus

    // Atualizando o percentual de sono baseado no ângulo
    const newPercentage = Math.round((angleInDegrees / 360) * 100);
    setSleepPercentage(newPercentage);
  };

  // Função para calcular a posição radial dos marcadores (para as horas 00, 06, 12, 18)
  const getMarkerPosition = (angle) => {
    const innerRadius = radius - 15; // Marcadores mais internos, com um pequeno afastamento da borda
    const radians = (angle - 90) * (Math.PI / 180); // Convertendo para radianos e ajustando o ângulo
    const x = 110 + Math.cos(radians) * innerRadius;
    const y = 110 + Math.sin(radians) * innerRadius;
    return { x, y };
  };

  // Definindo as posições dos marcadores (00:00, 06:00, 12:00, 18:00)
  const markers = [0, 6, 12, 18]; // Horários fixos no círculo: 00:00, 06:00, 12:00, 18:00

  // Calculando as posições dos marcadores
  const markerPositions = markers.map(marker => getMarkerPosition(marker));

  return (
    <View style={styles.container}>
      <Svg width={220} height={220} viewBox="0 0 220 220" onPress={handlePress}>
        {/* Borda do relógio com espessura normal (sem alteração) */}
        <Circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#ddd"
          strokeWidth={15}  
          fill="none"
        />
        
        {/* Barra de sono */}
        <Circle
          cx="110"
          cy="110"
          r={radius}
          stroke="blue"
          strokeWidth={15} 
          strokeDasharray={circumference}
          strokeDashoffset={circumference - sleepCircumference}
        />

        {/* Marcadores de hora (00, 06, 12, 18) */}
        {markerPositions.map((pos, index) => (
          <SvgText
            key={index}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            fontSize="12"
            fill="black"
          >
            {markers[index]}:00
          </SvgText>
        ))}
      </Svg>

      {/* Hora ao centro em fonte grande */}
      <Text style={styles.centerText}>{sleepPercentage}% do dia de sono</Text>
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
    fontSize: 30,  // Fonte maior
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default Clock;
