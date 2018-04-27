import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Form, Item, Input, Label, Icon } from 'native-base';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Alert 
} from 'react-native';


export default class Login extends React.Component {

    static navigationOptions = {
        header: null
      };  

    render() {
        return (
            <Container>
                <View style={styles.contenedorForm}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre y Apellido</Label>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                        </Item>

                        <Item floatingLabel>
                            <Label>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                        </Item>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PoliticasMuestra')}>
                                <Text style={{ textAlign: 'center', paddingTop: 20 }}>Acepto las bases y condiciones</Text>
                            </TouchableOpacity>
                            <Button onPress={() => this.props.navigation.navigate('Politicas')}
                                full style={styles.btnIngresar}>
                                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 16 }}>Empezá a jugar</Text>
                            </Button>                            
                    </Form>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    >
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Cancelar acceso</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: '#dd4b39',
        marginTop: 10,
        borderRadius: 4,
        height: 55,
        marginTop: 20
    },
    btnIngresar2: {
        backgroundColor: '#3b5998',
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
    },
    textoBtnAcces: {
        textAlign: 'center', 
        fontWeight: '700', 
        color: '#fff', 
        fontSize: 17, 
        fontWeight: '700'
    },
    contenedorForm: {
        padding: 10,
        marginTop: 50
    }
});