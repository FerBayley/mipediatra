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


class PremioSilfab extends Component {

    static navigationOptions = {
        title: 'Seleccionaste',
        headerBackTitle: 'Volver',
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };


    render() {
        return (
            <Container style={styles.container}>
                <Content showsVerticalScrollIndicator={false}>
                <Image
                    style={{width: 316, height: 610}}
                    source={{uri: 'http://ideaswhite.com/mipediatra/clientes/silfab/silfab.png'}}
                />
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button
                        onPress={() => this.props.navigation.navigate('BrandScreen')}>
                            <Text style={{ color: 'white', fontWeight: '800', fontSize: 17 }}>PROXIMAMENTE</Text>
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
        marginTop: 10
    }
});

export default PremioSilfab;