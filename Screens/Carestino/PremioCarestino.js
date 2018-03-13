import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
} from "react-native";
import { Font, AppLoading } from "expo";


class PremioCarestino extends Component {

    static navigationOptions = {
        title: 'Seleccionaste',
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };



      async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
      }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.logoCarestinoChico}>
                        <Image
                            style={{width: 230, height: 46}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/carestino/carestino-logo.png'}}
                        />
                        <Image
                            style={{width: 230, height: 46}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/carestino/premio-carestino1.jpg'}}
                        />
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button
                        onPress={() => this.props.navigation.navigate('TriviaCarestino1')}>
                            <Text style={{ color: 'white', fontWeight: '800', fontSize: 17 }}>EMPEZAR A JUGAR</Text>
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
                    backgroundColor: '#733596',
                },
                android: {
                    backgroundColor: '#733596'
                }
            }),
    },
    colorBotones: {
        color: '#fff'
    },
    logoCarestinoChico: {
        justifyContent: 'center',
        alignItems: 'center',
            ...Platform.select({
                ios: {
                    marginTop: 35
                },
                android: {
                    marginTop: 10
                }
            }),
    },
    addProducto: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        ...Platform.select({
            ios: {
                marginTop: 5,
            },
            android: {
                marginTop: 1,
                alignSelf: 'stretch'
            }
        }),
    }
});

export default PremioCarestino;