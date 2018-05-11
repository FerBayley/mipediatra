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

class LiliAdd3 extends Component {    

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
    };   

    render() {

        const liliAdd3 = '../../assets/images/liliana-add3.png';

        return (
                <ImageBackground source={require( liliAdd3 )}
                    style={styles.container}>
                <Container style={styles.container}>
                    <Content showsVerticalScrollIndicator={false}>
                        <View>
                            <StatusBar
                                barStyle="dark-content"
                            />
                        </View>     
                        <Text>LiliaAdd3</Text>            
                    </Content>

                    <Footer style={styles.Pie}>
                        <FooterTab style={styles.Pie}>
                            <Button onPress={() => Linking.openURL('https://www.youtube.com/watch?v=QZ5C64n9fw4')}>
                                <Text style={{ color: 'white', fontWeight: '800' }}>VER MAS</Text>
                            </Button>                       

                            <Button onPress={() => this.props.navigation.navigate('null')}>
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


export default LiliAdd3;