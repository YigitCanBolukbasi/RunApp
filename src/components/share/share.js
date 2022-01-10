import React from 'react';
import {Share, View} from 'react-native';

import Button from '../Button/Button';

const ShareSocial = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{marginTop: 50}}>
      <Button title="Share With Social Media" onPress={onShare} />
    </View>
  );
};

export default ShareSocial;
