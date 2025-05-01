import { View } from 'react-native'

import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
  const {
    formula,
    previousNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        {
          formula === previousNumber ?
            <ThemeText variant='h2'> </ThemeText>
            :
            <ThemeText variant='h2'>{previousNumber}</ThemeText>
        }
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='C' onPress={clean} color={Colors.lightGray} blackText />
        <CalculatorButton label='+/-' onPress={toggleSign} color={Colors.lightGray} blackText />
        <CalculatorButton label='del' onPress={deleteLast} color={Colors.lightGray} blackText />
        <CalculatorButton label='%' onPress={divideOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => { buildNumber('7') }} />
        <CalculatorButton label='8' onPress={() => { buildNumber('8') }} />
        <CalculatorButton label='9' onPress={() => { buildNumber('9') }} />
        <CalculatorButton label='X' onPress={multiplyOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => { buildNumber('4') }} />
        <CalculatorButton label='5' onPress={() => { buildNumber('5') }} />
        <CalculatorButton label='6' onPress={() => { buildNumber('6') }} />
        <CalculatorButton label='-' onPress={subtractOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => { buildNumber('1') }} />
        <CalculatorButton label='2' onPress={() => { buildNumber('2') }} />
        <CalculatorButton label='3' onPress={() => { buildNumber('3') }} />
        <CalculatorButton label='+' onPress={addOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='0' onPress={() => { buildNumber('0') }} doubleSize />
        <CalculatorButton label='.' onPress={() => { buildNumber('.') }} />
        <CalculatorButton label='=' onPress={() => { console.log('=') }} color={Colors.orange} />
      </View>
    </View>
  )
}

export default CalculatorApp