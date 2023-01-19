import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';

import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const { 
    littleNumber, 
    number, 
    calculate, 
    clear, 
    addSustract, 
    btnDel, 
    btnAdd, 
    btnSplit, 
    btnSubtract,
    btnMultiply, 
    printNumber 
  }  = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {
        ( littleNumber !== '0' ) && (
          <Text style={styles.resultLittle}>{ littleNumber }</Text>
          )
      }
      <Text 
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{ number }</Text>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>

        <ButtonCalc text="C" color="#9B9B9B" action={clear}/>
        <ButtonCalc text="+/-" color="#9B9B9B" action={addSustract}/>
        <ButtonCalc text="del" color="#9B9B9B" action={btnDel}/>
        <ButtonCalc text="/" color="#FF9427" action={btnSplit}/>
        
        {/* #2D2D2D Gris Oscuro */}
        {/* #FF9427 Naranja */}

      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="7" action={printNumber}/>
        <ButtonCalc text="8" action={printNumber}/>
        <ButtonCalc text="9" action={printNumber}/>
        <ButtonCalc text="x" color="#FF9427" action={btnMultiply}/>
      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="4" action={printNumber}/>
        <ButtonCalc text="5" action={printNumber}/>
        <ButtonCalc text="6" action={printNumber}/>
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract}/>
      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="1" action={printNumber}/>
        <ButtonCalc text="2" action={printNumber}/>
        <ButtonCalc text="3" action={printNumber}/>
        <ButtonCalc text="+" color="#FF9427" action={btnAdd}/>
      </View>

      {/* Btn Rows */}
      <View style={styles.btnContainer}>
        <ButtonCalc text="0" ancho action={printNumber}/>
        <ButtonCalc text="." action={printNumber}/>
        <ButtonCalc text="=" color="#FF9427" action={calculate}/>
      </View>

    </View>
  )
}
