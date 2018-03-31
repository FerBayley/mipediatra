import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, StatusBar } from 'react-native'

class Loading extends Component {

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false
      };

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('BrandScreen')
        }, 5000)
    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    barStyle="dark-content"
                />

                <ActivityIndicator size="large" color="#DB0A88" />
                <Text style={{ color: '#DB0A88', marginTop: 10 }}>CARGANDO</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loading;