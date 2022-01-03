import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

import ActivtyModal from '../../components/Modal/ActivityModal';
import styles from './ActivityPage.styles';

function ActivityPage() {
  const [currentLocation, setCurrentLocation] = useState();
  const handleLocationRequest = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log('fonksiyondan gelen :', location);
        setCurrentLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  useEffect(() => {
    handleLocationRequest();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} />
      <View>
        <ActivtyModal style={styles.modal} />
      </View>
    </View>
  );
}

export default ActivityPage;
