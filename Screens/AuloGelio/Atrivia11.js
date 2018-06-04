import { Container, Header, Content, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Expo from 'expo';
import { BlurView } from 'expo';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    Alert,
    TouchableHighlight,
    Share
} from "react-native";

class Atrivia11 extends Component {

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
      };   

      onShare(){
        Share.share({
            title: 'Mi Pediatra Trivias',
            uri:'https://www.mipediatra.com.ar',
            message: 'Descargate la app Mi Pediatra Trivias. Jugá y participá por muchos premios. Descargala en https://www.mipediatra.com.ar'
        });
    }


    render() {

        const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';

        return (
            <Container style={{ backgroundColor: '#FFF' }}>
                 <Header style={styles.cabezal}>
                    <Left>
                        <Button transparent></Button>
                    </Left>
                    <Body>
                        <Title style={styles.textoCabezal}>Mi Pediatra Trivias</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <TouchableHighlight>
                                <Icon name='share' style={styles.elementosHeader}
                                    onPress={this.onShare}
                                />
                            </TouchableHighlight>
                        </Button>
                    </Right>
                </Header>
                <Content showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar barStyle="light-content" />
                    </View>

                     <View>
                        <BlurView tint="light" intensity={50} style={styles.logo}>
                            <Image style={{ width: 250, height: 58 }} source={{ uri }} />
                        </BlurView>
                        <Text style={styles.textoPregunta}>
                        AULO GELIO posee presentaciones en:
                        </Text>
                    </View>

                    <View style={styles.contenedorBtn}>
                        <Button full style={styles.btnA}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Correcta',
                                    '',
                                    [
                                      {text: 'Avanzar', onPress: () => this.props.navigation.navigate('Aadd11')}
                                    ],
                                    { cancelable: false }
                                  )}
                            >
                            <Text style={styles.blanco}>Crema, Aerosol y Loción</Text>
                        </Button>

                        <Button full style={styles.btnB}
                            onPress={() =>
                                Alert.alert(
                                    'Respuesta Incorrecta',
                                    '',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('AaddError4')}
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>Velas y sahumerios</Text>
                        </Button>
                        
                        <Button full style={styles.btnC}
                            onPress={() =>
                                Alert.alert( 
                                    'Respuesta Incorrecta',
                                    '',
                                    [
                                      {text: 'Seguí participando', onPress: () => this.props.navigation.navigate('AaddError4')}
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={styles.blanco}>Espirales</Text>
                        </Button>
                    </View>
                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button 
                            onPress={() =>
                                Alert.alert(
                                    '¿COMO JUGAR?',
                                    '\n 1.- Respondé la mayor cantidad de trivias de manera correcta para sumar chances en los sorteos de cada marca. \n \n 2.- Cada 3 respuestas correctas consecutivas, ganás 1 chance para el sorteo del premio que elegiste.',
                                    [
                                        {text: 'Cerrar'},
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={{ color: 'white' }}>¿COMO JUGAR?</Text>
                        </Button>                       

                        <Button onPress={() => this.props.navigation.navigate('BrandScreen')}>
                            <Text style={{ color: 'white' }}>IR AL INICIO</Text>
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
        marginTop: 25,
        ...Platform.select({
            ios: {
                marginTop: 25
            },
            android: {
                marginTop: 25
            }
        }),
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
        shadowOpacity: 1.0,
    },
    btnB: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#39AD45',
        borderRadius: 4,
        shadowOffset:{  width: 2,  height: 3,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
    },
    btnC: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#01ACEE',
        borderRadius: 4,
        shadowOffset:{  width: 2,  height: 3,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
    },
    contenedorBtn: {
        padding: 20,
    },
    blanco: {
        color: 'white',
        fontSize: 15,
        lineHeight: 25,
        fontWeight: '800',
        textAlign: 'center'
    },
    cabezal: {
        backgroundColor: '#DB0A88'
    },
    elementosHeader: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5
    },
    textoCabezal: {
        color: '#fff'
    }
});

export default Atrivia11;