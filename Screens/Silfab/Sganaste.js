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
    Linking
} from "react-native";

class Fganaste extends Component {    

    static navigationOptions = {
        header: null,
      };  

    render() {
        return (
               <Container style={{ flex:1, backgroundColor: 'red' }}>
                   <Content>
                    <View>
                        <Text>FELICITACIONES GANANSTE PREMIO DE SILFAB</Text>
                    </View>
                   </Content>
               </Container>
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


export default Fganaste;