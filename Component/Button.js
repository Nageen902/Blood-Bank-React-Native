import * as React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentButtonScreen from "../Pages/StudentButton";
import CompanyFormScreen from './CompanyFrom';

function ButtonScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('../Image/logo.png')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.tittle}>Administration Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CompanyForm')}>
        <Text style={styles.tittle}>Company Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StudentButton')}>
        <Text style={styles.tittle}>Student Login</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor:"#C51162",
    justifyContent: "space-evenly",
    marginTop:20,
  },
  button: {
    marginTop: -30,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 20,
  },
  tittle: {
    color: 'white',
    fontSize: 20,
  },
   tinyLogo: {
    width: 340,
    height: 120,
    marginTop:-50,
  },
});
