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
    Platform
} from "react-native";

class LoginScreen extends Component {   

    static navigationOptions = {
        title: 'Bases y Condiciones',
        headerBackTitle: 'Volver',
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };


    render() {
        return (
            <Container showsVerticalScrollIndicator={false} 
                style={styles.container}>
                <Content>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>

                    <View style={styles.container1}>
                        <Text style={styles.textoNoAcepto}>Para poder jugar tenes que aceptar las bases y condicioens.</Text>
                    </View>

                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button 
                            onPress={() => this.props.navigation.navigate('Politicas')}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>VOLVER A LAS POLITICAS</Text>
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
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
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
    textoNoAcepto: {
        fontSize: 19,
        marginTop: 150,
        lineHeight: 30
    }
});

export default LoginScreen;