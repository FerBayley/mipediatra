import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform
} from "react-native";


class AddGraco extends Component {

    static navigationOptions = {
        title: 'Graco',
        headerBackTitle: 'Volver',
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };


    render() {
        return (
            <Container>
                <Content>
                    <Text>Pauta Graco</Text>
                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab>
                        <Button>
                            <Text style={{ color: 'white' }}>Contacto</Text>
                        </Button>                       

                        <Button>
                            <Text style={{ color: 'white' }}>Como jugar</Text>
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
        backgroundColor: '#DB0A88'
    },
    colorBotones: {
        color: '#fff'
    },
    Pie: {
        backgroundColor: '#DB0A88'
    }
});

export default AddGraco;