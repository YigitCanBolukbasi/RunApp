import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 12,
  },
  switch_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 5,
  },
  switch_text: {
    color: 'blue',
    fontWeight: 'bold',
    margin: 5,
  },
});
