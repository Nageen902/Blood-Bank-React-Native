import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';



function VcanciesScreen({ navigation }) {
  
  return (
   
   
    <Container>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Content>
            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                     source={require('../Image/logo.png')}
                  />
                  <Body>
                    <Text>
                      Liberty County High SCHOOL Hyderabad, Telangana, India (+1
                      ot
                    </Text>
                    <Text note>29 days ago</Text>
    
                  </Body>
                </Left>
              </CardItem>

              <CardItem cardBody>
                <Text>
                  Presenting lessons in a comprehensive manner and use
                  visual/audio means to facilitate learning
                  {'\n'}
                  {'\n'}
                  Providing individualized instruction to each student by
                  promoting interactive learning
                  {'\n'}
                  Sub Roles : English,Social-Science,Physics
                  {'\n'}
                  Max Experience : 2 yrs
                  {'\n'}
                  Min Experience : 0 yrs
                  {'\n'}
                  Teaching Experience : Private school,Secondary School
                  {'\n'}
                  Education : PostGraduate - Other
                  {'\n'}
                  Languages known : English
                  {'\n'}
                  Sub Type : Secondary school,Higher secondary
                  {'\n'}
                  Teaching Medium : English
                </Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                     source={require('../Image/logo.png')}
                  />
                  <Body>
                    <Text>
                      Liberty County High SCHOOL Hyderabad, Telangana, India (+1
                      ot
                    </Text>
                    <Text note>29 days ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text>
                  Presenting lessons in a comprehensive manner and use
                  visual/audio means to facilitate learning
                  {'\n'}
                  {'\n'}
                  Providing individualized instruction to each student by
                  promoting interactive learning
                  {'\n'}
                  Sub Roles : English,Social-Science,Physics
                  {'\n'}
                  Max Experience : 2 yrs
                  {'\n'}
                  Min Experience : 0 yrs
                  {'\n'}
                  Teaching Experience : Private school,Secondary School
                  {'\n'}
                  Education : PostGraduate - Other
                  {'\n'}
                  Languages known : English
                  {'\n'}
                  Sub Type : Secondary school,Higher secondary
                  {'\n'}
                  Teaching Medium : English
                </Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                    source={require('../Image/logo.png')}
                  />
                  <Body>
                    <Text>
                      Liberty County High SCHOOL Hyderabad, Telangana, India (+1
                      ot
                    </Text>
                    <Text note>29 days ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text>
                  Presenting lessons in a comprehensive manner and use
                  visual/audio means to facilitate learning
                  {'\n'}
                  {'\n'}
                  Providing individualized instruction to each student by
                  promoting interactive learning
                  {'\n'}
                  Sub Roles : English,Social-Science,Physics
                  {'\n'}
                  Max Experience : 2 yrs
                  {'\n'}
                  Min Experience : 0 yrs
                  {'\n'}
                  Teaching Experience : Private school,Secondary School
                  {'\n'}
                  Education : PostGraduate - Other
                  {'\n'}
                  Languages known : English
                  {'\n'}
                  Sub Type : Secondary school,Higher secondary
                  {'\n'}
                  Teaching Medium : English
                </Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                    source={require('../Image/logo.png')}
                  />
                  <Body>
                    <Text>
                      Liberty County High SCHOOL Hyderabad, Telangana, India (+1
                      ot
                    </Text>
                    <Text note>29 days ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text>
                  Presenting lessons in a comprehensive manner and use
                  visual/audio means to facilitate learning
                  {'\n'}
                  {'\n'}
                  Providing individualized instruction to each student by
                  promoting interactive learning
                  {'\n'}
                  Sub Roles : English,Social-Science,Physics
                  {'\n'}
                  Max Experience : 2 yrs
                  {'\n'}
                  Min Experience : 0 yrs
                  {'\n'}
                  Teaching Experience : Private school,Secondary School
                  {'\n'}
                  Education : PostGraduate - Other
                  {'\n'}
                  Languages known : English
                  {'\n'}
                  Sub Type : Secondary school,Higher secondary
                  {'\n'}
                  Teaching Medium : English
                </Text>
              </CardItem>
            </Card>
          </Content>
        </View>
      </ScrollView>
    </Container>

    
  );
}


export default VcanciesScreen;



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C51162",
    flexGrow: 1,
  },
  carditem: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});
