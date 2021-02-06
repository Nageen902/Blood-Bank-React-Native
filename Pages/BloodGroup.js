import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Title,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default function BloodGroupScreen({ navigation }) {
  return (
    <Container>
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
          <Title
            style={{
              color: 'white',
              fontSize: 30,
              alignContent: 'center',
              textAlign: 'center',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            BLood Groups
          </Title>
        </Body>
      </Header>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoText}>
            Facts About Blood and Blood Types
          </Text>
          <Text style={styles.subText}>
            How Blood Type Is Determined And Why You Need To Know
            {'\n'}
            {'\n'}
            Blood types are determined by the presence or absence of certain
            antigens – substances that can trigger an immune response if they
            are foreign to the body. Since some antigens can trigger a patient's
            immune system to attack the transfused blood, safe blood
            transfusions depend on careful blood typing and cross-matching. Do
            you know what blood type is safe for you if you need a transfusion?
            {'\n'}
            {'\n'}
            There are four major blood groups determined by the presence or
            absence of two antigens – A and B – on the surface of red blood
            cells. In addition to the A and B antigens, there is a protein
            called the Rh factor, which can be either present (+) or absent (–),
            creating the 8 most common blood types (A+, A-, B+, B-, O+, O-, AB+,
            AB-).
          </Text>
          <Image
            style={styles.tinyLogo}
            source={require('../Image/BG1.jpg')}
          />
          <Image
            style={styles.logo}
            source={require('../Image/BG2.png')}
          />

          <Text style={styles.logoText}>
            Blood Types and Transfusion
            {'\n'}
            {'\n'}
            Each year 4.5 million lives are saved by blood transfusions.
          </Text>
          <Text style={styles.subText}>
            How Blood Type Is Determined And Why You Need To Know
            {'\n'}
            {'\n'}
            There are very specific ways in which blood types must be matched
            for a safe transfusion. The right blood transfusion can mean the
            difference between life and death.
            {'\n'}
            {'\n'}
            Every 2 seconds someone in the US needs a blood transfusion.
            {'\n'}
            {'\n'}
            Use the interactive graphic below to learn more about matching blood
            types for transfusions.
            {'\n'}
            {'\n'}
            Also, Rh-negative blood is given to Rh-negative patients, and
            Rh-positive or Rh-negative blood may be given to Rh-positive
            patients. The rules for plasma are the reverse.
            {'\n'}
            {'\n'}
            <Text style={{ color: 'black' }}>
              The universal red cell donor has Type O negative blood.
            </Text>
            {'\n'}
            {'\n'}
            <Text style={{ color: 'blue' }}>
              The universal plasma donor has Type AB blood.
            </Text>
          </Text>

          <Image
            style={styles.tlogo}
            source={require('../Image/BG3.jpg')}
          />
          <Text style={{ color: 'blue' }}>
            There are more than 600 other known antigens, the presence or
            absence of which creates "rare blood types." Certain blood types are
            unique to specific ethnic or racial groups. That’s why an
            African-American blood donation may be the best hope for the needs
            of patients with sickle cell disease, many of whom are of African
            descent.
          </Text>

          <Text style={styles.logoText}>What Is A Universal Blood Donor?</Text>

          <Text style={styles.subText}>
            Universal donors are those with an O negative blood type. Why? O
            negative blood can be used in transfusions for any blood type.
            {'\n'}
            {'\n'}
            Type O is routinely in short supply and in high demand by hospitals
            – both because it is the most common blood type and because type O
            negative blood is the universal blood type needed for emergency
            transfusions and for immune deficient infants.
            {'\n'}
            {'\n'}
            Approximately 45 percent of Caucasians are type O (positive or
            negative), but 51 percent of African-Americans and 57 percent of
            Hispanics are type O. Minority and diverse populations, therefore,
            play a critical role in meeting the constant need for blood.
            {'\n'}
            {'\n'}
            Types O negative and O positive are in high demand. Only 7% of the
            population are O negative. However, the need for O negative blood is
            the highest because it is used most often during emergencies. The
            need for O+ is high because it is the most frequently occurring
            blood type (37% of the population).
            {'\n'}
            {'\n'}
            The universal red cell donor has Type O negative blood. The
            universal plasma donor has Type AB blood. For more about plasma
            donation, visit the plasma donation facts.
          </Text>
          <Text
            style={{
              color: 'blue',
              textAlign: 'justify',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 18,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            According to current estimates, about 1.2 - 1.5 million units of
            blood are being transfused annually in Pakistan. About 50% of
            transfusions are being given in the private sector. As per the WHO
            criteria, 6-16 units (average of 11 units) of blood are required per
            hospital bed.
          </Text>

          <Text style={styles.logoText}>What Is A Rare Blood Type?</Text>

          <Text style={styles.subText}>
            There are more than 600 other known antigens, the presence or
            absence of which creates "rare blood types." Your blood type is
            considered rare if you lack antigens that 99% of the people are
            positive for. If you somehow lack an antigen that 99.99% are
            positive for, your blood type is extremely rare.
          </Text>

          <Text style={styles.logoText}>How Is My Blood Type Determined?</Text>

          <Text style={styles.subText}>
            It’s inherited. Like eye color, blood type is passed genetically
            from your parents. Whether your blood group is type A, B, AB or O is
            based on the blood types of your mother and father.
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 20,
    color: 'black',
    shadowColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -20, height: 10 },
    textShadowRadius: 30,
  },
  subText: {
    flex: 1,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    paddingLeft: 12,
    paddingRight: 12,
    color: 'red',
  },
  tinyLogo: {
    marginTop: 10,
    width: 380,
    height: 300,
  },
  logo: {
    marginTop: 20,
    width: 320,
    height: 600,
  },
  tlogo: {
    marginTop: 20,
    width: 360,
    height: 350,
  },
});
