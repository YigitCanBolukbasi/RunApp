import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 12,
  },
});
