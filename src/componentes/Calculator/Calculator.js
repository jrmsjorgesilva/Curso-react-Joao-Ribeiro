import React, { useState, useEffect } from 'react'
import Formula from './Formula'
import Output from './Output'
import CalculatorButtons from './CalculatorButtons'
import './Calculator.css'

const Calculator = () => {

  // VARS
  const isOperator = /[x/+‑]/;
  const endsWithOperator = /[x+‑/]$/;
  const endsWithNegativeSign = /\d[x/+‑]{1}‑$/;

  // USE STATES
  const [currentVal, setCurrentVal] = useState(() => 0);
  const [prevVal, setPrevVal] = useState(() => 0);
  const [formula, setFormula] = useState(() => '');
  const [currentSign, setCurrentSign] = useState(() => 'pos');
  const [lastClicked, setLastClicked] = useState(() => '');

  // &&&&&&&&&&&&&&&&&&&&&&&&
  // &&&&&& FUNCTIONS &&&&&&&
  // &&&&&&&&&&&&&&&&&&&&&&&&

  const maxDigitWarning = () => {
    setCurrentVal('Digit Limit Met');
    setPrevVal(currentVal);
    setTimeout(() => {
      setCurrentVal(prevVal);
    }, 2000);

  }

  const handleEvaluate = () => {
    if (!currentVal.includes('Limit')) {
      let expression = formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, '*')
        .replace(/‑/g, '-')
        .replace('--', '+0+0+0+0+0+0+');
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: answer.toString(),
        formula:
          expression
            .replace(/\*/g, '⋅')
            .replace(/-/g, '‑')
            .replace('+0+0+0+0+0+0+', '‑-')
            .replace(/(x|\/|\+)‑/, '$1-')
            .replace(/^‑/, '-') +
          '=' +
          answer,
        prevVal: answer,
        evaluated: true
      });
    }
  }

  const handleOperators = (e) => {
    if (!this.state.currentVal.includes('Limit')) {
      const value = e.target.value;
      const { formula, prevVal, evaluated } = this.state;
      this.setState({ currentVal: value, evaluated: false });
      if (evaluated) {
        this.setState({ formula: prevVal + value });
      } else if (!endsWithOperator.test(formula)) {
        this.setState({
          prevVal: formula,
          formula: formula + value
        });
      } else if (!endsWithNegativeSign.test(formula)) {
        this.setState({
          formula:
            (endsWithNegativeSign.test(formula + value) ? formula : prevVal) +
            value
        });
      } else if (value !== '‑') {
        this.setState({
          formula: prevVal + value
        });
      }
    }
  }

  const handleNumbers = (e) => {
    if (!this.state.currentVal.includes('Limit')) {
      const { currentVal, formula, evaluated } = this.state;
      const value = e.target.value;
      this.setState({ evaluated: false });
      if (currentVal.length > 21) {
        this.maxDigitWarning();
      } else if (evaluated) {
        this.setState({
          currentVal: value,
          formula: value !== '0' ? value : ''
        });
      } else {
        this.setState({
          currentVal:
            currentVal === '0' || isOperator.test(currentVal)
              ? value
              : currentVal + value,
          formula:
            currentVal === '0' && value === '0'
              ? formula === ''
                ? value
                : formula
              : /([^.0-9]0|^0)$/.test(formula)
              ? formula.slice(0, -1) + value
              : formula + value
        });
      }
    }
  }

  const handleDecimal = () => {
    if (this.state.evaluated === true) {
      this.setState({
        currentVal: '0.',
        formula: '0.',
        evaluated: false
      });
    } else if (
      !this.state.currentVal.includes('.') &&
      !this.state.currentVal.includes('Limit')
    ) {
      this.setState({ evaluated: false });
      if (this.state.currentVal.length > 21) {
        this.maxDigitWarning();
      } else if (
        endsWithOperator.test(this.state.formula) ||
        (this.state.currentVal === '0' && this.state.formula === '')
      ) {
        this.setState({
          currentVal: '0.',
          formula: this.state.formula + '0.'
        });
      } else {
        this.setState({
          currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
          formula: this.state.formula + '.'
        });
      }
    }
  }

  const initialize = () => {
    this.setState({
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: '',
      evaluated: false
    });
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&
  // &&&& FIM FUNCTIONS &&&&&
  // &&&&&&&&&&&&&&&&&&&&&&&&
  

  return (
    <div className='app__container center'>
        <h1 className='app__title'>HAL 9000</h1>
        <div className="calculator">
          <Formula formula={formula.replace(/x/g, '⋅')} />
          <Output currentValue={currentVal} />
          <CalculatorButtons
            decimal={'handleDecimal'}
            evaluate={'handleEvaluate'}
            initialize={'initialize'}
            numbers={'handleNumbers'}
            operators={'handleOperators'}
          />
        </div>
    </div>
  )
}

export default Calculator