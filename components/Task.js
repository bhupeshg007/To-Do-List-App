import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Checkbox, NativeBaseProvider } from "native-base";

const Task = (props) => {
  const [groupValues, setGroupValues] = React.useState([])
  return (
    <>
      <NativeBaseProvider>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Checkbox.Group
              onChange={setGroupValues}
              value={groupValues}
              accessibilityLabel="choose numbers"
              colorScheme="green"
            >
              <Checkbox value="one">
                <Text style={styles.itemText}>
                  {props.text}
                </Text>
              </Checkbox>
            </Checkbox.Group>
          </View>
          <TouchableOpacity onPress={props.delet} onFocus={props.value}>
            <Image
              style={styles.logo}
              source={require("../assets/remove.png")}
            />
          </TouchableOpacity>
        </View>
      </NativeBaseProvider>
    </>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#94B49F",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  itemText: {
    maxWidth: "80%",
    paddingLeft: 10,
    fontWeight:"bold"
  },
  logo: {
    width: 20,
    height: 20,
  },
});
export default Task;
