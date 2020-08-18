import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Text from "../components/Text";
import StyleTextInput from "../components/StyledTextInput";

const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.root}>
        <Text bold style={styles.title}>
          Notes
        </Text>
        <Text style={styles.notecount}>0 notes</Text>
        <StyleTextInput placeholder="Search your notes" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 35,
    paddingTop: 24,
  },
  notecount: {
    fontSize: 16,
  },
});

export default HomeScreen;
