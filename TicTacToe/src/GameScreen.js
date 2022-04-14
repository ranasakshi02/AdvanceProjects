import { StatusBar, StyleSheet, Text, View, BackHandler, Alert, Vibration, TouchableOpacity, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from './component/Box';
import Ionicons from "react-native-vector-icons/Ionicons";
LogBox.ignoreAllLogs()
export default function GameScreen() {

    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [isXChance, setIsXChance] = useState(true)
    const [winner, setWinner] = useState(null)
    const [isClicked, setIsClicked] = useState(false)

    function playBox(no) {
        return (<Box
            no={no}
            boxInfo={{ boxes, setBoxes }}
            chance={{ isXChance, setIsXChance }}
            winner={winner} />

        )

    }

    const winPosition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    function calculateWin() {
        for (var i = 0; i < winPosition.length; i++) {
            if (boxes[winPosition[i][0]] !== null &&
                boxes[winPosition[i][0]] === boxes[winPosition[i][1]]
                && boxes[winPosition[i][0]] === boxes[winPosition[i][2]]) {
                setWinner(boxes[winPosition[i][0]]);
                return;
            }


        }


    }
    function reSetValue() {
        setWinner(null)
        setBoxes(Array(9).fill(null));
        setIsXChance(true)

    }
    useEffect(() => {
        const backAction = () => {
            Vibration.vibrate(50);
            Alert.alert('Hold on!', 'Are you sure you want to exit?', [
                {
                    text: 'Cancel',
                    onPress: () => null,

                    style: 'cancel',
                },

                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
    useEffect(() => {
        calculateWin()
    }, [isXChance])



    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#FE0049'} />
            {isClicked ?
                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 20 }}>
                        {

                            winner !== null ?
                                <View>
                                    <Text style={[styles.text, { fontSize: 25, }]}>PLAYER {winner} WON</Text>
                                    {alert("Player" + ' ' + winner + ' ' + 'Won the Game')}
                                </View>

                                :
                                <Text style={[styles.text, { fontSize: 25, }]}>PLAYER {isXChance ? 'X' : 'O'}'s TURN</Text>

                        }
                        <Ionicons
                            style={styles.resetIcon}
                            name="reload-circle"
                            size={38}
                            color="white"
                            onPress={reSetValue}
                        />
                    </View>
                    <View style={styles.playBoard}>
                        <View style={styles.rows}>
                            {playBox(0)}
                            {playBox(1)}
                            {playBox(2)}
                        </View>
                        <View style={styles.rows}>
                            {playBox(3)}
                            {playBox(4)}
                            {playBox(5)}
                        </View>
                        <View style={styles.rows}>
                            {playBox(6)}
                            {playBox(7)}
                            {playBox(8)}
                        </View>
                    </View>
                    <>
                        <TouchableOpacity style={[styles.calcuateBtn, {marginTop:20 }]} onPress={() => setIsClicked(false)}>
                            <Text style={[styles.text, { fontSize: 20, marginTop: 10, marginBottom: 10, color: '#fff', fontWeight: 'bold' }]}>New Game</Text>
                        </TouchableOpacity>
                    </>

                </>
                :
                <View>
                    <Text style={styles.text}>
                        Welcome To the Game...!!
                    </Text>
                    <TouchableOpacity style={[styles.calcuateBtn, {}]} onPress={() => setIsClicked(true)}>
                        <Text style={[styles.text, { fontSize: 20, marginTop: 10, marginBottom: 10, color: '#fff', fontWeight: 'bold' }]}>Start The Game</Text>
                    </TouchableOpacity>
                </View>

            }



        </View>
    )
}
{/* #1c1d34   #8d8e99 #0b0a24 #6200ee  #11122a  #FE0049*/ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#323348',
        alignItems: 'center',
        justifyContent: 'center'

    },
    resetIcon: {
        position: 'absolute',
        right: 30,
    },
    text: {
        color: '#fff',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 7,
        fontSize: 25,
        fontWeight: 'bold'
    },
    // board: {
    //     margin: 20,
    //     borderWidth: 10,
    //     borderColor: '#FE0049',
    //     backgroundColor: '#FE0049'
    // },
    // boardRow: {
    //     flexDirection: 'row',
    // },
    playBoard: {
        borderWidth: 8,
        borderRadius: 10,
        borderColor: '#FE0049'
    },
    rows: {
        flexDirection: 'row',
    },
    calcuateBtnView: {
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 22,
        marginRight: 22
    },
    calcuateBtn: {
        backgroundColor: '#FE0049',
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
