import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform
} from "react-native";


class TriviaCarestino2 extends Component {

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
                        <Image source={require('../assets/images/mp_logo.png')} />
                        <Text style={styles.textoPregunta}>
                             ¿A qué edad del bebé recomienda la OMS el inicio de la alimentación complementaria?
                        </Text>
                    </View>

                    <View style={styles.contenedorBtn}>
                        <Button full style={styles.btnA}>
                            <Text style={styles.blanco}>3 Meses</Text>
                        </Button>

                        <Button full style={styles.btnB}>
                            <Text style={styles.blanco}>6 Meses</Text>
                        </Button>

                        <Button full style={styles.btnC}>
                            <Text style={styles.blanco}>12 Meses</Text>
                        </Button>
                    </View>

                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab>
                        <Button>
                            <Text style={{ color: 'white' }}>Contacto</Text>
                        </Button>                       

                        <Button>
                            <Text style={{ color: 'white' }}>Como jugar</Text>
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
        shadowOffset:{  width: 2,  height: 1,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0
    },
    btnB: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#39AD45',
        borderRadius: 4
    },
    btnC: {
        marginBottom: 15,
        height: 70,
        backgroundColor: '#01ACEE',
        borderRadius: 4
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

export default TriviaCarestino2;