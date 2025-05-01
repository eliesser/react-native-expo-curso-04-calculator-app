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

  const lastOperation = useRef<EOperator | null>(null);

  useEffect(() => {
    setFormula(number)
  }, [number]);

  const buildNumber = (numberString: string) => {
    console.log({ numberString });
  }

  return {
    // Props
    formula,
    number,
    previousNumber,

    // Methods
    buildNumber,
  }
}
