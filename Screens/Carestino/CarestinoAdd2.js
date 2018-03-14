import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    Linking
} from "react-native";


class AddCarestino2 extends Component {

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
                    <View style={styles.addProducto}>
                        <Image
                            style={{width: 316, height: 600}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/carestino/premio-carestino1.png'}}
                        />
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button 
                            onPress={() => Linking.openURL('https://www.carestino.com/producto/cochecito-fly-rojo/')}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>VER MAS</Text>
                        </Button>                       

                        <Button
                            onPress={() => this.props.navigation.navigate('TriviaCarestino3')}
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
    logoCarestinoChico: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    addProducto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});

export default AddCarestino2;