import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useEffect}  from 'react'

export default function SplashScreen({navigation}) {

    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('CalculateScreen')
        },1500);
        }, []);
    return (
        <View style={styles.container}>
            <View style={{borderWidth:5,borderRadius:10,borderColor:'#0b0a24',alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../assets/bmi100.png')} resizeMode={'stretch'} style={styles.logo}/>
                <Text style={[styles.genderText, { fontSize: 25, color: '#0b0a24' }]}>BMI Calculator</Text>
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
        width:150,
        height:150

    },
    genderText: {
        color: '#8d8e99',
        margin: 7,
        fontSize: 20,
        fontWeight: 'bold'
      },
})