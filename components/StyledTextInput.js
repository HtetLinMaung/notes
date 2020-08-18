import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Icon, Fab } from "native-base";

const StyledTextInput = (props) => {
  return (
    <View style={styles.wrapper}>
      <TextInput {...props} style={styles.input} />
      <Icon type="FontAwesome" style={styles.icon} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 35,
    fontSize: 16,
    height: 50,
    marginVertical: 15,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  input: {
    fontFamily: "Poppins",
    flex: 1,
  },
  icon: {
    fontSize: 15,
    color: "grey",
  },
});

export default StyledTextInput;
