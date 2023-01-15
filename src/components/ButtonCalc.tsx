import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
  action: (numberText:string) => void;
}

export const ButtonCalc = ({text, color = '#2D2D2D', ancho = false, action}: Props) => {
  return (
    <TouchableOpacity
      onPress= {() => action(text)}
    >
      <View style={{
        ...styles.btn,
        backgroundColor: color,
        width: ( ancho === true ) ? 180 : 80
      }}>
        <Text style={{
          ...styles.btnText,
            color: (color === '#9B9B9B') ? 'black' : 'white'
          }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
