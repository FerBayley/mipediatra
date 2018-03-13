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


    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Text>No ganaste, sigue participando</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default LoginScreen;