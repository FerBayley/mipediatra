import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Form, Item, Input, Label, Icon } from 'native-base';
import {
    View,
    Text,
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        
    }


    static navigationOptions = {
        header: null
      };   

    render() {
        return (

            <Container>
                <Content>

                    <View style={{ height: 100, flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Text style={{ marginTop: 30, padding: 20 }}>Volver</Text>
                        </TouchableOpacity>
                    </View>

                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre y Apellido</Label>
                            <Input onChangeText={(text) => this.setState({ email: text })} 
                                value={this.state.email}/>
                        </Item>   

                        <Item floatingLabel last>
                            <Label>Contraseña</Label>
                            <Input onChangeText={(text) => this.setState({ password: text })} 
                                secureTextEntry={true}
                                value={this.state.password} />
                        </Item>

                        <View style={{ padding: 15 }}>
                            <Button full style={styles.btnIngresar} onPress={() => this.createUser(this.state.email, this.state.password)}>
                                <Text style={{ 
                                    textAlign: 'center', 
                                    fontWeight: '700', 
                                    color: '#fff', 
                                    fontSize: 17, 
                                    fontWeight: '700' }}>
                                    Crear cuenta
                                </Text>
                            </Button>   
                        </View>
                    </Form>
                </Content>
            </Container>

            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorBotones: {
        color: '#fff'
    },    
    btnIngresar: {
        backgroundColor: '#DB0A88',
        marginTop: 10,
        borderRadius: 4,
        height: 55
    },
    btnText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
        color: 'grey'
    },
    btnTextBtn: {
        color: '#fff'
    },
    btnTextBtn: {
        color: '#fff',
        fontSize: 19
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderColor: 'red'
    },
    ingresa: {
        color: 'grey',
        marginBottom: 5,
        textAlign: 'center'
    },
    label: {
        color: '#733596',
        fontSize: 19
    }
});