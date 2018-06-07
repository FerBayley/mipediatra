import { Container, Header, Content, Footer, FooterTab, Button, Row, Grid, Col, Icon, Left, Right, Body, Title } from 'native-base';
import React, { Component } from "react";
import { Constants } from 'expo';
import Expo from 'expo';
import { BlurView } from 'expo';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,
    Platform,
    BackHandler,
    Alert,
    Share
} from "react-native";

class AuloBrand19 extends Component {

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
      };   

    onShare(){
        Share.share({
            title: 'Mi Pediatra Trivias',
            uri:'https://www.mipediatra.com.ar',
            message: 'Descargate la app Mi Pediatra Trivias. Jugá y participá por muchos premios. Descargala en https://www.mipediatra.com.ar'
        });
    }

    render() {

        const uri = 'http://ideaswhite.com/mipediatra/img/logo-trivias.png';
        const estrella = 'http://ideaswhite.com/mipediatra/img/estrella-logo.jpg';
        const graco = 'http://ideaswhite.com/mipediatra/img/graco-loco.jpg';
        const farmx = 'http://ideaswhite.com/mipediatra/clientes/farmx/farmx.png';
        const aulogelio = 'http://ideaswhite.com/mipediatra/clientes/aulo/aulo.png';
        const ewe = 'http://ideaswhite.com/mipediatra/img/ewe-logo.jpg';
        const bimbi = 'http://ideaswhite.com/mipediatra/clientes/bimbi/bimbi.png';
        const silfab = 'http://ideaswhite.com/mipediatra/img/logo-silfab.png';
        const nuk = 'http://ideaswhite.com/mipediatra/clientes/nuk/nuk.png';
        const liliana = 'http://ideaswhite.com/mipediatra/clientes/liliana/liliana-logo.png';

        return (
            <Container style={styles.container}>
                <Header style={styles.cabezal}>
                    <Left>
                        <Button transparent></Button>
                    </Left>
                    <Body>
                        <Title style={styles.textoCabezal}>Mi Pediatra</Title>
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


                <Content showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar barStyle="light-content" />
                    </View>

                    <View style={styles.logo}>                        
                        {/* Adjust the tint and intensity */}
                        <BlurView tint="light" intensity={50} style={styles.logo}>
                            <Image style={{ width: 250, height: 58 }} source={{ uri }} />
                        </BlurView>

                        <Text style={styles.textoElegi}>Elegí con qué marca querés empezar a responder las trivias.</Text>
                        <Text style={styles.textoToca}>Tocá un logo, mirá el premio y comenzá a jugar</Text>
                    </View>

                    <Grid style={styles.Griden}>
                        <Col style={{ height: 400 }}>
                            {/* Trivia Estrella */}
                            <TouchableOpacity style={styles.Estrella}
                                onPress={() => this.props.navigation.navigate('PremioEstrella')}>
                                {/* Adjust the tint and intensity */}
                                <BlurView tint="light" intensity={50}>
                                    <Image 
                                        style={{ width: 130, height: 42 }} 
                                        source={{ uri: estrella }}
                                    />
                                </BlurView>
                            </TouchableOpacity>
                            {/* Trivia Estrella */}       

                            {/* Trivia Gracco */}   
                            <TouchableOpacity style={styles.Graco}
                                onPress={() => this.props.navigation.navigate('PremioGraco')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 132, height: 44 }} 
                                            source={{ uri: graco }}
                                         />
                                    </BlurView>
                            </TouchableOpacity>   
                            {/* Trivia Gracco */}   

                            {/* Trivia Farmx */}
                            <TouchableOpacity style={styles.Farmx}
                                onPress={() => this.props.navigation.navigate('PremioFarmx')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 159, height: 66 }} 
                                            source={{ uri: farmx }}
                                         />
                                    </BlurView>
                            </TouchableOpacity> 
                            {/* Trivia Farmx */}    

                            {/* Trivia Nuk */}   
                            <TouchableOpacity style={styles.Nuk}
                                onPress={() => this.props.navigation.navigate('PremioNuk')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 158, height: 65 }} 
                                            source={{ uri: nuk }}
                                        />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Nuk */}

                            {/* Trivia Liliana */}   
                            <TouchableOpacity style={styles.liliana}
                                onPress={() => this.props.navigation.navigate('PremioLiliana')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 100, height: 41 }} 
                                            source={{ uri: liliana }}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Liliana */}
                        </Col>

                        <Col style={{ height: 400 }}>
                            {/* Trivia Ewe */}
                            <TouchableOpacity style={styles.Ewe}
                                onPress={() => this.props.navigation.navigate('PremioEwe')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 106, height: 57 }} 
                                            source={{ uri: ewe }}
                                         />
                                    </BlurView>
                            </TouchableOpacity>
                            {/* Trivia Ewe */}

                            {/* Trivia Silfab */}   
                            <TouchableOpacity style={styles.Silfab}
                                onPress={() => this.props.navigation.navigate('PremioSilfab')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 132, height: 44 }} 
                                            source={{ uri: silfab }}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Silfab */}

                            {/* Trivia AuloGelio */}   
                            <TouchableOpacity style={styles.AuloGelio}
                                onPress={() => this.props.navigation.navigate('null')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 158, height: 65 }} 
                                            source={{ uri: aulogelio }}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia AuloGelio */}

                            {/* Trivia Bimbi */}   
                            <TouchableOpacity style={styles.Bimbi}
                                onPress={() => this.props.navigation.navigate('PremioBimbi')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 158, height: 65 }} 
                                            source={{ uri: bimbi }}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Bimbi */}
          
                        </Col>
                    </Grid>  
                    <View style={{ marginBottom: 100 }}></View>  
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button 
                            onPress={() =>
                                Alert.alert(
                                    '¿COMO JUGAR?',
                                    '\n 1.- Respondé la mayor cantidad de trivias de manera correcta para sumar chances en los sorteos de cada marca. \n \n 2.- Cada 3 respuestas correctas consecutivas, ganás 1 chance para el sorteo del premio que elegiste.',
                                    [
                                        {text: 'Cerrar'},
                                    ],
                                    { cancelable: false }
                                  )}
                        >
                            <Text style={{ color: 'white', fontWeight: '800' }}>¿COMO JUGAR?</Text>
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        ...Platform.select({
            ios: {
                marginTop: 15
            },
            android: {
                marginTop: 15
            }
        }),
    },
    textoElegi: {
        fontSize: 16,
        color: '#DB0A88',
        padding: 10,
        textAlign: 'center'
    },
    textoToca: {
        fontSize: 14,
        color: '#733596',
        fontWeight: '800',
        textAlign: 'center'
    },
    Btn1: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Ewe: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Graco: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Estrella: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Farmx: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    AuloGelio: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    liliana: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 4
    },
    Bimbi: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Silfab: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Nuk: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Pie: {
        backgroundColor: '#DB0A88'
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

export default AuloBrand19;