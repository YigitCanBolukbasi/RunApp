import React, {useContext, useState} from 'react';
import {View, Alert, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './SignIn.styles';

import {AuthContext} from '../../../navigation/AuthProvider';

function SignIn() {
  const navigation = useNavigation();
  const [signData, setSignData] = useState({email: '', password: ''});
  const {login} = useContext(AuthContext);

  const handleNavigateSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  const HandleLogin = () => {
    login(signData.email, signData.password);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://s3.eu-central-1.amazonaws.com/cdn.barcin.com/2020/03/hizli-ve-esnek-bir-kosucu-olmak-sportmen-cover.jpg',
        }}
      />
      <View style={styles.icon}>
        <Icon name="account" size={100} color={'black'} />
      </View>
      <View style={styles.container_body}>
        <Input
          value={signData.email}
          label={'User Name'}
          placeholder={'write here'}
          onChangeText={email => setSignData({...signData, email})}
        />
        <Input
          value={signData.password}
          label={'Password'}
          secureTextEntry={true}
          placeholder={'write here'}
          onChangeText={password => setSignData({...signData, password})}
        />
        <Button title={'SignIn'} onPress={HandleLogin} />
        <Button
          title={'signUp'}
          onPress={handleNavigateSignUp}
          theme="Outline"
        />
      </View>
    </View>
  );
}

export default SignIn;
