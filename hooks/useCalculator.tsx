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
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPreviousNumber(subResult.toString());
  }, [formula]);

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

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setNumber(number.slice(0, -1));
    }

    setPreviousNumber(number);
    setNumber('0');
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = EOperator.divide;
  }

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = EOperator.multiply;
  }

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = EOperator.subtract;
  }

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = EOperator.add;
  }

  const calculateSubResult = () => {
    const [firstValue, operator, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operator) {
      case EOperator.add:
        return num1 + num2;

      case EOperator.subtract:
        return num1 - num2;

      case EOperator.multiply:
        return num1 * num2;

      case EOperator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operator ${operator} not supported`);
    }
  }

  const calculateResult = () => {
    const subResult = calculateSubResult();
    setFormula(subResult.toString());
    lastOperation.current = undefined;
    setPreviousNumber('0')
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
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult
  }
}
