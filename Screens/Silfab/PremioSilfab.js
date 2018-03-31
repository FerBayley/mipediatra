import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Right, Icon, Title } from 'native-base';
import React, { Component } from "react";
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


class PremioSilfab extends Component {

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
                        <Image
                            style={{width: 145, height: 58, marginTop: 50}}
                            source={require('../../assets/images/silfab-logopremio.png')} />

                        <Image
                            style={{width: 273, height: 260, marginTop: 40}}
                            source={require('../../assets/images/sorteo-silfab.png')} />
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button
                        onPress={() => this.props.navigation.navigate('TriviaEstrella1')}>
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
        alignItems: 'center',
        marginTop: 10
    },
    textoDeSelelccion: {
        textAlign: 'center',
        color: '#733596',
        fontSize: 17,
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

export default PremioSilfab;