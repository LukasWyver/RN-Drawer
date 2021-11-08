import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Pedidos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pedidos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e9e9e9",
  },
});
