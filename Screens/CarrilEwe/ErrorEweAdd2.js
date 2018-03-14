import { Container, Header, Content, Footer, FooterTab, Button, Text, Body } from 'native-base';
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar, 
    Image,
    Platform,
    TouchableOpacity,
    Linking
} from "react-native";
import { Constants, WebBrowser } from 'expo';

class ErrorBabyJoggeradd3 extends Component {    

    static navigationOptions = {
        title: 'Publicidad',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };

    render() {
        return (
            <Container style={styles.container}>
                <Content showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>
                    <View style={styles.imagenPauta}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SuccesJogger')}>
                            <Image
                                style={{width: 316, height: 610}}
                                source={{uri: 'http://ideaswhite.com/mipediatra/clientes/babyjogger/adds/pauta-baby-jogger3.png'}}
                                />
                        </TouchableOpacity>
                    </View>                  
                </Content>
                
                <Button
                    style={styles.paragraph}
                    title="Open WebBrowser"
                    onPress={this._handlePressButtonAsync}
                />

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button 
                            onPress={() => Linking.openURL('https://www.facebook.com/babyjoggerarg/')}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>VER MAS</Text>
                        </Button>                       

                        <Button
                            onPress={() => this.props.navigation.navigate('SuccesJogger')}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>SEGUIR JUGANDO</Text>
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
    imagenPauta: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default ErrorBabyJoggeradd3;