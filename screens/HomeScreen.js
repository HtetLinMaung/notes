import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text bold style={styles.title}>
        Notes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 24,
    paddingTop: 20
  },
  title: {
    fontSize: 35,
    paddingTop: 24
  }
});

export default HomeScreen;
