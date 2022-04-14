import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as RNLocalize from "react-native-localize";
import { useTranslation } from 'react-i18next';
export default function Languages({ navigation }) {
    const { t, i18n } = useTranslation()
    const array = [
        {
            shortForm: 'hi', longForm: 'Hindi'
        },
        {
            shortForm: 'en', longForm: 'English'
        },
        {
            shortForm: 'mr', longForm: 'Marathi'
        },
        {
            shortForm: 'fr', longForm: 'French'
        },

    ]
    let data1 = [];
    let ref = [];

    array.map((item) => {
        console.log(item.longForm)
        data1.push(item.longForm)
        ref.push(item.shortForm)


    })
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
            <View style={{ backgroundColor: '#00000008', marginTop: 10, width: 350 }}>
                <Text style={[styles.text, { color: 'red', marginLeft: 10, marginTop: 10 }]}>{t('welcomeText')}[This is for localize Language through system settings]</Text>
            </View>
            <Text style={styles.text}>Please Select Preffered Language..!</Text>
            <Image
                style={styles.image}
                resizeMode='stretch'
                source={require('../assets/language.png')}
            />

            <FlatList
                data={data1}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                renderItem={({ item }) => (

                    <TouchableOpacity style={styles.item}
                        onPress={() => {
                            { navigation.navigate('StringContent', { 'item': item, 'langCode': item == 'Marathi' ? (item[0] + item[2]).toLowerCase() : item.slice(0, 2).toLowerCase() }) }
                            console.log(item.slice(0, 2).toLowerCase())
                            console.log((item[0] + item[2]).toLowerCase())
                        }

                        }>
                        <Text style={styles.listTitle}>
                            {item}
                        </Text>
                    </TouchableOpacity>


                )}
            />

            <TouchableOpacity style={{ backgroundColor: '#C0C0C0', margin: 20}} onPress={()=>{navigation.navigate('BioMatric')}}>
                <Text style={[styles.text,{marginTop:10,margin:10}]}>Click For Bio-Matric Demo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 20,

    },
    image: {
        width: '40%',
        height: '20%',
        margin: 10
    },
    listTitle: {
        fontSize: 18,
        color: '#0F0B2D',
        flex: 1,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#0000000d',
        alignItems: 'center',
        marginBottom: 5,
        paddingLeft: 16,
        paddingVertical: 21,
        paddingRight: 20,
        borderRadius: 15
    },
})