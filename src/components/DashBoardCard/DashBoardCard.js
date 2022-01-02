import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

import styles from './DashBoardCard.styles';

function DashBoardCard({title, onPress, ...otherProps}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DashBoardCard;
