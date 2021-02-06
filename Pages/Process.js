import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from '../Component/Logo';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  LeftContent,
} from 'react-native-paper';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function ProcessScreen({ navigation }) {
  return (
    <Container >
      <Header
        style={{
          backgroundColor: 'black',
          height: 90,
          borderBottomColor: 'white',
        }}>
        <Left>
         <Icon.Button
            name="bars"
            backgroundColor="#3b5998"
        onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </Left>
        <Body>
          <Title style={{color:"white",fontSize:30,alignContent:"center",textAlign:"center",marginTop:20,justifyContent:"center",}}>Donation Process
          </Title>
        </Body>
      </Header>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoText}>The Blood Donation Process</Text>
          <Text style={styles.subText}>
          The blood donation process from the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average.
          </Text>

          <Card style={styles.card}>
            <Card.Title
              style={{ paddingLeft: 80 }}
              title="Registration"
            />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/Registration.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                We’ll sign you in and go over basic eligibility.
                {'\n'}
                {'\n'}
               You’ll be asked to show ID, such as your driver’s license.
                <Text>
                  {'\n'}
                  {'\n'}
                 You’ll read some information about donating blood.
                  {'\n'}
                  {'\n'}
                  We’ll ask you for your complete address.  Your address needs to be complete (including PO Box, street/apartment number) and the place where you will receive your mail 8 weeks from donation.
                  {'\n'}
                  {'\n'}
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title
              style={{ paddingLeft: 80 }}
              title="Health History"
            />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/Health.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                You’ll answer a few questions about your health history and places you’ve traveled, during a private and confidential interview.
                {'\n'}
                {'\n'}
               You’ll tell us about any prescription and/or over the counter medications that may be in your system.
                <Text>
                  {'\n'}
                  {'\n'}
                 We’ll check your temperature, pulse, blood pressure and hemoglobin level. 
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title style={{ paddingLeft: 80 }} title="Your Donation" />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/YDonation.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
               If you’re donating whole blood, we’ll cleanse an area on your arm and insert a brand new sterile needle for the blood draw. (This feels like a quick pinch and is over in seconds.)
                {'\n'}
                {'\n'}
               Other types of donations, such as platelets, are made using an apheresis machine which will be connected to both arms
                {'\n'}
              A whole blood donation takes about 8-10 minutes, during which you’ll be seated comfortably or lying down.
                <Text>
                  {'\n'}
                  {'\n'}
                 When approximately a pint of whole blood has been collected, the donation is complete and a staff person will place a bandage on your arm.
                  {'\n'}
                  {'\n'}
                For platelets, the apheresis machine will collect a small amount of blood, remove the platelets, and return the rest of the blood through your other arm; this cycle will be repeated several times over about 2 hours. 
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title style={{ paddingLeft: 80 }} title="Refreshment and Recovery" />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/Recovery.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
              After donating blood, you’ll have a snack and something to drink in the refreshment area.
                {'\n'}
                {'\n'}
               You’ll leave after 10-15 minutes and continue your normal routine.
                <Text>
                  {'\n'}
                  {'\n'}
                 Enjoy the feeling of accomplishment knowing you are helping to save lives.
                  {'\n'}
                  {'\n'}
                 Take a selfie, or simply share your good deed with friends. It may inspire them to become blood donors. 
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E65100',
    flexGrow: 1,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 20,
    color: '#000000',
    shadowColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  subText: {
    flex: 1,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    paddingLeft: 12,
    paddingRight: 12,
    color: 'black',
  },
  card: {
    marginTop: 20,
    backgroundColor:"gray",
    shadowColor:"black",
    shadowOpacity:5.5,
    shadowRadius:19,
  },
});
