import { Container, Header, Content, Footer, FooterTab, Form, Item, Label, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Constants } from 'expo';
import Expo from 'expo';
import React, { Component } from "react";
import { BlurView } from 'expo';
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
    Platform
} from "react-native";
import { FormLabel, FormInput } from 'react-native-elements';
const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';

import Firebase from './Firebase';

class SignIn extends Component {  

    static navigationOptions = {
        title: 'Registrarse para jugar',
        headerBackTitle: 'Volver',
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
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
            this.setState({error:'Los datos ingresados no son correctos',loading:false });
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
            this.setState({error:'Los datos ingresados no son correctos',loading:false});
        })
    }

    renderButtonOrLoading(){
        if(this.state.loading){
            return <Text style={{ textAlign: 'center' }}>Usuario validado</Text>
        }
        return <View style={{ paddingRight: 10, paddingLeft: 10 }}>

                <View style={{ marginTop: 10 }}>
                    <Button
                        onPress={this.onSignUpPress.bind(this)} 
                        title='Registrarme para jugar'
                        titleStyle={{ fontWeight: "800" }}
                        buttonStyle={{
                            backgroundColor: '#DB0A88',
                            width: "100%",
                            height: 55,
                            borderRadius: 5
                          }}
                        />  
                </View>
            </View>
    }

    render() {
        return (

            <Container style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                />

                <Content showsVerticalScrollIndicator={false}>

                        <View style={{ marginTop: 20 }}>

                            <View style={{ marginBottom: 20 }}>
                                <FormInput 
                                    value = {this.state.text}
                                    onChangeText={text => this.setState({ text })} 
                                    placeholder='Nombre y apellido'
                                    autoCorrect={false}
                                />
                            </View> 

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


                                <View style={styles.botonPoliticasOk}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PoliticasMuestra')}>
                                        <Text style={styles.textoPoliticasOk}>
                                            Al registrarme acepto las bases y condiciones
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={{ textAlign: 'center' }}>{this.state.error}</Text>
                            {this.renderButtonOrLoading()}       

                            
                            <View style={styles.botonYaEstoyRegistrado}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                    <Text style={styles.textoYaEstoyRegistrado}>
                                        Ya estoy registrado, volver
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>                    
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
        marginTop: 150
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
    botonPoliticasOk: {
        alignItems: 'center',
        marginTop: 15
    },
    textoPoliticasOk: {
        color: 'grey',
        ...Platform.select({
            ios: {
                textAlign: 'center'
            },
            android: {
                textAlign: 'center',
                fontSize: 12,
            }
        }),
    },
    botonYaEstoyRegistrado: {
        alignItems: 'center'
    },
    textoYaEstoyRegistrado: {
        color: 'grey',
        marginTop: 15,
        ...Platform.select({
            ios: {
                textAlign: 'center'
            },
            android: {
                textAlign: 'center'
            }
        }),
    }
});

export default SignIn;