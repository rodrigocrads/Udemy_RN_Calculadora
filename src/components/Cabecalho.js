import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default props => (
    <View style={styles.container}>
        <Text style={styles.cabecalho}>Calculadora 1.0</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    cabecalho: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    }
});