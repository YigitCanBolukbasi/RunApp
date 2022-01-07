import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import ActivtyModal from '../../components/Modal/ActivityModal';
import Button from '../../components/Button/Button';
import styles from './ActivityPage.styles';
import useLocation from '../../hooks/useLocation';

function ActivityPage() {
  const navigation = useNavigation();
  const [drawData, setDrawData] = useState();
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
    console.log('drawData :', drawData);
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
        {/* {polyLine
          ? polyLine.map(k =>
              console.log(
                'maplenmiş latitude:',
                k.latitude,
                ' longitude:',
                k.longitude,
              ),
            )
          : null} */}
        {/* <Marker
          coordinate={{
            latitude: 41.168984,
            longitude: 28.9059492,
          }}
        />
        <Marker
          coordinate={{
            latitude: 41.1697405,
            longitude: 28.905526,
          }}
        /> */}
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
      <Button title={'ekrana çizdir'} onPress={deneme_draw} theme="Outline" />
    </View>
  );
}

export default ActivityPage;
