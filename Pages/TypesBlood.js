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


export default function BloodScreen({ navigation }) {
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
          <Title style={{color:"white",fontSize:30,alignContent:"center",textAlign:"center",marginTop:20,justifyContent:"center",}}>Types of Blood</Title>
        </Body>
      </Header>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoText}>Types Of Blood Donates </Text>
          <Text style={styles.subText}>
            Giving the "right" type of blood donation - based on your blood type
            and patient needs - helps ensure the best use of your valuable
            contribution. Here are some things to consider when determining how
            you can have the most impact
          </Text>

          <Card style={styles.card}>
            <Card.Title
              style={{ paddingLeft: 80 }}
              title="Whole Blood Donation"
            />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/WB.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                Whole blood is the most flexible type of donation. It can be
                transfused in its original form, or used to help multiple people
                when separated into its specific components of red cells, plasma
                and platelets. Learn more about whole blood donations.
                {'\n'}
                {'\n'}
                Who it helps: Whole blood is frequently given to trauma patients
                and people undergoing surgery.
                <Text>
                  {'\n'}
                  {'\n'}
                  Time it takes: About 1 hour
                  {'\n'}
                  {'\n'}
                  Ideal blood types: All blood types
                  {'\n'}
                  {'\n'}
                  Donation frequency: Every 56 days
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title
              style={{ paddingLeft: 80 }}
              title="Power Red Donation"
            />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/PB.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                During a Power Red donation, you give a concentrated dose of red
                cells, the part of your blood used every day for those needing
                transfusions as part of their care. This type of donation uses
                an automated process that separates your red blood cells from
                the other blood components, and then safely and comfortably
                returns your plasma and platelets to you.
                {'\n'}
                {'\n'}
                With just a little extra time at your appointment, you can
                donate more red cells and increase your impact on patients in
                need. Learn more about Power Red donations.
                <Text>
                  {'\n'}
                  {'\n'}
                  Who it helps: Red cells from a Power Red donation are
                  typically given to trauma patients, newborns and emergency
                  transfusions during birth, people with sickle cell anemia, and
                  anyone suffering blood loss.
                  {'\n'}
                  {'\n'}
                  Time it takes: About 1.5 hours
                  {'\n'}
                  {'\n'}
                  Ideal blood types: O positive, O negative, A negative, and B
                  negative
                  {'\n'}
                  {'\n'}
                  Donation frequency: Every 112 days, up to 3 times/year
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title style={{ paddingLeft: 80 }} title="Platelet Donation" />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/Plate.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                Platelets are tiny cells in your blood that form clots and stop
                bleeding. Platelets are most often used by cancer patients and
                others facing life-threatening illnesses and injuries.
                {'\n'}
                {'\n'}
                In a platelet donation, an apheresis machine collects your
                platelets along with some plasma, returning your red cells and
                most of the plasma back to you. A single donation of platelets
                can yield several transfusable units, whereas it takes about
                five whole blood donations to make up a single transfusable unit
                of platelets.
                {'\n'}
                {'\n'}
                Platelets are collected at Red Cross donation centers only, and
                are not collected at blood drives.
                <Text>
                  {'\n'}
                  {'\n'}
                  Who it helps: Platelets are a vital element of cancer
                  treatments and organ transplant procedures, as well as other
                  surgical procedures
                  {'\n'}
                  {'\n'}
                  Time it takes: About 2.5-3 hours
                  {'\n'}
                  {'\n'}
                  Ideal blood types: A positive, A negative, B positive, O
                  positive, AB positive and AB negative
                  {'\n'}
                  {'\n'}
                  Donation frequency: Every 7 days, up to 24 times/year
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title style={{ paddingLeft: 80 }} title="Plasma Donation" />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/Plasma.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                During an AB Elite donation, you give plasma, a part of your
                blood used to treat patients in emergency situations. AB plasma
                can be given to anyone regardless of their blood type. Plasma is
                collected through an automated process that separates plasma
                from other blood components, then safely and comfortably returns
                your red blood cells and platelets to you. AB Elite maximizes
                your donation and takes just a few minutes longer than donating
                blood.
                {'\n'}
                {'\n'}
                Plasma is collected at select Red Cross donation centers. Learn
                more about plasma donation.
                <Text>
                  {'\n'}
                  {'\n'}
                  Who it helps: AB Plasma is used in emergency and trauma
                  situations to help stop bleeding.
                  {'\n'}
                  {'\n'}
                  Time it takes: About 1 hour and 15 minutes
                  {'\n'}
                  {'\n'}
                  Ideal blood types: AB positive, AB negative
                  {'\n'}
                  {'\n'}
                  Donation frequency: Every 28 days, up to 13 times/year
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
  },
});
