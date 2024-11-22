import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  Modal,
  View,
  TextInput,
  ScrollView,
} from "react-native";
// Importando os ícones
import Icon from "react-native-vector-icons/FontAwesome";
// Components
import Header from "../components/Header";
import CustomCalendar from "../components/CustomCalendar";

const CalendarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [habitList, setHabitList] = useState([
    { id: 1, name: "Drink Water", isEditing: false },
    { id: 2, name: "Work Short Break Water", isEditing: false },
  ]);
  const [currentHabit, setCurrentHabit] = useState(null);

  const handleEditHabit = (habit) => {
    setCurrentHabit(habit);
    setNewHabit(habit.name);
    setModalVisible(true);
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
        id: habitList.length + 1,
        name: newHabit,
      };
      setHabitList((prevHabitList) => [...prevHabitList, newHabitItem]);
    }

    setModalVisible(false);
    setNewHabit("");
    setCurrentHabit(null); // Reseta o hábito atual
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header />

      <ScrollView style={styles.scrollView}>
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
              <View style={styles.habitHeader}>
                <Text style={styles.habitText}>{habit.name}</Text>
                <Pressable
                  style={styles.editButton}
                  onPress={() => handleEditHabit(habit)}
                >
                  <Icon name="pencil" size={20} color="#3841A1" />
                </Pressable>
              </View>

              <View style={styles.progressContainer}>
                <Text style={styles.percentageText}>67%</Text>

                <View style={styles.progressBarBack}>
                  <View style={[styles.progressBarFill, { width: "67%" }]} />
                </View>
              </View>
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
              <Text style={styles.title}>
                {currentHabit ? "Edit Habit" : "Add New Habit"}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the habit"
                value={newHabit}
                onChangeText={setNewHabit}
              />

              {/* Botão "Save" */}
              <Pressable
                style={[styles.saveButton, { backgroundColor: "#3841A1" }]}
                onPress={handleSaveHabit}
              >
                <Text style={styles.saveButtonText}>
                  {currentHabit ? "Save" : "Add"}
                </Text>
              </Pressable>

              <Pressable
                style={[styles.cancelButton, { backgroundColor: "#D3D3D3" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
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
    fontSize: 13,
    fontWeight: "bold",
    color: "#6F7BF7",
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  addButton: {
    backgroundColor: "#3841A1",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  habitListContainer: {
    marginTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  habitItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#D898E8",
    borderRadius: 10,
  },
  habitHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  habitText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
  },
  progressContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
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
  saveButton: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  cancelButton: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
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
  scrollView: {
    flex: 1,
  },
  progressBarBack: {
    width: "100%",
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 5,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#6F7BF7",
    borderRadius: 5,
  },
});
