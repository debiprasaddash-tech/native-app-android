import { View, Text,TextInput,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from "react";
import { Bold } from 'react-feather';

export default function Login({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={{fontSize:45,fontWeight:"bold",fontStyle:"",color:"#fff"}}>#Hash-Test</Text>
      <View style={{width:"80%",}}>
          <Text style={{fontSize:18,marginVertical:10,color:'white'}}>
              Username
          </Text>
          <TextInput style={{borderWidth:1,height:35,borderRadius:5,borderColor:'white'}}/>
          <Text style={{fontSize:18,marginVertical:10,color:'white'}}>
              Password
          </Text>
          <TextInput style={{borderWidth:1,height:35,borderRadius:5,borderColor:'white'}} secureTextEntry={true}/>

          <TouchableOpacity style={{backgroundColor:"#F5F5F7",marginVertical:10,borderRadius:5}}
          onPress={()=>{navigation.navigate("Dashboard")}}>
            <Text style={{fontSize:18,marginVertical:10,textAlign:'center',color:'#51576D'}}>Login</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:'#7889a5'
  }
})


