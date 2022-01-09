import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Switch, Alert} from 'react-native';

import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import ActivtyModal from '../../components/Modal/ActivityModal';
import Button from '../../components/Button/Button';
import styles from './ActivityPage.styles';
import useLocation from '../../hooks/useLocation';

function ActivityPage() {
  const navigation = useNavigation();
  const [drawData, setDrawData] = useState();
  const [switchValue, setSwitchValue] = useState(false);

  const {
    currentLocation,
    polyLine,
    handleNewActivity,
    stopLocationRecording,
    handleLocationRequest,
    fetchLocations,
  } = useLocation();

  const handleGoBackHomePage = () => {
    navigation.navigate('HomePage');
  };
  const ParsedPolyLineData =
    polyLine &&
    polyLine.map(k => ({
      latitude: k.latitude,
      longitude: k.longitude,
    }));

  const handleDraw = async () => {
    try {
      await fetchLocations();
      setDrawData(ParsedPolyLineData);
      console.log('çizdirilecek kordinatlar:', drawData);
      console.log(data);
    } catch (error) {}
  };
  function toggleSwitch() {
    setSwitchValue(!switchValue);
    !switchValue ? console.log('konum açıldı') : null;
    !switchValue && handleLocationRequest();
    switchValue && stopLocationRecording;
  }
  useEffect(() => {
    handleLocationRequest();
    Alert.alert('turn on the switch for your location');
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{
          flex: 1,
        }}
        provider={PROVIDER_GOOGLE}>
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
          />
        )}

        {drawData && (
          <Polyline
            coordinates={drawData}
            strokeColor="#000"
            strokeColors={[
              '#7F0000',
              '#00000000',
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={4}
          />
        )}
      </MapView>

      <View>
        <View style={styles.switch_container}>
          <Text
            style={
              switchValue ? styles.switch_text_on : styles.switch_text_off
            }>
            {switchValue ? 'Location  ON' : 'Location OFF'}
          </Text>
          <Switch onChange={toggleSwitch} value={switchValue} />
        </View>
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
        title={'draw the path you run'}
        onPress={handleDraw}
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
