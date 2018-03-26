import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform
} from "react-native";


class Ayuda extends Component {

    static navigationOptions = {
        title: 'Ayuda',
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
                <Content showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>

                    <View>
                        <Text style={styles.cuerpoAyuda}>
                            1.- Respondé la mayor cantidad de trivias de manera correcta para sumar chances en los sorteos de cada marca. 
                        </Text>
                        <Text style={styles.cuerpoAyuda}>
                            2.- Cada 3 respuestas correctas consecutivas ganás 1 chance para el sorteo del premio que elegiste.
                        </Text>
                    </View>
                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button
                            onPress={() => this.props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>EMPEZAR A JUGAR</Text>
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
        ...Platform.select({
            ios: {
                backgroundColor: '#DB0A88',
            },
            android: {
                backgroundColor: '#DB0A88'
            }
        }),
    },
    colorBotones: {
        color: '#fff'
    },
    Pie: {
        backgroundColor: '#DB0A88'
    },
    cuerpoAyuda: {
        fontSize: 18,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'grey',
        lineHeight: 25,
        textAlign: 'justify'
    }
});

export default Ayuda;