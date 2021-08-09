/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={styles.boton}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
    top: -10,
  },

  boton: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
