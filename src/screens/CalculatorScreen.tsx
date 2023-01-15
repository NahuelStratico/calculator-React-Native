import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

  const [ littleNumber, setLittleNumber ] = useState('0');
  const [ number, setNumber ] = useState('1');

  const clear = () => {
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


  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultLittle}>{ littleNumber }</Text>
      <Text 
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{ number }</Text>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>

        <ButtonCalc text="C" color="#9B9B9B" action={clear}/>
        <ButtonCalc text="+/-" color="#9B9B9B" action={addSustract}/>
        <ButtonCalc text="del" color="#9B9B9B" action={clear}/>
        <ButtonCalc text="/" color="#FF9427" action={clear}/>
        
        {/* #2D2D2D Gris Oscuro */}
        {/* #FF9427 Naranja */}

      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="7" action={printNumber}/>
        <ButtonCalc text="8" action={printNumber}/>
        <ButtonCalc text="9" action={printNumber}/>
        <ButtonCalc text="x" color="#FF9427" action={clear}/>
      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="4" action={printNumber}/>
        <ButtonCalc text="5" action={printNumber}/>
        <ButtonCalc text="6" action={printNumber}/>
        <ButtonCalc text="-" color="#FF9427" action={clear}/>
      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="1" action={printNumber}/>
        <ButtonCalc text="2" action={printNumber}/>
        <ButtonCalc text="3" action={printNumber}/>
        <ButtonCalc text="+" color="#FF9427" action={clear}/>
      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="0" ancho action={printNumber}/>
        <ButtonCalc text="." action={printNumber}/>
        <ButtonCalc text="=" color="#FF9427" action={clear}/>
      </View>

    </View>
  )
}
