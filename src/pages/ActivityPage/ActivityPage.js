import React from 'react';
import {View, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function ActivityPage() {
  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} />
    </View>
  );
}

export default ActivityPage;
