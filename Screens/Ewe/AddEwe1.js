import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation'
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

class AddEwe1 extends Component {    

    static navigationOptions = {
        header: null,
      };  

    render() {
        return (
            <ImageBackground source={require('../../assets/images/ewe-add1.png')}
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
                        <Button onPress={() => Linking.openURL('null')}>
                            <Text style={{ color: 'white', fontWeight: '800' }}>VER MAS</Text>
                        </Button>                       

                        <Button onPress={() => this.props.navigation.navigate('EweTrivia2')}>
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


export default AddEwe1;