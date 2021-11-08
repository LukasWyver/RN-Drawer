import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.avatarContent}>
        <Image
          source={require("../../assets/img/user.png")}
          style={{ width: 120, height: 120 }}
        />
        <Text style={styles.bemVindo}>Bem vindo</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  avatarContent: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  bemVindo: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
