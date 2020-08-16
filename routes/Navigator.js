import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

const Stack = createStackNavigator();

const Navigator = () => {
  const screens = routes.map((route) => (
    <Stack.Screen
      key={route.name}
      name={route.name}
      component={route.component}
      options={{ headerShown: false }}
    />
  ));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
