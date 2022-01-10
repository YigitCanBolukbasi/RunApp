import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import styles from './ActivityHistoryPage.styles';
import ShareSocial from '../../components/share/share';
import useLocation from '../../hooks/useLocation';
import Button from '../../components/Button/Button';

function ActivityHistoryPage() {
  const navigation = useNavigation();
  const [distanceKm, setDistanceKm] = useState();

  function handleGoBack() {
    navigation.goBack();
  }

  function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
  return (
    <View>
      <Text>Activity History</Text>
      <Text>KM = {distanceKm && distanceKm}</Text>
      <Button
        title={'show the km'}
        onPress={() =>
          setDistanceKm(
            distance(
              41.16059349,
              28.91881951,
              41.16928413,
              28.93746903,
            ).toFixed(),
          )
        }
      />
      <Text>History:10/01/2022</Text>

      <ShareSocial />
      <Button title={'show the km'} onPress={handleGoBack} />
    </View>
  );
}

export default ActivityHistoryPage;
