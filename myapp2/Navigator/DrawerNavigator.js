import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import UserManagement from '../screen/UserManagement';
import Doctors from '../screen/Doctors';
import Callcenters from '../screen/Callcenters';
import Archive from '../screen/Archive';
import AllScreenStack from '../screen/AllScreenStack';
import Login from '../screen/Login';
import { Home, User } from 'react-feather';
import DrawerMenu from './DrawerMenu';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        // screenOptions={{headerShown:false}}
        drawerContent={
          () => <DrawerMenu />
        }
      >
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        
        <Drawer.Screen name="Dashboard" component={BottomNavigator }
        />
        {/* <Drawer.Screen name="Archive" component={Archive} />
        <Drawer.Screen name="Profile" component={UserManagement} options={{ swipeEnabled: false }}/>

        <Drawer.Screen name="Doctors" component={Doctors} />
        <Drawer.Screen name="Callcenters" component={Callcenters} /> */}
      </Drawer.Navigator>
    </>
  )
}