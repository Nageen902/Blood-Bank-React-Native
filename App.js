import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import Database from '@react-native-firebase/database';
import BloodScreen from './Pages/TypesBlood';
import HomeScreen from './Pages/Home';
import BloodGroupScreen from './Pages/BloodGroup';
import ProcessScreen from './Pages/Process';
import Login from './Component/Login';
import Signup from './Component/SignUp';
import Dashboard from './Component/Dashboard';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AdvantagesScreen  from './Pages/Advantages';



const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Registration for Blood Bank',
          headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
          headerStyle: {
            backgroundColor: 'white',

          },
        }}
      />
      
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login For Blood Bank',
          headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Signup for Blood Bank',
          headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'User Information',
          headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}


 function App(){

    return (
      <NavigationContainer drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Navigator
         initialRouteName="Home"
           drawerContentOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'green',
  
       }}>

          <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={{
              title: 'Home',
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="home"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Blood"
            component={BloodScreen}
            options={{
              title: 'Types of Blood Donate',
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="tint"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'User Information',
                drawerIcon: ({ focused, size }) => (
                <Icon
                  name="hospital-user"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="BloodGroup"
            component={BloodGroupScreen}
            options={{
              title: 'Types of Blood Group',
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="hand-holding-water"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Process"
            component={ProcessScreen}
            options={{
              title: 'Donation Process Overview',
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="procedures"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />
              ),
            }}
          />

<Drawer.Screen
            name="Advantages"
            component={AdvantagesScreen}
            options={{
              title: 'Advantages',
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="comment-medical"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />
              ),
            }}
          />

        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

export default App;
