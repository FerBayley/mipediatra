import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
} from "react-native";
import { Font, AppLoading } from "expo";


class PremioEwe extends Component {

    static navigationOptions = {
        title: 'Seleccionaste',
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
                <Content showsVerticalScrollIndicator={false}>
                    <View style={styles.logoCarestinoChico}>
                    <Image
                        style={{width: 159, height: 66}}
                        source={{uri: 'http://ideaswhite.com/mipediatra/clientes/ewe/ads/ewe-logo.png'}}
                    />
                    </View>

                    <View>
                        <Image
                            style={{width: 334, height: 458}}
                            source={{uri: 'http://ideaswhite.com/mipediatra/clientes/ewe/ads/ewe-premio.png'}}
                        />
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button
                        onPress={() => this.props.navigation.navigate('TriviaEwe1')}>
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

export default PremioEwe;