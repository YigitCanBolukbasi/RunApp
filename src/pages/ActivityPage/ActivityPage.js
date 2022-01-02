import React from 'react';
import {View, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ActivtyModal from '../../components/Modal/ActivityModal';
import styles from './ActivityPage.styles';

function ActivityPage() {
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
