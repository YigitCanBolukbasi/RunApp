import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.styles';

function Button({title, theme = 'default', ...otherProps}) {
  return (
    <TouchableOpacity style={styles[theme].container} {...otherProps}>
      <Text style={styles[theme].label}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
