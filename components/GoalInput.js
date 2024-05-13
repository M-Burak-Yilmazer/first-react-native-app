import { TextInput, StyleSheet, View, Button, Modal } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, visible, closeModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoal() {
    if (enteredGoalText == "") {
      alert("please enter a valid value.");
    } else {
      addGoalHandler(enteredGoalText);
      setEnteredGoalText("");
    }
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={goalInputHandler}
          placeholder="Enter Goal"
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,

    padding: 10,
    width: "100%",
  },
  InputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "100",
    marginHorizontal: 8,
  },
});
