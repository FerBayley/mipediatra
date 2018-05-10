import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class Sign extends Component {

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
      };

    render() {
        return(
            <View style={ styles.container }>
                <Text>Componente funcionando</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});