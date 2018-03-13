import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar, 
    Image,
    Platform
} from "react-native";

class Add extends Component {    

    static navigationOptions = {
        title: 'Publicidad',
        headerBackTitle: 'Volver',
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };

    render() {
        return (
            <Container style={styles.container}>

                <Content>
                    <View style={styles.imagenPauta}>
                        <Image
                            style={{width: 316, height: 610}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/babyjogger/adds/pauta-baby-jogger1.png'}}
                            />
                    </View>                    
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button>
                            <Text style={{ color: 'white', fontWeight: '800' }}>COMPRAR</Text>
                        </Button>                       

                        <Button>
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
    imagenPauta: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default Add;