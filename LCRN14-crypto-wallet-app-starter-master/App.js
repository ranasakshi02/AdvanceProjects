import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Tabs from "./navigation/tabs";
import thunk from "redux-thunk";
import RootReducer from "./store/RootReducer";
const Stack = createStackNavigator();

const Store = createStore(
    RootReducer,
    applyMiddleware(thunk)
)

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'MainLayout'}
                >
                    <Stack.Screen
                        name="MainLayout"
                        component={Tabs}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

export default App;