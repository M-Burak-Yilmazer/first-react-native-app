import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView, //* scroll yapabilmemize imkann veren component
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    //! aşağıda daha güncel bir state verisi güncelleme var. setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setModalVisible(false);
  }
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key != id);
    });
    
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalVisible}
        addGoalHandler={addGoalHandler}
        closeModal={endGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                delete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
