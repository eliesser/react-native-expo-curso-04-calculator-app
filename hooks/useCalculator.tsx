import { useEffect, useRef, useState } from "react";

enum EOperator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '%',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0');

  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<EOperator>();

  useEffect(() => {
    setFormula(number)
  }, [number]);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    setFormula('0');

    lastOperation.current = undefined;
  }

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  }

  const deleteLast = () => {
    if (number.length === 2 && number.includes('-'))
      return setNumber('0');
    else if (number.length === 1)
      return setNumber('0');

    setNumber(number.slice(0, -1));
  }

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }

    setNumber(number + numberString);
  }

  return {
    // Props
    formula,
    number,
    previousNumber,

    // Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast
  }
}
