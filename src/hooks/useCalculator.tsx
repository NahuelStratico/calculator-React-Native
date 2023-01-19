import { useState, useRef } from 'react';

enum Operators {
  add, subtract, multiply, split
}

export const useCalculator = () => {

  
  const [ littleNumber, setLittleNumber ] = useState('0');
  const [ number, setNumber ] = useState('0');

  const lastOperation = useRef<Operators>()

  const clear = () => {
    setLittleNumber('0')
    setNumber('0')
  }

  const printNumber = ( numberText:string ) => {

    // don't accept double dot
    if( number.includes('.') && numberText === '.' ) return;

    if( number.startsWith('0') || number.startsWith('-0') ) {
      
      // Decimal dot
      if( numberText === '.' ){
        setNumber( number + numberText);

        // Test if is other zero, and there id dot
      } else if( numberText === '0' && number.includes('.') ) {
        setNumber( number + numberText);

        // Test if is different than zero and don't have dot
      } else if( numberText !== '0' && !number.includes('.') ){
        setNumber( numberText );

        // avoid 0000.0
      } else if( numberText === '0' && !number.includes('.') ){
        setNumber( number );
      } else {
        setNumber( number + numberText );
      }

    }else {
      setNumber( number + numberText )
    }

  }

  const addSustract = () => {
    if( number.includes('-') ){
      setNumber(number.replace('-', ''))
    }else{
      setNumber('-' + number)
    }
  }

  const btnDel = () => {

    if (number.length === 1 || number === `-${number.charAt(number.length - 1)}`) {
      setNumber('0');
    } else {
      setNumber( number.slice(0, -1) );
    }

  }

  const sendLittleNumber = () => {
    if( number.endsWith('.') ){
      setLittleNumber( number.slice(0,-1) )
    }else {
      setLittleNumber( number )
    }
    setNumber('0')
  }

  // Operations
  const btnSplit = () => {
    sendLittleNumber();
    lastOperation.current = Operators.split;
  }

  const btnMultiply = () => {
    sendLittleNumber();
    lastOperation.current = Operators.multiply;
  }

  const btnSubtract = () => {
    sendLittleNumber();
    lastOperation.current = Operators.subtract;
  }

  const btnAdd = () => {
    sendLittleNumber();
    lastOperation.current = Operators.add;
  }

  // Calculate " = "
  const calculate = () => {

    const num1 = Number( number );
    const num2 = Number( littleNumber );

    switch ( lastOperation.current ) {
      case Operators.add:
        setNumber( `${num1 + num2}`);
        break;

      case Operators.multiply:
        setNumber( `${num1 * num2}`);
        break;

      case Operators.split:
        setNumber( `${num2 / num1}`);
        break;

      case Operators.subtract:
        setNumber( `${num2 - num1}`);
        break;
    
    }

    setLittleNumber('0');

  }


  return {
    littleNumber,
    number,
    clear,
    printNumber,
    btnDel,
    btnAdd,
    btnSplit,
    btnMultiply,
    btnSubtract,
    addSustract,
    calculate,
  }
}
