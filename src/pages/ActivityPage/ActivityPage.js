import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import ActivtyModal from '../../components/Modal/ActivityModal';
import Button from '../../components/Button/Button';
import styles from './ActivityPage.styles';
import useLocation from '../../hooks/useLocation';

function ActivityPage() {
  const navigation = useNavigation();
  const {currentLocation, handleNewActivity, stopLocationRecording} =
    useLocation();

  const handleGoBackHomePage = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} />
      <View>
        <ActivtyModal
          style={styles.modal}
          onPress={handleNewActivity}
          stopLocationReording={stopLocationRecording}
        />
      </View>
      <Button
        title={'Back to Home Page'}
        onPress={handleGoBackHomePage}
        theme="Outline"
      />
    </View>
  );
}

export default ActivityPage;
