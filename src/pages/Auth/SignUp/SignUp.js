import React, {useContext} from 'react';
import {View, Alert, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './SignUp.styles';
import {AuthContext} from '../../../navigation/AuthProvider';

function SignUp() {
  const navigation = useNavigation();
  const {register} = useContext(AuthContext);

  const [signUpData, SetSignUpData] = React.useState({
    email: '',
    password: '',
    repassword: '',
  });

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {
    if (signUpData.password !== signUpData.repassword) {
      Alert.alert('password are not matched!');
      return;
    }

    try {
      register(signUpData.email, signUpData.password, signUpData.repassword);
      Alert.alert('User created, you can sign in with your adress');
      handleNavigateGoBack();
    } catch (error) {
      Alert.alert('An error occured');
      console.log(error.message);
    }
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
          style={styles.input}
          label={'User Name'}
          placeholder={'write here'}
          onChangeText={email => SetSignUpData({...signUpData, email})}
        />
        <Input
          style={styles.input}
          label={'Password'}
          secureTextEntry={true}
          placeholder={'write here'}
          onChangeText={password => SetSignUpData({...signUpData, password})}
        />
        <Input
          style={styles.input}
          label={'Re Password'}
          placeholder={'write here'}
          secureTextEntry={true}
          onChangeText={repassword =>
            SetSignUpData({...signUpData, repassword})
          }
        />
        <Button title={'SignUp'} onPress={handleSignUp} />
        <Button
          title={'Go Back'}
          onPress={handleNavigateGoBack}
          theme="Outline"
        />
      </View>
    </View>
  );
}

export default SignUp;
