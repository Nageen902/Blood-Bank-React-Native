import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import HomeScreen from "./Pages/Home";
import LoginScreen from "./Component/Login";
import ButtonScreen from "./Component/Button";
import VcanciesScreen from "./Pages/Vcancies";
import AdminButtonScreen from './Pages/AdminButton';
import StudentFormScreen from "./Component/StudentForm";
import CompanyFormScreen from "./Component/CompanyFrom";
import ProfileScreen from "./Component/ProfileScreen";
import ComapnyButtonScreen from "./Pages/CompanyButton";
import StudentDataScreen from './Pages/StudentData';
import StudentButtonScreen from './Pages/StudentButton';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title: 'Schooling System',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15,},
           headerStyle: {
            backgroundColor: 'white',

          },}} />

        <Stack.Screen 
        name="Button" 
        component={ButtonScreen} 
        options={{title: 'School System',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',

          },}} />

        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} /> 

            <Stack.Screen name="Vcancies" component={VcanciesScreen} options={{title: 'Company Data',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15,
            },
           headerStyle: {
            backgroundColor: 'white',  
            },}} /> 

             <Stack.Screen name="AdminButton" component={AdminButtonScreen} options={{title: 'Administrative',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />

            <Stack.Screen name="CompanyButton" component={ComapnyButtonScreen} options={{title: 'Company',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />

            

             <Stack.Screen name="StudentForm" component={StudentFormScreen} options={{title: 'Student Form',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />


            <Stack.Screen name="CompanyForm" component={CompanyFormScreen} options={{title: 'Company Form',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />

            
             <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile Upload',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />

              <Stack.Screen name="StudentData" component={StudentDataScreen} options={{title: 'Student Data',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />

             <Stack.Screen name="StudentButton" component={StudentButtonScreen} options={{title: 'Student Details',
         headerTitleStyle: {
           textAlign: 'center', 
           alignSelf: 'center',
           fontSize:30,
            textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15, },
           headerStyle: {
            backgroundColor: 'white',  },}} />
            
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
