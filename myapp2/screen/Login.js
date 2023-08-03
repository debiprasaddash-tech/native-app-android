import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  // import { Bold } from 'react-feather';
  
  export default function Login({navigation}) {
    const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (name && password) {
      if(name == 'UserName' && password === 'Password'){
                navigation.navigate('Dashboard');
      }else {
          Alert.alert('Error', 'Something might be wrong please try again!', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
      }
    }
  };
    
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 45,
            fontWeight: 'bold',
            fontStyle: '',
            color: '#fff',
          }}>
          #Medronaz
        </Text>
        <View style={{width: '80%'}}>
          <Text
            style={{
              fontSize: 22,
              marginVertical: 15,
              color: 'white',
              fontWeight: '700',
            }}>
            User Name
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              height: 45,
              borderRadius: 5,
              borderColor: 'white',
              color: 'white',
            }}
onChange={(e)=>{setName(e.target.value)}}
          />
          <Text
            style={{
              fontSize: 22,
              marginVertical: 15,
              color: 'white',
              fontWeight: '700',
            }}>
            Password
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              height: 45,
              borderRadius: 5,
              borderColor: 'white',
              color: 'white',
            }}
onChange={(e)=>{setName(e.target.value)}}
            secureTextEntry={true}
          />
  
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F5F7',
              marginVertical: 30,
              marginHorizontal: 50,
              borderRadius: 5,
              // width:"50%",
              // display:"flex",
              // alignItems:"center",
              // justifyContent:"center"
            }}
            onPress={() => {handleLogin()}}>
            <Text
              style={{
                fontSize: 22,
                marginVertical: 10,
                textAlign: 'center',
                color: '#51576D',
                fontWeight: '700',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#77f',
    },
  });
  
