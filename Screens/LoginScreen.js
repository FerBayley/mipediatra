import { Container, Header, Content, Footer, FooterTab, Form, Item, Label, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Constants } from 'expo';
import Expo from 'expo';
import React, { Component } from "react";
import { BlurView } from 'expo';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
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
    Button,
    Input
} from "react-native";
import { FormLabel, FormInput } from 'react-native-elements';
const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';


firebase.initializeApp({
    apiKey: "AIzaSyCflgTZ9cKIdVHQsuzQINQ00_zO_ZZ9-HQ",
    authDomain: "mipediatra-15b95.firebaseapp.com",
    databaseURL: "https://mipediatra-15b95.firebaseio.com",
    projectId: "mipediatra-15b95",
    storageBucket: "mipediatra-15b95.appspot.com",
    messagingSenderId: "77209171584" 
  }
);

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

                <View style={{ backgroundColor: '#DB493C', height: 55, borderRadius: 5, marginTop: 10,
                                justifyContent: 'center',  alignItems: 'center' }}>
                    <Button
                        onPress={this.onLoginPress.bind(this)} 
                        title='Empezar a jugar'
                        color='#fff'
                        />  
                </View>                  
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('null')}>
                    <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 15, color: 'grey' }}>Registrarme para jugar</Text>
                </TouchableOpacity>


                <Button
                    onPress={this.onSignUpPress.bind(this)} 
                    title='Sign Up'/>
            </View>
    }

    render() {
        return (

            <Container style={styles.container}>
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
                    placeholder='Contraeña'
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
    }
});

export default LoginScreen;