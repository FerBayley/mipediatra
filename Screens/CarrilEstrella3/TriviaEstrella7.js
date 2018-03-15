import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    Alert
} from "react-native";


class TriviaEstrella7 extends Component {

    static navigationOptions = {
        title: 'Mi Pediatra Trivias',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };


    render() {
        return (
            <Container>
                <Content showsVerticalScrollIndicator={false}>
                     <View style={styles.logo}>
                        <Image
                            style={{width: 230, height: 46}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/mp/logo-mp.png'}}
                        />
                        <Text style={styles.textoPregunta}>
                            La dermatitis del pañal aparece con mayor frecuencia en:
                        </Text>
                    </View>

                    <View style={styles.contenedorBtn}>
                        <Button full style={styles.btnA}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    'No te desanimes, tenes más oportunidades',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('C')},
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>Las nalgas</Text>
                        </Button>


                        {/* Respuesta Correcta*/}
                        <Button full style={styles.btnB}                           
                            onPress={() => this.props.navigation.navigate('EstrellaAdd7')} 
                        >
                            <Text style={styles.blanco}>Los pliegues de la ingle</Text>
                        </Button>

                        <Button full style={styles.btnC}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    'No te desanimes, tenes más oportunidades',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('C')},
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>La cintura del pañal</Text>
                        </Button>
                    </View>

                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button><Text style={{ color: 'white' }}>Contacto</Text></Button>                       
                        <Button><Text style={{ color: 'white' }}>Como jugar</Text></Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 100
    },
    Pie: {
        backgroundColor: '#DB0A88'
    },
    textoPregunta: {
        fontSize: 19,
        color: '#733596',
        padding: 20,
        textAlign: 'center'
    },
    btnA: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#733596',
        borderRadius: 4,
        shadowOffset:{  width: 2,  height: 3,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0
    },
    btnB: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#39AD45',
        borderRadius: 4,
        shadowOffset:{  width: 2,  height: 3,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0
    },
    btnC: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#01ACEE',
        borderRadius: 4,
        shadowOffset:{  width: 2,  height: 3,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0
    },
    contenedorBtn: {
        padding: 20,
    },
    blanco: {
        color: 'white',
        fontSize: 20,
        lineHeight: 25
    }
});

export default TriviaEstrella7;