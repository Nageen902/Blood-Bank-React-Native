import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
    backgroundColor: '#f4511e',
    },

    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigation } = this.props;
    const user_name = navigation.navigate('userName');
    const father_Name = navigation.navigate('fatherName');
    const age = navigation.navigate('age');
    const marks = navigation.navigate('marks');
    const otherparam = navigation.navigate('marks');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginTop: 16, fontSize: 20 }}>
        </Text>
        <Text style={styles.textStyle}>
          User Name: {JSON.stringify(user_name)}
        </Text>
         <Text style={styles.textStyle}>
          Father Name: {JSON.stringify(father_Name)}
        </Text>
         <Text style={styles.textStyle}>
        Age: {JSON.stringify(age)}
        </Text>
         <Text style={styles.textStyle}>
          Marks: {JSON.stringify(marks)}
        </Text>
        <Text style={styles.textStyle}>
          Other Param: {JSON.stringify(otherparam)}
        </Text>
        <View style={styles.buttonStyle}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },

  buttonStyle: {
    width: '93%',
    marginTop: 50,
    backgroundColor: 'red',
  },
});
