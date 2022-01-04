import React, {useEffect, useState, useContext} from 'react';

import GetLocation from 'react-native-get-location';
import database from '@react-native-firebase/database';
import {AuthContext} from '../navigation/AuthProvider';

export default function useLocation() {
  const [currentLocation, setCurrentLocation] = useState({});
  const {user} = useContext(AuthContext);
  const [intervalId, setIntervalId] = useState('');

  const handleNewActivity = async () => {
    const newReference = database().ref(`users/${user.uid}/activities/`).push();
    startLocationRecording(newReference.key);
    fetchLocations(newReference.key);
  };

  const stopLocationRecording = () => {
    clearInterval(intervalId);
  };

  const startLocationRecording = key => {
    let i = 1;
    const interval = setInterval(() => {
      handleLocationRequest();
      setIntervalId(interval);
      database()
        .ref(`users/${user.uid}/activities/${key}/${i}`)
        .set({
          currentLocation,
        })
        .then(() => console.log('Data set.'));

      i++;
    }, 3000);
  };

  const fetchLocations = async key => {
    database()
      .ref(`users/${user.uid}/activities/${key}/`)
      .on('value', snapshot => {
        console.log('yarak', snapshot.val());
      });
  };

  const handleLocationRequest = async () => {
    try {
      const locationData = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      }).then(location => {
        setCurrentLocation(location);
        console.log('state dolu');
      });
    } catch (error) {
      const {code, message} = error;
      console.warn(code, message);
    }
  };

  return {currentLocation, handleNewActivity, stopLocationRecording};
}
