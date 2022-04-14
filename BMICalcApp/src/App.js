import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import  {createStackNavigator}  from "@react-navigation/stack";
import  CalculateScreen  from "./CalculateScreen";
import ResultScreen from './ResultScreen';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='SplashScreen'
      >
        <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='CalculateScreen'
        component={CalculateScreen}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name='ResultScreen'
        component={ResultScreen}
        options={{
          headerTitle:'',
          headerStyle:{
            backgroundColor:'#0b0a24', 
          },
          headerTintColor:'#fff'
         

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}