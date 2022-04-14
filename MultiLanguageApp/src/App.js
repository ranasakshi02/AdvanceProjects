import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Languages from './Languages';
import StringContent from './StringContent';
import BioMatric from './BioMatric';
import { useTranslation } from 'react-i18next';
const Stack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Languages"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen
        name="Languages"
        component={Languages}
        
      />
      <Stack.Screen
        name="StringContent"
        component={StringContent}
      />
       <Stack.Screen
        name="BioMatric"
        component={BioMatric}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
