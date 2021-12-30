import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import Button from '../../components/Button/Button';

export default function HomePage() {
  const navigation = useNavigation();

  const handleNavigateNewActivity = () => {
    navigation.navigate('ActivityPage');
  };
  return (
    <View>
      <Text></Text>
      <Button title={'New Activity'} onPress={handleNavigateNewActivity} />
      <Button
        title={'Log Out'}
        onPress={() => auth().signOut()}
        theme="Outline"
      />
    </View>
  );
}
