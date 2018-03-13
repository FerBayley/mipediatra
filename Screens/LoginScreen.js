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
import email from 'react-native-email';

class LoginScreen extends Component {   

    static navigationOptions = {
        header: null,
      };    

    render() {
        return (
            
            <Container showsVerticalScrollIndicator={false}
                style={styles.container}>
                <Content>
                    <View style={styles.logo}>
                        <View style={styles.logo}>
                            <Image source={require('../assets/images/mp_logo.jpg')} />
                        </View>
                    </View>  
           
                    <Button full style={styles.btn1}>
                        <Text style={styles.btnTextBtn}>Crea una cuenta nueva</Text>
                    </Button>

                    <Button full style={styles.btn2} 
                    onPress={() => this.props.navigation.navigate('Politicas')}>
                        <Text style={styles.btnTextBtn}>Empezá a juagar acá</Text>
                    </Button>
                    
                    <Button full style={styles.btnFacebook}>
                        <Text style={styles.btnTextBtn}>Facebook</Text>
                    </Button>

                    <Grid style={styles.griden}>
                        <Col style={{ height: 200 }}>
                            <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Ayuda')}>
                                <Text style={styles.btnText}>Como jugar</Text>
                            </TouchableOpacity>                           
                        </Col>

                        <Col style={{ height: 200 }}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Politicas')}
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
        marginTop: 130
    },      
    btn1: {
        backgroundColor: '#ddd',
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 4,
        height: 60
    },
    btn2: {
        backgroundColor: '#DB0A88',
        marginBottom: 5,
        borderRadius: 4,
        height: 45
    },
    btnFacebook: {
        backgroundColor: '#ddd',
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