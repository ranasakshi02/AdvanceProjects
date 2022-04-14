import React from 'react';
import SplashScreen from './SplashScreen';
import GameScreen from './GameScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
      >
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='GameScreen'
          component={GameScreen}
          options={{           
            headerTitle: 'Tic-Tac-Toe',
            headerTitleStyle: {
              color: '#0b0a24',
              fontSize: 25,
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#FE0049',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#0b0a24',




          }}
        />
        {/* <Stack.Screen
      name='ResultScreen'
      component={ResultScreen}
      options={{
        headerTitle:'',
        headerStyle:{
          backgroundColor:'#0b0a24', 
        },
        headerTintColor:'#fff'
       

      }}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
