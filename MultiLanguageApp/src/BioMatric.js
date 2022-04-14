import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import TouchID from "react-native-touch-id";
export default function BioMatric() {

    const [isAuth, setIsAuth] = useState(false)
    const optionalConfigObject = {
        title: 'Authentication Required', // Android
        imageColor: '#e00606', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    const handleBiometric = () => {

        TouchID.isSupported(optionalConfigObject)
            .then(biometricType => {
                if (biometricType === 'FaceID') {
                    console.log('FaceID is supported.');
                }
                else {
                    console.log('TouchID is supported.');
                    if (isAuth) {
                        return alert('Already Authenticated..!');
                    }
                    TouchID.authenticate('', optionalConfigObject)
                        .then(success => {
                            console.log('Success', success)
                            setIsAuth(success)
                            alert("authenticated Successfully")

                        })
                        .catch(err => {
                            alert(err)
                        })
                }
            })
            .catch(error => {
                // Failure code
                alert(error);
            });
    }
    // console.log(isAuth)
    // useEffect(() => {
    //   handleBiometric();
    // }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <TouchableOpacity style={{ backgroundColor: '#C0C0C0', borderWidth: 1, borderRadius: 10 }} onPress={handleBiometric}>
                <Text style={styles.text}> Authenticate with Touch ID</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight: 'bold',
        margin: 10,
        fontSize: 20,
    },

})