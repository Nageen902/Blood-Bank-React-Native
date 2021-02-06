import * as React from 'react';
import { View, Text,Image,StyleSheet} from 'react-native';





export default function LogoScreen({ navigation }) {
  return (
        
    <View style={styles.container}>
        <Image style={{
    width: 330,
    height: 120,
  }}
  source={require('../Image/Logo.png')}/>
      <Text style={styles.logoText}>
      WELCOME TO OUR BLOOD BANK</Text>
      </View>
  );
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#E65100',
    alignItems: 'center',
    justifyContent: 'center',
  },
   logoText: {
    marginVertical:15,
    fontSize:20,
    color: '#000000',
    shadowColor:'#FFFFFF',
    alignItems:"center",
  },
});
