import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo';
import Expo from 'expo';
import { BlurView } from 'expo';
import {
    View,
    StyleSheet,
    StatusBar, 
    Image,
    Platform,
    TouchableOpacity,
    Linking,
    ImageBackground
} from "react-native";

class LiliAdd7 extends Component {    

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
    };   

    render() {

        const liliadd1 = '../../assets/images/lili-add1.png';

        return (
                <ImageBackground source={require( liliadd1 )}
                    style={styles.container}>
                <Container style={styles.container}>
                    <Content showsVerticalScrollIndicator={false}>
                        <View>
                            <StatusBar
                                barStyle="dark-content"
                            />
                        </View>     
                        <Text>LiliaAdd1</Text>            
                    </Content>

                    <Footer style={styles.Pie}>
                        <FooterTab style={styles.Pie}>
                            <Button onPress={() => Linking.openURL('https://www.instagram.com/lilianaelectrodomesticos/?hl=es-la')}>
                                <Text style={{ color: 'white', fontWeight: '800' }}>VER MAS</Text>
                            </Button>                       

                            <Button onPress={() => this.props.navigation.navigate('LiliTrivia8')}>
                                <Text style={{ color: 'white', fontWeight: '800' }}>SEGUIR JUGANDO</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
                </ImageBackground>              
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});


export default LiliAdd7;