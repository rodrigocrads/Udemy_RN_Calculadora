import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.container}>
      <Numero num={props.num1} nome="num1" atualizarValor={props.atualizarValor} />
      <Numero num={props.num2} nome="num2" atualizarValor={props.atualizarValor} />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});