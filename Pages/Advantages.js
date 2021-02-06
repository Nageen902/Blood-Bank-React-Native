import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { Container, Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AdvantagesScreen({ navigation }) {
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
            onPress={() => navigation.openDrawer()}></Icon.Button>
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
            Advantages
          </Title>
        </Body>
      </Header>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoText}>Benefits</Text>
          <Text style={styles.subText}>
            Donating blood has benefits for your emotional and physical health.
          </Text>

          <Card style={styles.card}>
            <Card.Title />
            <Card.Cover
              style={{ width: 360, height: 200 }}
              source={require('../Image/download.jpg')}
            />
            <Card.Cover
              style={{ width: 360, height: 230, marginTop: 10 }}
              source={require('../Image/Adv1.jpeg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                reduce stress
                {'\n'}
                {'\n'}
                improve your emotional well-being
                <Text>
                  {'\n'}
                  {'\n'}
                  benefit your physical health
                  {'\n'}
                  {'\n'}
                  help get rid of negative feelings
                  {'\n'}
                  {'\n'}
                  provide a sense of belonging and reduce isolation
                  {'\n'}
                  {'\n'}
                  Research has found further evidence of the health benefits
                  that come specifically from donating blood.
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title
              style={{ paddingLeft: 80 }}
              title="Free Health CheckUp"
            />
            <Card.Cover
              style={{ height: 400 }}
              source={require('../Image/Health.jpeg')}
            />
             <Card.Cover
              style={{ width: 360, height: 230, marginTop: 10 }}
              source={require('../Image/Adv3.jpg')}
            />
            <Card.Content>
              <Paragraph
                style={{ paddingTop: 20, fontSize: 18, textAlign: 'justify' }}>
                In order to give blood, you’re required to undergo a health
                screening. A trained staff member performs this checkup. They’ll
                check your:
                {'\n'}
                {'\n'}
                pulse
                <Text>
                  {'\n'}
                  {'\n'}
                  blood pressure
                  {'\n'}
                  {'\n'}
                  body temperature
                  {'\n'}
                  {'\n'}
                  hemoglobin levels
                  {'\n'}
                  {'\n'}
                  This free mini-physical can offer excellent insight into your
                  health. It can effectively detect problems that could indicate
                  an underlying medical condition or risk factors for certain
                  diseases.
                  {'\n'}
                  {'\n'}
                  Your blood is also tested for several diseases. These include:
                  {'\n'}
                  {'\n'}
                  hepatitis A,B,C

                  {'\n'}
                  {'\n'}
                  HIV
                  {'\n'}
                  {'\n'}
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
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 5.5,
    shadowRadius: 19,
  },
});
