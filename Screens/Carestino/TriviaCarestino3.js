import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    Alert
} from "react-native";


class TriviaCarestino3 extends Component {

    static navigationOptions = {
        title: 'Mi Pediatra Trivias',
        headerBackTitle: 'Volver',
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
                             ¿Qué son los loquios?
                        </Text>
                    </View>

                    <View style={styles.contenedorBtn}>
                        <Button full style={styles.btnA}
                            onPress={() => this.props.navigation.navigate('CarestinoAdd3')}
                        >
                        {/* RESPUESTA CORRECTA */}
                            <Text style={styles.blanco}>La secreción vaginal durante el puerperio</Text>
                        </Button>

                        <Button full style={styles.btnB}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    'No te desanimes, tenes más oportunidades',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('CarestinoAdd3')},
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>La percepeción paternal de ubicación del bebé</Text>
                        </Button>

                        <Button full style={styles.btnC}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    'No te desanimes, tenes más oportunidades',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('CarestinoAdd3')},
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>Un desorden neurológico genético</Text>
                        </Button>
                    </View>
                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab>
                        <Button>
                            <Text style={{color:'white',fontWeight:'800'}}>Contacto</Text>
                        </Button>    
                        <Button>
                            <Text style={{color:'white',fontWeight:'800'}}>Como jugar</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Pie: {
        backgroundColor: '#DB0A88'
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
        ...Platform.select({
            ios: {
                backgroundColor: '#DB0A88',
            },
            android: {
                backgroundColor: '#DB0A88'
            }
        }),
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
        lineHeight: 25,
        textAlign: 'center'
    }
});

export default TriviaCarestino3;