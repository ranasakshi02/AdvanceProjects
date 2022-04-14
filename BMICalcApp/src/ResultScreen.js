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

import React, { useEffect, useState } from 'react'

export default function ResultScreen({ navigation, route }) {
  const { bmi, age } = route.params;
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('')
  console.log(bmi, age)
  useEffect(() => {
    checkCategory(bmi)
    checkCondition(bmi)
  }, [])

  const checkCategory = (result) => {
    if (result < 15) {
      setCategory("very severely underweight")
    }
    else if (result >= 15 && result <= 16) {
      setCategory("severely underweight")
    } else if (result > 16 && result <= 18.5) {
      setCategory("underweight")
    } else if (result > 18.5 && result <= 25) {
      setCategory("normal (healthy weight)")
    } else if (result > 25 && result <= 30) {
      setCategory("overweight")
    } else if (result > 30 && result <= 35) {
      setCategory("moderately obese")
    } else if (result > 35 && result <= 40) {
      setCategory("severely obese")
    } else {
      setCategory("very severely obese")
    }
  }
console.log('category',category)

  const checkCondition = (result) => {
    if (result < 15) {
      setCondition("Severe Thinness")
    }
    else if (result >= 15 && result <= 16) {
      setCondition("Moderate Thinness")
    } else if (result > 16 && result <= 18.5) {
      setCondition("Mild Thinness")
    } else if (result > 18.5 && result <= 25) {
      setCondition("Normal")
    } else if (result > 25 && result <= 30) {
      setCondition("Overweight")
    } else if (result > 30 && result <= 35) {
      setCondition("Obese Class I")
    } else if (result > 35 && result <= 40) {
      setCondition("Obese Class II")
    } else {
      setCondition("Obese Class III")
    }
  }
  console.log('condition',condition)
  return (
    <ScrollView style={{ backgroundColor: '#0b0a24' }} >
      <StatusBar backgroundColor={'#0b0a24'} barStyle='light-content' />
      <View style={styles.container}>

        <View style={{ marginBottom: 10, marginTop: 20, marginLeft: 25 }}>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>Your Result</Text>
        </View>

        <View style={[styles.heighView, {}]}>
          <Text style={[styles.genderText, { fontSize: 20, marginTop: 10, color: '#5ADC65' }]}>{condition}</Text>
          <Text style={{ color: '#fff', fontSize: 50, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>
            {bmi}
          </Text>
          <Text style={[styles.genderText, { fontSize: 21 }]}>Normal BMI Range:</Text>
          <Text style={[styles.genderText, { color: '#fff' }]}>18.5-25 kg/m2</Text>
          <Text style={[styles.genderText, { marginTop: 15, color: '#FE0049' }]}>Your Age:</Text>
          <Text style={[styles.genderText, { color: '#fff' }]}>{age}</Text>
          <Text style={[styles.genderText, { color: '#fff', marginTop: 10, marginBottom: 15 }]}>{category}</Text>
        </View>

        <View style={[styles.calcuateBtnView, { marginTop: 35, marginBottom: 25, marginLeft: 22, marginRight: 22, }]}>
          <TouchableOpacity style={[styles.calcuateBtn, { backgroundColor: '#FE0049', margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }]} onPress={() => { navigation.goBack() }}>
            <Text style={[styles.genderText, { fontSize: 20, marginTop: 10, marginBottom: 10, color: '#fff', fontWeight: 'bold' }]}>RECALCULATE YOUR BMI</Text>
          </TouchableOpacity>


        </View>
      </View>
      {/* #1c1d34   #8d8e99 #0b0a24 #6200ee  #11122a  */}

    </ScrollView>
  )
}

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

  },
  calcuateBtn: {

  }

});