import { View, Text } from 'react-native'

import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult}>50 X 50</Text>
      <Text style={globalStyles.subResult}>250</Text>
    </View>
  )
}

export default CalculatorApp