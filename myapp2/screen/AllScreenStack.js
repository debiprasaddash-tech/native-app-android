import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Archive from './Archive';

const Stack = createNativeStackNavigator();

export default function AllScreenStack() {
  return (
    <>
    {/* <NavigationContainer> */}
      <Stack.Navigator defaultScreenOptions={Archive}>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Archive" component={Archive}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Drawer" component={DrawerNavigator}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    {/* </NavigationContainer> */}
    </>
  )
}