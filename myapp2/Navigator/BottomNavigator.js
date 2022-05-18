import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons'
import Fonticons from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


import HomeScreen from '../screen/HomeScreen';
import UserManagement from '../screen/UserManagement';
import Callcenters from '../screen/Callcenters';
import Doctors from '../screen/Doctors';
import DrawerNavigator from './DrawerNavigator';
import AllScreenStack from '../screen/AllScreenStack';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
            <Tab.Navigator >
                <Tab.Screen name="Home" component={AllScreenStack} options={{
                    headerShown: false,
                    tabBarIcon: () => <Ionicicons name='home' size={20} />
                }} />
                <Tab.Screen name="Profile" component={UserManagement} options={{
                    headerShown: false,
                    tabBarIcon: () => <Ionicicons name='people' size={20} />
                }} />

                <Tab.Screen name="Doctors" component={Doctors} options={{
                    headerShown: false,
                    tabBarIcon: () => <Fonticons name='doctor' size={20} />
                }} />
                <Tab.Screen name="Call Centers" component={Callcenters} options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesome5 name='headset' size={20} />
                }} />
            </Tab.Navigator>

    )
}