import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CalculateScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0)
  const [weight, setWeight] = useState(50)
  const [age, setAge] = useState(19)
  const [height, setHeight] = useState(0)
  const [bmi, setBMI] = useState()

  const weightPlus = () => {
    var count_weight = weight;
    console.log(count_weight)
    setWeight(count_weight + 1);
    console.log(weight)

  }
  const weightMinus = () => {
    var count_weight = weight;
    console.log(count_weight)
    setWeight(count_weight - 1);
    console.log(weight)
  }
  const agePlus = () => {
    var count_age = age;
    console.log(count_age)
    setAge(count_age + 1);
    console.log(age)

  }
  const ageMinus = () => {
    var count_age = age;
    console.log(count_age)
    setAge(count_age - 1);
    console.log(age)
  }
  console.log(height, weight, age)
  const calculateBMI = () => {
    if (height) {
      var bmi = weight / (height * height);
      setBMI(bmi)
      navigation.navigate('ResultScreen', { 'bmi': bmi.toFixed(2), 'age': age })
    }
    else {
      alert("Enter Height First")
    }

  }


  return (
    <ScrollView style={{ backgroundColor: '#0b0a24' }} >
      <StatusBar backgroundColor={'#0b0a24'} barStyle='light-content' />
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 15 }}>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>BMI Calculator</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly' }}>
          <TouchableOpacity style={[styles.genderView, { borderColor: index == 1 ? '#FE0049' : '#11122a', borderWidth: 2 }]} onPress={() => setIndex(1)}>
            <Image source={require('../assets/imale100.png')} resizeMode='stretch' style={[styles.genderImage, {}]} />
            <Text style={[styles.genderText, {}]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.genderView, { borderColor: index == 2 ? '#FE0049' : '#11122a', borderWidth: 2 }]} onPress={() => setIndex(2)}>
            <Image source={require('../assets/ifemale100.png')} resizeMode='stretch' style={[styles.genderImage, {}]} />
            <Text style={[styles.genderText, {}]}>Female</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.heighView, {}]}>
          <Text style={[styles.genderText, { fontSize: 25, marginTop: 5, color: '#8D8E99' }]}>Height (cm)</Text>
          <TextInput style={styles.input}
            keyboardType='number-pad'
            onChangeText={(value) => { setHeight(value / 100) }}

          />
        </View>

        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly' }}>
          <View style={[styles.genderView, {}]}>
            <Text style={[styles.genderText, { color: '#8D8E99', fontWeight: 'bold', marginTop: 10 }]}>Weight(kg)</Text>
            <TextInput style={[styles.input, { width: 150, marginTop: 15 }]}
              keyboardType='number-pad'
              value={weight.toString()}
              editable={false}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, width: 170, alignItems: 'center', }}>
              <TouchableOpacity style={[styles.plusMinus, {}]} activeOpacity={0.5} onPress={weightMinus} >
                <Image source={require('../assets/minus.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.plusMinus, {}]} activeOpacity={0.5} onPress={weightPlus}>

                <Image source={require('../assets/plus.png')} />
              </TouchableOpacity>


            </View>
          </View>


          <View style={[styles.genderView, {}]}>
            <Text style={[styles.genderText, { color: '#8D8E99', fontWeight: 'bold', marginTop: 10 }]}>Age</Text>
            <TextInput style={[styles.input, { width: 150, marginTop: 15 }]}
              keyboardType='number-pad'
              value={age.toString()}
              editable={false}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, width: 170, alignItems: 'center' }}>
              <TouchableOpacity style={[styles.plusMinus, {}]} activeOpacity={0.5} onPress={ageMinus}>
                <Image source={require('../assets/minus.png')} />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.plusMinus, {}]} activeOpacity={0.5} onPress={agePlus}>

                <Image source={require('../assets/plus.png')} />
              </TouchableOpacity>

            </View>
          </View>
        </View>

        <View style={[styles.calcuateBtnView, { }]}>
          <TouchableOpacity style={[styles.calcuateBtn, { }]} onPress={calculateBMI}>
            <Text style={[styles.genderText, { fontSize: 20, marginTop: 10, marginBottom: 10, color: '#fff', fontWeight: 'bold' }]}>CALCULATE BMI</Text>
          </TouchableOpacity>


        </View>
      </View>
      {/* #1c1d34   #8d8e99 #0b0a24 #6200ee  #11122a  #FE0049*/}

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  genderView: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#11122a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  genderImage: {
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    width: 110,
    height: 110
  },
  genderText: {
    color: '#8d8e99',
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '700'
  },
  heighView: {
    marginTop: 20,
    marginLeft: 22,
    marginRight: 22,
    borderRadius: 10,
    backgroundColor: '#11122a',
    height: 150,
    alignItems: 'center'
  },
  input: {
    //backgroundColor:'#fff',
    height: 70,
    width: 200,
    borderColor: '#0b0a24',
    borderWidth: 2,
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  plusMinus: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 60,
    backgroundColor: '#1c1d34',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
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

});

export default CalculateScreen;
