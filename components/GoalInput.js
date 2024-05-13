import { TextInput, StyleSheet, View, Button, Modal,Image} from "react-native";
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
      <Image style={styles.image} source={require("../assets/goal.png")}/>
        <TextInput
          style={styles.input}
          onChangeText={goalInputHandler}
          placeholder="Enter Goal"
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    width: "90%",
  },
  InputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "#311b6b",
    
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "100",
    marginHorizontal: 8,
  },
  image:{ 
    width: 100,
    height: 100 ,
    margin: 10
  }
});
