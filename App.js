import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Home from "./src/pages/Home";
import Pedidos from "./src/pages/Pedidos";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pedidos" component={Pedidos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
