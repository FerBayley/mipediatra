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

class NukAdd25 extends Component {    

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
    };   

    render() {

        const add1 = '../../assets/images/nukadd1.jpg';

        return (
                <ImageBackground source={require( add1 )}
                    style={styles.container}>
                <Container style={styles.container}>
                    <Content showsVerticalScrollIndicator={false}>
                        <View>
                            <StatusBar
                                barStyle="dark-content"
                            />
                        </View>                 
                    </Content>

                    <Footer style={styles.Pie}>
                        <FooterTab style={styles.Pie}>
                            <Button onPress={() => Linking.openURL('http://www.nukargentina.com.ar')}>
                                <Text style={{ color: 'white' }}>VER MAS</Text>
                            </Button>                       

                            <Button onPress={() => this.props.navigation.navigate('NukTrivia26')}>
                                <Text style={{ color: 'white' }}>SEGUIR JUGANDO</Text>
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


export default NukAdd25;