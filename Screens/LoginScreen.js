import { Container, Header, Content, Footer, FooterTab, Button, Form, Item, Input, Label, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image, 
    StatusBar,
    Dimensions,
    TouchableOpacity,
    TextInput
} from "react-native";
import { auth } from '../config/firebase';

class LoginScreen extends Component {   

    static navigationOptions = {
        header: null,
      };

    autenticateUser(email, password) {
        auth.signInWithEmailAndPassword(email, password)
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    

    render() {
        return (
            
            <Container style={styles.container}>
                <Content>
                    <View style={styles.logo}>
                        <View style={styles.logo}>
                            <Image source={require('../assets/images/mp_logo.jpg')} />
                        </View>
                    </View>  

                    <Form>
                        <Item floatingLabel>
                        <Label style={styles.label}>Tu Email</Label>
                        <Input 
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        />

                        </Item>
                        <Item floatingLabel last>
                        <Label style={styles.label}>Tu Contraseña</Label>
                        <Input
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        />
                        </Item>
                    </Form>
           
                    <Button full style={styles.btn1}
                    onPress={() => this.autenticateUser(this.state.email, this.state.password)}>
                        <Text style={styles.btnTextBtn}>Crea una cuenta nueva</Text>
                    </Button>

                    <Button full style={styles.btn2} 
                    onPress={() => this.props.navigation.navigate('Politicas')}>
                        <Text style={styles.btnTextBtn}>Accede con tu contraseña acá</Text>
                    </Button>
                    
                    <Button full style={styles.btnFacebook} 
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.btnTextBtn}>Accede con tu contraseña acá</Text>
                    </Button>

                    <Grid style={styles.griden}>
                        <Col style={{ height: 200 }}>
                            <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Ayuda')}>
                                <Text style={styles.btnText}>Como jugar</Text>
                            </TouchableOpacity>                           
                        </Col>

                        <Col style={{ height: 200 }}>
                        <TouchableOpacity onPress={this.handleEmail}>
                            <Text style={styles.btnText}>Bases y condiciones</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
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
        marginTop: 50
    },      
    btn1: {
        backgroundColor: '#DB0A88',
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 4,
        height: 60
    },
    btn2: {
        backgroundColor: '#733596',
        marginBottom: 5,
        borderRadius: 4,
        height: 45
    },
    btnFacebook: {
        backgroundColor: '#375D97',
        marginBottom: 10,
        borderRadius: 4,
        height: 45
    },
    btnText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
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