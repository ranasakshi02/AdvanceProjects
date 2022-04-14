import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('GameScreen')
        },1500);
        }, []);

    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 5, borderRadius: 10, borderColor: '#0b0a24', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/tictactoe100.png')} resizeMode={'stretch'} style={styles.logo} />
                <Text style={[styles.text, { fontSize: 25, color: '#0b0a24' }]}>Tic-Tac-Toe</Text>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FE0049'

    },
    logo: {
        width: 150,
        height: 150,
        marginTop:10,
        marginLeft:10,
        marginRight:10

    },
    text: {
        color: '#8d8e99',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold'
    },
})