import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Home from './AppScreens/Home';
import Welcome from "./AppScreens/Welcome"
import Detail from './AppScreens/Detail';

export function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      
    </View>
  );
}

const AppNavigator=createStackNavigator({
  WelcomeScreen:{
    screen:Welcome
  },
  Home:{
    screen:Home
  },
  Detail:{
    screen:Detail
  }
})

export default createAppContainer(AppNavigator)