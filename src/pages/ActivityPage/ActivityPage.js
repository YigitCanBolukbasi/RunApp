import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Switch} from 'react-native';

import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import ActivtyModal from '../../components/Modal/ActivityModal';
import Button from '../../components/Button/Button';
import styles from './ActivityPage.styles';
import useLocation from '../../hooks/useLocation';
import useFetch from '../../hooks/useFetch';

function ActivityPage() {
  const navigation = useNavigation();
  const {data} = useFetch();
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
  const ParsedPolyLineData = polyLine
    ? polyLine.map(k => ({
        latitude: k.latitude,
        longitude: k.longitude,
      }))
    : null;
  function deneme_draw() {
    setDrawData(ParsedPolyLineData);
    console.log('çizdirilecek kordinatlar:', drawData);
  }
  function toggleSwitch() {
    setSwitchValue(!switchValue);
    !switchValue ? console.log('konum açıldı') : null;
    !switchValue && handleLocationRequest();
    !switchValue && fetchLocations;
    switchValue && stopLocationRecording;
  }
  useEffect(() => {
    handleLocationRequest().then(fetchLocations());
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        provider={PROVIDER_GOOGLE}>
        {currentLocation ? (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
          />
        ) : null}

        {drawData && (
          <Polyline
            coordinates={drawData}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={3}
          />
        )}
      </MapView>

      <View>
        <View style={styles.switch_container}>
          <Text style={styles.switch_text}>
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
        title={'see the way you walk'}
        onPress={deneme_draw}
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
