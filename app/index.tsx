import { Colors } from '@/constants/Colors'
import { View, Text } from 'react-native'

const CalculatorApp = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontFamily: 'SpaceMono',
          color: Colors.textPrimary,
        }}
      >
        CalculatorApp
      </Text>
    </View>
  )
}

export default CalculatorApp