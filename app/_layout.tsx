import { Slot } from 'expo-router';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) return null;

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />

      <StatusBar style="light" />
    </View>
  )
}

export default RootLayout;