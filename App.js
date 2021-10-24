import React, { useState } from 'react';
import { View, StatusBar, FlatList, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from './Home';
import { SplashScreen } from './Splash'; 

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Home" component={HomePage} options={{headerLeft:null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
