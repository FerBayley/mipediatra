import { Container, Header, Content, Footer, FooterTab, Button, Form, Item, Input, Label, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Constants } from 'expo';
import Expo from 'expo';
import React, { Component } from "react";
import { BlurView } from 'expo';
import {
    View,
    StyleSheet,
    Image, 
    StatusBar,
    Dimensions,
    TouchableOpacity,
    TextInput, 
    Alert
} from "react-native";

const FB_APP_ID = '128016374696409'
const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';

class LoginScreen extends Component {  

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
      };    

    async loginFB() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('128016374696409', {
            permissions: ['public_profile', 'email'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert(
                'Ingreso exitoso',
                'Bienvenidos!!!',
                [
                  {text: 'Empezá a jugar', onPress: () => this.props.navigation.navigate('Politicas')}
                ],
                { cancelable: false }
          );
        }
      }

    render() {
        return (

            <Container style={styles.container}>
                <Content showsVerticalScrollIndicator={false}>

                {/* Adjust the tint and intensity */}
                <BlurView tint="light" intensity={50} style={styles.logo}>
                    <Image style={{ width: 250, height: 58 }} source={{ uri }} />
                </BlurView>

                    <Button full style={styles.btnIngresar}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{ fontWeight: '700' }}>Registrarme para empezar a jugar</Text>
                    </Button>

                    <Button full style={styles.btnFacebook}
                        onPress={this.loginFB.bind(this)} >
                        <Text style={{ fontWeight: '700' }}>Ingresar con Facebook</Text>
                    </Button>

                    <Grid style={styles.griden}>
                        <Col style={{ height: 200 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    Alert.alert(
                                        'COMO JUGAR',
                                        '1.- Respondé la mayor cantidad de trivias de manera correcta para sumar chances en los sorteos de cada marca. 2.- Cada 3 respuestas correctas consecutivas ganás 1 chance para el sorteo del premio que elegiste.',
                                        [
                                            {text: 'Cerrar'},
                                        ],
                                        { cancelable: false }
                                      )}
                            >
                                <Text style={styles.btnText}>Como jugar</Text>
                            </TouchableOpacity>                           
                        </Col>

                        <Col style={{ height: 200 }}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('PoliticasMuestra')}
                        >
                            <Text style={styles.btnText}>Bases del juego</Text>
                        </TouchableOpacity>
                        
                        </Col>
                    </Grid>
             
                </Content>
            </Container>
        );
    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 25
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
        marginTop: 250,
        marginBottom: 5
    },      
    btnFacebook: {
        backgroundColor: '#3b5998',
        marginTop: 10,
        borderRadius: 4,
        height: 50
    },
    btnIngresar: {
        backgroundColor: '#c0392b',
        marginTop: 10,
        borderRadius: 4,
        height: 55
    },
    btnGoogle: {
        backgroundColor: '#dd4b39',
        marginTop: 10,
        borderRadius: 4,
        height: 50
    },
    btnText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
        color: 'grey'
    },
    griden: {
        marginTop: 10
    },
    btnTextBtn: {
        color: '#fff'
    },
    btnTextBtn: {
        color: '#fff',
        fontSize: 19
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderColor: 'red'
    },
    ingresa: {
        color: 'grey',
        marginBottom: 5,
        textAlign: 'center'
    },
    label: {
        color: '#733596',
        fontSize: 19
    }
});

export default LoginScreen;