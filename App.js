import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Another Text Element</Text>
      <Text style={styles.text}>
        Hello World!!
      </Text>
      <Button title="Tap Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "yellow",
    color: "blue",
    fontSize: 25,
    margin: 20,
    borderWidth: 5,
    padding: 10,
    borderColor: "red",
    borderRadius: 10,
  },
});
