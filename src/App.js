import React from 'react';
import {
  View
} from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '0', num2: '0', operacao: 'soma', resultado: '' };
  }

  calcular() {
    let resultado = 0;

    if (this.state.operacao === 'soma') {
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    } else {
      resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    }

    this.setState({ resultado: resultado.toString() })
  }

  atualizarValor(nomeCampo, valor) {
    const obj = {};
    obj[nomeCampo] = valor;

    this.setState(obj);
  }

  atualizarOperacao(operacao) {
    this.setState({ operacao })
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado
          resultado={this.state.resultado}
        />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={() => this.calcular()}
          atualizarOperacao={operacao => this.atualizarOperacao(operacao)}
          atualizarValor={(nomeCampo, valor) => this.atualizarValor(nomeCampo, valor)}
        />
      </View>
    );
  }
}
