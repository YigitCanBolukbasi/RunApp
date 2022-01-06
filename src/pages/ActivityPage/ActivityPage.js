import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import ActivtyModal from '../../components/Modal/ActivityModal';
import Button from '../../components/Button/Button';
import styles from './ActivityPage.styles';
import useLocation from '../../hooks/useLocation';

function ActivityPage() {
  const navigation = useNavigation();
  const {
    currentLocation,
    markerLocation,
    handleNewActivity,
    stopLocationRecording,
    handleLocationRequest,
  } = useLocation();

  const handleGoBackHomePage = () => {
    navigation.navigate('HomePage');
  };
  useEffect(() => {
    handleLocationRequest();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE}>
        {currentLocation ? (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
          />
        ) : null}
      </MapView>

      <View>
        <ActivtyModal
          style={styles.modal}
          onPress={handleNewActivity}
          stopLocationReording={stopLocationRecording}
        />
      </View>
      <Button
        title={'push to refresh your location'}
        onPress={handleLocationRequest}
        theme="Outline"
      />
      <Button
        title={'Back to Home Page'}
        onPress={handleGoBackHomePage}
        theme="Outline"
      />
    </View>
  );
}

export default ActivityPage;
