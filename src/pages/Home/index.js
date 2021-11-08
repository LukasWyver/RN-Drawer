import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Entypo name="menu" size={28} color="#121212" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundColor: "#292929",
    paddingTop: 50,
  },
  text: {
    paddingLeft: 15,
    fontSize: 48,
    fontWeight: "bold",
    color: "#e9e9e9",
  },
  button: {
    backgroundColor: "#8257e5",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    marginTop: 8,
    borderRadius: 8,
    height: 48,
    width: 48,
  },
  textButton: {
    textAlign: "center",
    fontSize: 22,
    color: "#e9e9e9",
  },
});
