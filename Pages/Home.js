import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LogoScreen from '../Component/Logo';
import {
  Container,
  Header,
  Left,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <Header style={{ backgroundColor: 'white', height: 50 }}>
        <Left>
          <Icon.Button
            name="bars"
            backgroundColor="#3b5998"
        onPress={() => navigation.openDrawer()}>
            Open Drawer
          </Icon.Button>
        </Left>
      </Header>
      <View style={styles.container}>
        <LogoScreen />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.tittle}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E65100',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 20,
  },
  tittle: {
    color: 'white',
    fontSize: 18,
  },
});
