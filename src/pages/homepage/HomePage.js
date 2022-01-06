import React from 'react';
import {View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import Button from '../../components/Button/Button';
import DashBoardCard from '../../components/DashBoardCard/DashBoardCard';
import styles from './HomePage.styles';

export default function HomePage() {
  const navigation = useNavigation();

  const handleNavigateNewActivity = () => {
    navigation.navigate('ActivityPage');
  };
  const handleNavigateActivityHistory = () => {
    navigation.navigate('ActivityHistoryPage');
  };
  const handleNavigateLeaderBoard = () => {
    navigation.navigate('LeaderBoardPage');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.theconversation.com/files/380799/original/file-20210127-17-if809z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
        }}
      />
      <View style={styles.container_text}>
        <Text style={styles.text}>Run</Text>
        <Text style={styles.text}> With Us!</Text>
      </View>
      <View style={styles.container_body}>
        <DashBoardCard
          title={'New Activity'}
          onPress={handleNavigateNewActivity}
        />
        <DashBoardCard
          title={'Activity History'}
          onPress={handleNavigateActivityHistory}
        />
        <DashBoardCard
          title={'Leader Board'}
          onPress={handleNavigateLeaderBoard}
        />
      </View>
      <Button title={'Log Out'} onPress={() => auth().signOut()} />
    </View>
  );
}
