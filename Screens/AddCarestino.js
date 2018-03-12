import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform
} from "react-native";


class AddCarestino extends Component {

    static navigationOptions = {
        title: 'Carestino',
        headerBackTitle: 'Volver',
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                   
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab>
                        <Button
                        onPress={() => this.props.navigation.navigate('TriviaCarestino1')}>
                            <Text style={{ color: 'white' }}>EMPEZAR A JUGAR</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Pie: {
        backgroundColor: '#733596'
    },
    colorBotones: {
        color: '#fff'
    },
    logoCarestinoChico: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    addProducto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    Pie: {
        backgroundColor: '#DB0A88'
    }
});

export default AddCarestino;