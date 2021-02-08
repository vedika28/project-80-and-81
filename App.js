import React from "react";
import { View } from "react-native";
import SignUpLoginScreen from "./screens/SignUpLoginScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  SignUpLogin: { screen: SignUpLoginScreen },
  Drawer: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
