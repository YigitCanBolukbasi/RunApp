import React from 'react';
import {TextInput, View, Text} from 'react-native';

import styles from './Input.styles';

function Input({label, onChangeText, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          {...otherProps}
        />
      </View>
    </View>
  );
}

export default Input;
