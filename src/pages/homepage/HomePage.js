import React from 'react';
import {View, Text} from 'react-native';

import auth from '@react-native-firebase/auth';

import Button from '../../components/Button/Button';

export default function HomePage() {
  return (
    <View>
      <Text></Text>

      <Button title={'Log Out'} onPress={() => auth().signOut()} />
    </View>
  );
}
