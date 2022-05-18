import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();


export default function HomeScreen() {
  const navigation=useNavigation()
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={{backgroundColor:"#2355DA"}}
      onPress={()=>{navigation.navigate('Profile')}}><Text style={{color:"white"}}>click to go to next screen</Text></TouchableOpacity>
    </View>
    
  )
}