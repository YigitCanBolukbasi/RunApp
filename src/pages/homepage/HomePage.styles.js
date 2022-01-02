import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: 'black',
  },
  text: {
    alignSelf: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  container_text: {},

  container_body: {
    flexDirection: 'row',
    marginTop: 130,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
