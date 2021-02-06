import * as React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ButtonScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 310,
          height: 130,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={{
          uri:
            'https://patch.com/img/cdn/users/22859137/stock/raw/20150755940cf2e6ac2.png',
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Donour')}>
        <Text style={styles.tittle}>Donor Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Process')}>
        <Text style={styles.tittle}>Process Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BloodGroup')}>
        <Text style={styles.tittle}>Types of BloodGroup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Blood')}>
        <Text style={styles.tittle}>Types Of Blood Donate</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.tittle}>Disadvantages of Donate Blood</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.tittle}>Contract Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'red',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
  },
  tittle: {
    color: 'white',
    fontSize: 18,
  },
});
