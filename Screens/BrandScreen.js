import { Container, Header, Content, Footer, FooterTab, Button, Row, Grid, Col, Icon, Left, Right, Body, Title } from 'native-base';
import React, { Component } from "react";
import { Constants } from 'expo';
import Expo from 'expo';
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
import { BlurView } from 'expo';


const uri = 'http://ideaswhite.com/mipediatra/img/mp_logo.png';

class BrandScreen extends Component {

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
                        <BlurView>
                            <Image style={{ width: 230, height: 46 }} source={{ uri }} />
                        </BlurView>
                        <Text style={styles.textoElegi}>Elegí con qué marca querés empezar a responder las trivias.</Text>
                        <Text style={styles.textoToca}>Tocá un logo mira el premio y comenzar a jugar</Text>
                    </View>

                    <Grid style={styles.Griden}>
                        <Col style={{ height: 400 }}>
                            {/* Trivia Estrella */}
                            <TouchableOpacity style={styles.Btn4}
                                onPress={() => this.props.navigation.navigate('PremioEstrella')}>
                                {/* Adjust the tint and intensity */}
                                <BlurView tint="light" intensity={50}>
                                    <Image 
                                        style={{ width: 130, height: 42 }} source={{uri: 'http://ideaswhite.com/mipediatra/img/estrella-logo.jpg'}}
                                    />
                                </BlurView>
                            </TouchableOpacity>
                            {/* Trivia Estrella */}       

                            {/* Trivia Gracco */}   
                            <TouchableOpacity style={styles.Btn3}
                                onPress={() => this.props.navigation.navigate('PremioGraco')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 132, height: 44 }} source={{uri: 'http://ideaswhite.com/mipediatra/img/graco-loco.jpg'}}
                                         />
                                    </BlurView>
                            </TouchableOpacity>   
                            {/* Trivia Gracco */}   

                            {/* Trivia Farmx */}
                            <TouchableOpacity style={styles.Btn5}
                                onPress={() => this.props.navigation.navigate('PremioFarmx')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 159, height: 66 }} source={{uri: 'http://ideaswhite.com/mipediatra/clientes/farmx/farmx.png'}}
                                         />
                                    </BlurView>
                            </TouchableOpacity> 
                            {/* Trivia Farmx */}    

                            {/* Trivia AuloGelio */}   
                            <TouchableOpacity style={styles.Btn6}
                                onPress={() => this.props.navigation.navigate('PremioAuloGelio')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 158, height: 65 }} source={{uri: 'http://ideaswhite.com/mipediatra/clientes/aulo/aulo.png'}}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia AuloGelio */}
                        </Col>

                        <Col style={{ height: 400 }}>
                            {/* Trivia Ewe */}
                            <TouchableOpacity style={styles.Btn2}
                                onPress={() => this.props.navigation.navigate('PremioEwe')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 106, height: 57 }} source={{uri: 'http://ideaswhite.com/mipediatra/img/ewe-logo.jpg'}}
                                         />
                                    </BlurView>
                            </TouchableOpacity>
                            {/* Trivia Ewe */}

                            {/* Trivia Bimbi */}   
                            <TouchableOpacity style={styles.Btn6}
                                onPress={() => this.props.navigation.navigate('PremioBimbi')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 158, height: 65 }} source={{uri: 'http://ideaswhite.com/mipediatra/clientes/bimbi/bimbi.png'}}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Bimbi */}   

                            {/* Trivia Silfab */}   
                            <TouchableOpacity style={styles.Btn6}
                                onPress={() => this.props.navigation.navigate('PremioSilfab')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 132, height: 44 }} source={{uri: 'http://ideaswhite.com/mipediatra/img/logo-silfab.png'}}
                                         />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Silfab */}     

                            {/* Trivia Nuk */}   
                            <TouchableOpacity style={styles.Btn6}
                                onPress={() => this.props.navigation.navigate('PremioNuk')}>
                                    {/* Adjust the tint and intensity */}
                                    <BlurView tint="light" intensity={50}>
                                        <Image 
                                            style={{ width: 158, height: 65 }} source={{uri: 'http://ideaswhite.com/mipediatra/clientes/nuk/nuk.png'}}
                                        />
                                    </BlurView>
                            </TouchableOpacity>  
                            {/* Trivia Nuk */}     
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
                                    '1.- Respondé la mayor cantidad de trivias de manera correcta para sumar chances en los sorteos de cada marca. 2.- Cada 3 respuestas correctas consecutivas ganás 1 chance para el sorteo del premio que elegiste.',
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
        marginTop: 20,
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
        fontSize: 21,
        color: '#DB0A88',
        padding: 20,
        textAlign: 'center'
    },
    textoToca: {
        fontSize: 17,
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
        marginTop: 40,
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

export default BrandScreen;