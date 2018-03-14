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

class Succes extends Component {

    static navigationOptions = {
        title: 'Finalizaste la travia',
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
                        <StatusBar
                            barStyle="light-content"
                        />
                    <View style={styles.addProducto}>
                        <Text style={styles.textHappy}>Felicitaciones!</Text>
                        <Text style={styles.textoParrafo}>
                            Ganaste una chance para el sorteo de este premio, vas a recibir un mail para informarte si ganaste!
                        </Text>
                    </View>

                    <Button style={styles.botonGanaste} block light
                        onPress={() => this.props.navigation.navigate('BrandScreen')}>
                        <Text style={styles.textoBtn}>Seguí sumando chances para ganar</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    colorBotones: {
        color: '#fff'
    },
    addProducto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    botonGanaste: {
        backgroundColor: '#39AD45',
        height: 55
    },
    textoBtn: {
        color: 'white',
        fontSize: 17
    },
    textHappy: {
        color: '#733596',
        fontSize: 35,
        marginTop: 30,
        marginBottom: 5
    },
    textoParrafo: {
        color: '#733596',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 20
    }
});

export default Succes;