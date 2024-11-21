import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  Modal,
  View,
  TextInput,
  Button,
} from "react-native";
// Importando os ícones
import Icon from "react-native-vector-icons/FontAwesome";
// Components
import Header from "../components/Header";
import CustomCalendar from "../components/CustomCalendar";
import ProgressBar from "react-native-progress/Bar";

const CalendarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [habitList, setHabitList] = useState([
    { id: 1, name: "Drink Water", isEditing: false },
  ]);
  const [currentHabit, setCurrentHabit] = useState(null);

  const handleEditHabit = (habit) => {
    setCurrentHabit(habit); // Define qual hábito será editado
    setNewHabit(habit.name); // Preenche o campo de entrada com o nome atual do hábito
    setModalVisible(true); // Abre o modal de edição
  };

  const handleSaveHabit = () => {
    if (currentHabit) {
      // Atualiza o nome do hábito
      const updatedHabitList = habitList.map((habit) =>
        habit.id === currentHabit.id ? { ...habit, name: newHabit } : habit
      );
      setHabitList(updatedHabitList);
    } else {
      // Se for um novo hábito, cria um novo com um id único
      const newHabitItem = {
        id: habitList.length + 1, // Gera um id único
        name: newHabit,
      };
      setHabitList((prevHabitList) => [...prevHabitList, newHabitItem]);
    }

    setModalVisible(false); // Fecha o modal
    setNewHabit("");
    setCurrentHabit(null); // Reseta o hábito atual
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <CustomCalendar />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Daily Habits</Text>

        <Pressable
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>

      {/* Lista de hábitos */}
      <View style={styles.habitListContainer}>
        {habitList.map((habit) => (
          <View key={habit.id} style={styles.habitItem}>
            <Text style={styles.habitText}>{habit.name}</Text>
            <Pressable
              style={styles.editButton}
              onPress={() => handleEditHabit(habit)}
            >
              <Icon name="pencil" size={20} color="#fff" />
            </Pressable>
          </View>
        ))}
      </View>

      {/* Modal para adicionar ou editar hábito */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {currentHabit ? "Editar Hábito" : "Adicionar Novo Hábito"}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o hábito"
              value={newHabit}
              onChangeText={setNewHabit}
            />
            <Button
              title={currentHabit ? "Salvar Alterações" : "Adicionar"}
              onPress={handleSaveHabit}
            />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  habitListContainer: {
    marginTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  habitItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  habitText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#ff9800",
    padding: 5,
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 20,
  },
});
