import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Home from "./src/pages/Home";
import Pedidos from "./src/pages/Pedidos";

import CustomDrawer from "./src/components/CustomDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawer}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Pedidos"
          component={Pedidos}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
