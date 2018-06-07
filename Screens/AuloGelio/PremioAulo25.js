import { Container, Header, Content, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from 'native-base';
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Expo from 'expo';
import { BlurView } from 'expo';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    TouchableHighlight,
    Share
} from "react-native";

class PremioAulo25 extends Component {

    static navigationOptions = {
        header: null,
      };   

      onShare(){
        Share.share({
            title: 'Mi Pediatra Trivias',
            uri:'https://www.mipediatra.com.ar',
            message: 'Descargate la app Mi Pediatra Trivias. Jugá y participá por muchos premios. Descargala en https://www.mipediatra.com.ar'
        });
    }


    render() {

        const auloLogo = '../../assets/images/aulo-logopremio.png';
        const auloPremio = '../../assets/images/sorteo-aulo.png';

        return (
            <Container>
                <Header style={styles.cabezal}>
                    <Left>
                        <Button transparent>
                            <TouchableHighlight>
                                <Icon 
                                    name='arrow-back' 
                                    style={styles.elementosHeader}
                                    onPress={() => this.props.navigation.navigate('BrandScreen')}
                                />
                            </TouchableHighlight>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.textoCabezal}>Mi Pediatra Trivias</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <TouchableHighlight>
                                <Icon name='share' style={styles.elementosHeader}
                                    onPress={this.onShare}
                                />
                            </TouchableHighlight>
                        </Button>
                    </Right>
                </Header>

                <Content showsVerticalScrollIndicator={false} style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.addProducto}>
                        <Text style={styles.textoDeSelelccion}>Seleccionaste el premio de:</Text>
                        
                        <BlurView>
                            <Image
                                style={{width: 147, height: 147, marginTop: 20}}
                                source={require( auloLogo )} />
                        </BlurView>


                        <BlurView>
                            <Image
                                style={{width: 250, height: 194, marginTop: 20}}
                                source={require( auloPremio )} />
                        </BlurView>
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button
                        onPress={() => this.props.navigation.navigate('Atrivia19')}>
                            <Text style={{ color: 'white', fontSize: 14 }}>EMPEZAR A JUGAR</Text>
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
        backgroundColor: '#fff'
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
        marginTop: 35
    },
    addProducto: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoDeSelelccion: {
        textAlign: 'center',
        color: '#733596',
        fontSize: 14,
        fontWeight: '800',
        marginTop: 20
    },
    cabezal: {
        backgroundColor: '#DB0A88'
    },
    elementosHeader: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5
    },
    textoCabezal: {
        color: '#fff'
    }
});

export default PremioAulo25;