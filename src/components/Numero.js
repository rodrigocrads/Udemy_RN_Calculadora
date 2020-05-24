import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default props => (
  <TextInput
    style={styles.campoNumero}
    value={props.num}
    onChangeText={ valor => props.atualizarValor(props.nome, valor) }
  />
);

const styles = StyleSheet.create({
    campoNumero: {
        width: 140,
        height: 80,
        fontSize: 18,
    }
});