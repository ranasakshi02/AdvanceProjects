import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';


export default function StringContent({ route }) {
  const { item, langCode } = route.params;
  const { t, i18n } = useTranslation()
  console.log('langCode', langCode)
  useEffect(() => {
    i18n.changeLanguage(langCode)
  }, [])
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Your Selected Language: {item} </Text>
      <Text style={styles.subtitle}>{t("welcomeText")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#0F0B2D',
    fontWeight: 'bold'
  },
  subtitle: {
    margin: 20,
    fontSize: 18,
    color: '#0F0B2D',
    fontWeight: '600'

  },
})
