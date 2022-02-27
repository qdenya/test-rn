import React from "react";
import Main from './compon_news/main';
import FullInfo from "./compon_news/fullinfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Main"
        component={Main}
        options={
          {
            title: 'Главная',
            // headerStyle: { backgroundColor: '#eb5d3d', height: 100 },
            // headerTitleStyle: { fontWeight: '500'}
          }
        }
      />
      <Stack.Screen 
        name="FullInfo"
        component={FullInfo}
        options={{title: 'Статья'}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}