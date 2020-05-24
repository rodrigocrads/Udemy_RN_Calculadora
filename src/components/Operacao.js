import React from 'react';
import {
  Picker
} from 'react-native';

export default class Operacao extends React.Component {
  render() {
      return (
        <Picker
          style={{marginVertical: 15}}
          selectedValue={this.props.operacao}
          onValueChange={operacao => this.props.atualizarOperacao(operacao)}
        >
          <Picker.Item label="Soma" value="soma" />
          <Picker.Item label="Subtração" value="subtracao"  />
        </Picker>
      );
    }
};