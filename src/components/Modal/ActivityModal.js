import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Modal from 'react-native-modal';
import Button from '../Button/Button';
import styles from './ActivtyModal.styles';
import useFetch from '../../hooks/useFetch';
import useLocation from '../../hooks/useLocation';

function ActivtyModal({onPress, stopLocationReording}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const {currentLocation} = useLocation();
  const {data} = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=65.9667&lon=-18.5333&appid=88bb13a8e61f58f9d1aade3dde2535a9`,
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      onPress();
    } else {
      stopLocationReording();
    }
  };
  const temperature =
    data && data.main.feels_like.toFixed() - (274.15).toFixed();

  return (
    <View style={styles.container}>
      <Button title="Starting Activity" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.container_body}>
          <View style={styles.icon}>
            {temperature > 20 ? (
              <Icon name="white-balance-sunny" size={80} color={'orange'} />
            ) : (
              <Icon name="weather-partly-cloudy" size={80} color={'orange'} />
            )}
          </View>
          <Text style={styles.text}>Country : {data && data.sys.country}</Text>
          <Text style={styles.text}>city/village : {data && data.name}</Text>
          <Text style={styles.text}>
            temperature :{' '}
            {data && data.main.temp.toFixed() - (274.15).toFixed()}
          </Text>
          <Text style={styles.text}>Feeling temperature :{temperature}</Text>
          <Text style={styles.text}>
            Humidity : {data && data.main.humidity}
          </Text>
          <Text style={styles.text}>
            Speed of Wind : {data && data.wind.speed}
          </Text>
          <View style={styles.warning}>
            <Text>please keep it open throughout the activity! </Text>
          </View>

          <Button title="Stop Activity" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ActivtyModal;
