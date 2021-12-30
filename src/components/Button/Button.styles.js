import {StyleSheet} from 'react-native';

export default {
  default: StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    label: {
      color: 'white',
      fontWeight: 'bold',
    },
  }),
  Outline: StyleSheet.create({
    container: {
      margin: 5,
      borderWidth: 1,
      borderColor: 'blue',
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    label: {
      color: 'blue',
      fontWeight: 'bold',
    },
  }),
};
