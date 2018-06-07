import { Container, Header, Content, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo';
import Expo from 'expo';
import { BlurView } from 'expo';
import {
    View,
    StyleSheet,
    StatusBar, 
    Image,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    Linking,
    Text,
    Share
} from "react-native";

class Eganaste22 extends Component {    

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

        const uri = '../../assets/images/ganaste-estrella.png';

        return (
            <Container style={styles.container}>
            <Header style={styles.cabezal}>
               <Left>
                   <Button transparent></Button>
               </Left>
               <Body>
                   <Title style={styles.textoCabezal}>Mi Pediatra</Title>
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

           <Content  showsVerticalScrollIndicator={false}>
               <View>
                   <StatusBar barStyle="light-content" />
               </View>

               <View style={styles.container2}>
                    <Text style={styles.titulo}>Felicitaciones!!!</Text>
                    <Text style={styles.textoFelicita}>
                        Ganaste una chance para el sorteo de este premio. Recibirás mails y alertas para informarte si ganaste.
                    </Text>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <BlurView>
                            <Image style={{ width: 201, height: 213 }}
                            source={require( uri )} />
                        </BlurView>
                    </View>

                    <Button block style={ styles.botonSegui }
                        onPress={() => this.props.navigation.navigate('null')}
                    >
                        <Text style={styles.textDelBoton}>Seguí sumando chances para ganar</Text>
                    </Button>
                </View>
           </Content>
       </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    container2: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
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
    },
    titulo: {
        color: '#DB0A88',
        fontSize: 28,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 50,
        fontWeight: '800'
    },
    textoFelicita: {
        flex: 1,
        color: '#733596',
        textAlign: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize: 18,
        lineHeight: 26
    },
    botonSegui: {
        backgroundColor: '#39AD45',
        marginTop: 50,
        height: 60
    },
    textDelBoton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
});


export default Eganaste22;