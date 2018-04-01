import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation'
import {
    View,
    StyleSheet,
    StatusBar, 
    Image,
    Platform,
    TouchableOpacity,
    Linking
} from "react-native";

class BimbiAdd3 extends Component {    

    static navigationOptions = {
        title: 'Publicidad',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };

    render() {
        return (
            <Container style={styles.container}>
                <Content showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>
                    <View style={styles.imagenPauta}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('TriviaEwe2')}>
                        <Image
                            style={{width: 288, height: 556}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/ewe/ads/ewe1.png'}}
                        />
                       </TouchableOpacity>
                    </View>                    
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button onPress={() => Linking.openURL('http://www.lineaewe.com.ar')}>
                            <Text style={{ color: 'white', fontWeight: '800' }}>VER MAS</Text>
                        </Button>                       

                        <Button onPress={() => this.props.navigation.navigate('TriviaEwe2')}>
                            <Text style={{ color: 'white', fontWeight: '800' }}>SEGUIR JUGANDO</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Pie: {
        ...Platform.select({
            ios: {
                backgroundColor: '#DB0A88',
            },
            android: {
                backgroundColor: '#DB0A88'
            }
        }),
    },
    colorBotones: {
        color: '#fff'
    },
    imagenPauta: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        shadowOffset:{  
            width: 20,  
            height: 3,  
        },
        shadowColor: 'grey',
        shadowOpacity: 5.0,
        borderRadius: 4
    }
});


export default BimbiAdd3;