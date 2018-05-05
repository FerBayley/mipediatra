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
    Alert,
    Platform
} from "react-native";

const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';

class LoginScreen extends Component {  

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
      };    


    render() {
        return (

            <Container style={styles.container}>
                <Content showsVerticalScrollIndicator={false}>

                {/* Adjust the tint and intensity */}
                <BlurView tint="light" intensity={50} style={styles.logo}>
                    <Image style={styles.logoImage} source={{ uri }} />
                </BlurView>

                <Form>
                        <Item floatingLabel>
                            <Label>Nombre y Apellido</Label>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                        </Item>

                        <Item floatingLabel>
                            <Label>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                        </Item>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PoliticasMuestra')}>
                                <Text style={{ textAlign: 'center', paddingTop: 20 }}>Acepto las bases y condiciones</Text>
                            </TouchableOpacity>
                            <Button onPress={() => this.props.navigation.navigate('Politicas')}
                                full style={styles.btnIngresar}>
                                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 16 }}>Empezá a jugar</Text>
                            </Button>                            
                    </Form>


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
        marginBottom: 5,
        ...Platform.select({
            ios: {
                marginTop: 200
            },
            android: {
                marginTop: 120
            }
        }),
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
    },
    logoImage: {
        width: 250, 
        height: 58,
    }
});

export default LoginScreen;