import { Container, Header, Content, Footer, FooterTab, Button, Row, Grid, Col } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
    Platform,
    BackHandler
} from "react-native";

class BrandScreen extends Component {

    static navigationOptions = {
        title: 'Mi Pediatra Trivias',
        backTitle: 'Back',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88'
          },
          headerTintColor: '#fff',
      };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </View>
                    <View style={styles.logo}>
                        <Image source={require('../assets/images/mp_logo.png')} />
                        <Text style={styles.textoElegi}>Elegí con qué marca querés empezar a responder las trivias.</Text>
                        <Text style={styles.textoToca}>Tocá un logo para ver el premio y comenzar a jugar</Text>
                    </View>

                    <Grid style={styles.Griden}>
                        <Col style={{ height: 400 }}>

                            <TouchableOpacity style={styles.Btn1}
                                onPress={() => this.props.navigation.navigate('PremioCarestino')}>
                                <View>
                                    <Image source={require('../assets/images/carestino-logo.png')} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Btn2}
                            onPress={() => this.props.navigation.navigate('PremioEwe')}>
                                <View>
                                    <Image source={require('../assets/images/ewe-logo.png')} />
                                </View> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Btn3}
                            onPress={() => this.props.navigation.navigate('PremioGraco')}>
                                <View>
                                    <Image source={require('../assets/images/gracos-logo.png')} />
                                </View>    
                            </TouchableOpacity>                      
                        </Col>

                        <Col style={{ height: 400 }}>
                            <TouchableOpacity style={styles.Btn4}
                            onPress={() => this.props.navigation.navigate('PremioEstrella')}>
                                <View>
                                    <Image source={require('../assets/images/estrella-logo.png')} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Btn5}
                            onPress={() => this.props.navigation.navigate('PremioJogger')}>
                                <View>
                                    <Image source={require('../assets/images/jogger-logo.png')} />
                                </View>
                            </TouchableOpacity> 

                            <TouchableOpacity style={styles.Btn6}
                            onPress={() => this.props.navigation.navigate('PremioSilfab')}>
                                <View>
                                    <Image source={require('../assets/images/logo-silfab.png')} />
                                </View>
                            </TouchableOpacity>  
                        </Col>
                    </Grid>
                    
                </Content>
                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button>
                            <Text style={{ color: 'white', fontWeight: '800' }}>CONTACTO</Text>
                        </Button>                       

                        <Button>
                            <Text style={{ color: 'white', fontWeight: '800' }}>COMO JUGAR</Text>
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 70,
        ...Platform.select({
            ios: {
                marginTop: 70
            },
            android: {
                marginTop: 15,
            }
        }),
    },
    textoElegi: {
        fontSize: 19,
        color: '#DB0A88',
        padding: 20,
        textAlign: 'center'
    },
    textoToca: {
        fontSize: 16,
        color: '#733596',
        fontWeight: '800',
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center'
    },
    Btn1: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Btn2: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Btn3: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Btn4: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Btn5: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Btn6: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Pie: {
        backgroundColor: '#DB0A88'
    }
});

export default BrandScreen;