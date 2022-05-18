import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

export default function DrawerMenu() {
    const navigation=useNavigation()

    return (
        <>
            {/* <View>
                <Text>DrawerMenu</Text>
            </View> */}
            <DrawerContentScrollView>
                <DrawerItem label={"Dashboard"} onPress={()=>{navigation.navigate("Home")}}/>
                <DrawerItem label={"User Management"} onPress={()=>{navigation.navigate("Profile")}}/>
                <DrawerItem label={"Call Center"} onPress={()=>{navigation.navigate("Call Centers")}}/>
                <DrawerItem label={"Doctors"} onPress={()=>{navigation.navigate("Doctors")}}/>

            </DrawerContentScrollView>
        </>
    )
}