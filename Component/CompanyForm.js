import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ScrollView,TouchableOpacity,Image} from 'react-native';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import ComapnyButtonScreen from "../Pages/CompanyButton";

function CompanyFormScreen ({ navigation }) {
const[email,setEmail] = useState ("");
const[password,setPassword] = useState ("");
const save_data = () =>{
 let user ={
   email,
   password
 }
 database().ref('/').child('users').push('user')
}

return (
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('../Image/download.jpg')}
      />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />  
          <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
        onChangeText={(text)=>setPassword(text)}
        />  
         
        <TouchableOpacity
          style={styles.button}
          onPress={(save_data) => navigation.navigate('CompanyButton')}>
          <Text style={styles.tittle}>Login</Text>
        </TouchableOpacity>       
      </View>
    );
  }

export default CompanyFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 35,
    marginTop:20,
    backgroundColor:"#C51162",
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginTop:20,
    
  },
   button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 20,
  },
  tittle: {
    color:"white",
    fontStyle:"italic",
    fontSize:20,
    fontWeight:"bold",
    textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15,
  },
   tinyLogo: {
    width: 300,
    height: 200,
    marginTop:-50,
  },
});