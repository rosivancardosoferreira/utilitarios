import React from "react";
//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../presentation/screens/public/Login";
import Home from "../../presentation/screens/public/Home";
//SCREENS
export default function Screens() {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
                initialRouteName="Login" //condition here
            >
            {/* istoke ? authenticated : public */}
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}