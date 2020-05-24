import React from 'react';
import {
  View,
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export const Painel = props => (
  <View>
    <Entrada
      num1={props.num1}
      num2={props.num2}
      atualizarValor={props.atualizarValor}
    />
    <Operacao
      operacao={props.operacao}
      atualizarOperacao={props.atualizarOperacao}
    />
    <Comando calcular={props.calcular} />
  </View>
);