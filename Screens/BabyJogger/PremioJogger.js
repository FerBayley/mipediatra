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


class PremioJogger extends Component {

    static navigationOptions = {
        title: 'Seleccionaste',
        backTitle: 'Volver',
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Image
                        style={{width: 316, height: 118, marginTop: 40}}
                        source={{uri: 'http://ideaswhite.com/mipediatra/clientes/jogger/jogger-logo.png'}}
                    />


                    <View style={styles.addProducto}>
                        <Image
                            style={{width: 334, height: 260, marginBottom: 20}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/babyjogger/productos/jogger-premio.png'}}
                        />
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab>
                        <Button
                        onPress={() => this.props.navigation.navigate('TriviaBabyJogger1')}>
                            <Text style={{ color: 'white', fontWeight: '800', fontSize: 17 }}>EMPEZAR A JUGAR</Text>
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
        ...Platform.select({
            ios: {
                backgroundColor: '#733596',
            },
            android: {
                backgroundColor: '#733596'
            }
        }),
    },
    colorBotones: {
        color: '#fff'
    },
    logoCarestinoChico: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    addProducto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
});

export default PremioJogger;