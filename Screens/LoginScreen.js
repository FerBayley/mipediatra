import { Container, Header, Content, Footer, FooterTab, Form, Item, Label, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Constants } from 'expo';
import Expo from 'expo';
import React, { Component } from "react";
import { BlurView } from 'expo';
import { Entypo } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    StyleSheet,
    Image, 
    StatusBar,
    Dimensions,
    TouchableOpacity,
    TextInput, 
    Alert,
    Platform,
    Input
} from "react-native";
import { FormLabel, FormInput } from 'react-native-elements';
const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';

import Firebase from './Firebase';

class LoginScreen extends Component {  
    

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
      };

    constructor(props){
        super(props);
        this.state = {email:'', password:'', text: '', loading:false};
    }

    onLoginPress(){
        this.setState({ error:'', loading: true });

        const{email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ error:'', loading:false });
            this.props.navigation.navigate('Politicas');
        })
        .catch(() => {
            this.setState({error:'Oppps... algo salio mal',loading:false });
        })
    }


    onSignUpPress(){
        this.setState({error:'', loading:true});

        const{email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({error:'', loading:false});
            this.props.navigation.navigate('Politicas');
        })
        .catch(() => {
            this.setState({error:'Oppps... algo salio mal',loading:false});
        })
    }

    renderButtonOrLoading(){
        if(this.state.loading){
            return <Text style={{ textAlign: 'center' }}>Usuario validado</Text>
        }
        return <View style={{ paddingRight: 10, paddingLeft: 10 }}>

                <View>
                    <Button
                        onPress={this.onLoginPress.bind(this)} 
                        title='Empezar a jugar'
                        titleStyle={{ fontWeight: "800" }}
                        buttonStyle={{
                            backgroundColor: '#D46229', 
                            width: "100%",
                            height: 55,
                            borderRadius: 5
                          }}
                        />
                </View>     

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
                    <Text style={{ textAlign: 'center', 
                                   marginTop: 10, 
                                   marginBottom: 15, 
                                   color: 'grey' }}>
                                   Registrarme como usuario nuevo
                    </Text>
                </TouchableOpacity>
            </View>
    }

    render() {
        return (

            <Container style={styles.container}>

            <StatusBar
                barStyle="dark-content"
            />


                <Content showsVerticalScrollIndicator={false}>

                {/* Adjust the tint and intensity */}
                <BlurView tint="light" intensity={50} style={styles.logo}>
                    <Image style={styles.logoImage} source={{ uri }} />
                </BlurView>

            <View style={{ marginTop: 40 }}>

            <View style={{ marginBottom: 20 }}>
                <FormInput 
                    value = {this.state.email}
                    onChangeText={email => this.setState({ email })} 
                    placeholder='Email'
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </View> 

            
            <View style={{ marginBottom: 20 }}>
                <FormInput 
                    value = {this.state.password}
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={password => this.setState({password})} 
                />
            </View>

                <Text style={{ textAlign: 'center' }}>{this.state.error}</Text>
                {this.renderButtonOrLoading()}             
            </View>        


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
                                <Text style={styles.btnText}>¿COMO JUGAR?</Text>
                            </TouchableOpacity>                           
                        </Col>

                        <Col style={{ height: 200 }}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('PoliticasMuestra')}
                        >
                            <Text style={styles.btnText}>BASES DEL JUEGO</Text>
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
        padding: 15
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
        marginTop: 170,
        marginBottom: 5,
        ...Platform.select({
            ios: {
                marginTop: 170
            },
            android: {
                marginTop: 80
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
        marginTop: 25,
        ...Platform.select({
            ios: {
                marginTop: 25
            },
            android: {
                marginTop: 20
            }
        }),
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
    },
    botonNaranja: {
        backgroundColor: '#D46229', 
        height: 55, 
        borderRadius: 5, 
        marginTop: 10,
        justifyContent: 'center',  
        alignItems: 'center',
        ...Platform.select({
            ios: {
                backgroundColor: '#D46229', 
                height: 55, 
                borderRadius: 5, 
                marginTop: 10,
                justifyContent: 'center',  
                alignItems: 'center'
            },
            android: {
                backgroundColor: '#D46229', 
                height: 55, 
                borderRadius: 5, 
                marginTop: 10,
                justifyContent: 'center',  
                alignItems: 'center'
            }
        }),
    }
});

export default LoginScreen;