import React from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';

export default props => (
    <View>
        <TextInput
            style={styles.campoResultado}
            placeholder="Resultado"
            editable={false}
            value={props.resultado}
        />
    </View>
);

const styles = StyleSheet.create({
    campoResultado: {
        height: 100,
        fontSize: 30,
        fontWeight: 'bold',
    }
});