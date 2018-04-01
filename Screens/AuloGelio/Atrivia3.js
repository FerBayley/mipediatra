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


class Atrivia3 extends Component {

    static navigationOptions = {
        title: 'Mi Pediatra Trivias',
        gesturesEnabled: false,
        headerLeft: null,
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
                            ¿Hasta cuántas deposiciones diarias son normales en un bebé recién nacido?
                        </Text>
                    </View>

                    <View style={styles.contenedorBtn}>
                        <Button full style={styles.btnA}
                            onPress={() => this.props.navigation.navigate('EstrellaAdd1')}>
                            {/* Respuesta Correcta*/}
                            <Text style={styles.blanco}>12</Text>
                        </Button>

                        <Button full style={styles.btnB}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    '',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('A')}
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>5</Text>
                        </Button>

                        <Button full style={styles.btnC}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    '',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('A')}
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>A veces</Text>
                        </Button>
                    </View>
                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button 
                            onPress={() =>
                                Alert.alert(
                                    '¿COMO JUGAR?',
                                    '1.- Respondé la mayor cantidad de trivias de manera correcta para sumar chances en los sorteos de cada marca. 2.- Cada 3 respuestas correctas consecutivas ganás 1 chance para el sorteo del premio que elegiste.',
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>¿COMO JUGAR?</Text>
                        </Button>                       

                        <Button onPress={() => this.props.navigation.navigate('BrandScreen')}>
                            <Text style={{ color: 'white', fontWeight: '800' }}>IR AL INCIO</Text>
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
        lineHeight: 25
    }
});

export default Atrivia3;