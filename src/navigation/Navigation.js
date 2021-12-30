import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import HomePage from '../pages/homepage/HomePage';
import {AuthContext} from './AuthProvider';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

function Navigation() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="HomePage" component={HomePage} />
        ) : (
          <>
            <Stack.Screen name="SignInPage" component={SignIn} />
            <Stack.Screen name="SignUpPage" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
