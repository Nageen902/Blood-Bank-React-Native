import React from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput } from 'react-native';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

export default class StudentFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fatherName: '',
      age: '',
      marks: '',
    };
  }
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput  style={styles.textInput}
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Enter Name'}
        />
        <TextInput
          value={this.state.fatherName}
          onChangeText={(fatherName) => this.setState({ fatherName })}
          placeholder={'Enter FatherName'}
          style={styles.textInput}
        />
         <TextInput
          value={this.state.age}
          onChangeText={(age) => this.setState({ age })}
          placeholder={'Enter age'}
          style={styles.textInput}
        />
         <TextInput
          value={this.state.marks}
          onChangeText={(marks) => this.setState({ marks })}
          placeholder={'Enter marks'}
          style={styles.textInput}
        />
        <View style={styles.buttonStyle}>
          <Button
            title="Submit"
            onPress={() =>
              this.props.navigation.navigate('Profile', {
            userName: this.state.username,
            otherParam: this.state.otherParam,
              })
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C51162',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    height: 45,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    marginTop:10,
    textAlign:"center"
  },
  buttonStyle: {
    width: '93%',
    marginTop: 50,
    backgroundColor: 'red',
  },
});
