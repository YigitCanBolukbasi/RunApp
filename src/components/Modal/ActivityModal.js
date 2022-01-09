import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Modal from 'react-native-modal';
import Button from '../Button/Button';
import styles from './ActivtyModal.styles';
import useFetch from '../../hooks/useFetch';
import useLocation from '../../hooks/useLocation';

function ActivtyModal({onPress, stopLocationReording}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const {currentLocation} = useLocation();
  const {data} = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${
      currentLocation && currentLocation.latitude
    }&lon=${
      currentLocation && currentLocation.longitude
    }&appid=88bb13a8e61f58f9d1aade3dde2535a9`,
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      onPress();
    } else {
      stopLocationReording();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Starting Activty screen" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.container_body}>
          <View style={styles.table_one}>
            <Text style={styles.text}>5'55'</Text>
            <Text style={styles.text}>45:06</Text>
            <Text style={styles.text}>562</Text>
          </View>
          <View style={styles.table_two}>
            <Text style={styles.text}>54m</Text>
            <Text style={styles.text}>1885</Text>
            <Text style={styles.text}>1885</Text>
          </View>

          <Button title="Show Map Full Screen" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ActivtyModal;
