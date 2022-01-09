import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  container_body: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 400,
    padding: 30,
  },

  text: {
    fontSize: 12,
    color: 'black',
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
});
