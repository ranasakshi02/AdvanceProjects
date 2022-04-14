import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
export default function Box({ no, boxInfo, chance, winner }) {

    const { isXChance, setIsXChance } = chance;
    const { boxes, setBoxes } = boxInfo;
    const player = isXChance ? 'X' : 'O';

    return (
        <TouchableOpacity activeOpacity={0.2}
        onPress={()=>
            {
                if(boxes[no]===null && winner===null)
                {
                    setBoxes((prevBoxInfo)=>{
                        prevBoxInfo[no]=player
                        return prevBoxInfo;
                    });
                    setIsXChance((prevState)=>!prevState)
                }

            }
        }
        >

            {boxes[no] !== null ?
                <View style={styles.boxView}>
                    {boxes[no]=== 'X'?
                    <Entypo name='cross' size={70} color={'#FE0049'}/>
                    :<Entypo name='circle' size={60} color={'#0b0a24'}/>}
                </View>
            :
                <View style={styles.boxView}>

                </View>}

        </TouchableOpacity>
    )
   
    
}

const styles = StyleSheet.create({
    // square: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#1b1b1b',
    //     borderWidth: 1, // solid
    //     borderColor: 'transparent',
    //     margin: 10,
    //     borderRadius: 5,
    //     lineHeight: 34,
    //     marginRight: -1,
    //     marginTop: -1,
    //     padding: 0,
    //     width: 100,
    //     height: 100,
    // },
    // char: {
    //     flexDirection: 'row',
    //     fontSize: 75,
    //     fontWeight: '700',
    //     color: '#fff',
    // },
    boxView: {
        minWidth: 110,
        minHeight: 110,
        borderWidth: 2,
        borderColor: '#FE0049',
        justifyContent: 'center',
        alignItems: 'center',
    }
})