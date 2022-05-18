
// import { View, Text, StatusBar,StyleSheet } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
//       <StatusBar hidden={true} />
//       <Text style={appStyle.mainContainer}>hiiiiii... how are you ???</Text>
//     </View>
//   )
// }

// const appStyle=StyleSheet.create({
//   mainContainer:{
//     color:"blue"
//   }
// })

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import UserManagement from './screen/UserManagement';
import Login from './screen/Login';
import DrawerNavigator from './Navigator/DrawerNavigator';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      {/* <NavigationContainer>
      <Stack.Navigator defaultScreenOptions={Login}>
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Drawer" component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer> */}
    </>
  );
}

export default App;