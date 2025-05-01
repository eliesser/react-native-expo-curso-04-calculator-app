import { View, Platform } from 'react-native'
import { useEffect } from 'react'

import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar'

import { globalStyles } from '@/styles/global-styles'

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('black')
        .catch(() => {
          // Mute the error as it is expected on iOS
        })
    }
  }, [])

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="light" />
    </View>
  )
}

export default RootLayout