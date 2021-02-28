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



function StudentDataScreen({ navigation }) {
  
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
                  Name: Abdul
                  {'\n'}
                  {'\n'}
                  Father Name : Hussain
                  {'\n'}
                  Class: 5th
                  {'\n'}
                  Marks: 300
                  
                </Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFftfNbne-1SkZaOy90PchyzlRGIofPDWJcw&usqp=CAU',
                    }}
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
                  Name: Faiza
                  {'\n'}
                  {'\n'}
                  Father Name : Hussain
                  {'\n'}
                  Class: 7th
                  {'\n'}
                  Marks: 300
                  
                </Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFftfNbne-1SkZaOy90PchyzlRGIofPDWJcw&usqp=CAU',
                    }}
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
                  Name: Raheem
                  {'\n'}
                  {'\n'}
                  Father Name : Hussain
                  {'\n'}
                  Class: 8th
                  {'\n'}
                  Marks: 250
                  
                </Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.carditem}>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFftfNbne-1SkZaOy90PchyzlRGIofPDWJcw&usqp=CAU',
                    }}
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
                  Name: Abdul
                  {'\n'}
                  {'\n'}
                  Father Name : Hussain
                  {'\n'}
                  Class: 4th
                  {'\n'}
                  Marks: 280
                  
                </Text>
              </CardItem>
            </Card>
          </Content>
        </View>
      </ScrollView>
    </Container>

    
  );
}


export default  StudentDataScreen;



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
