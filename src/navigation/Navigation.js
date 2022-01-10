import React, {useState, useEffect, useContext} from 'react';
import {Text, ActivityIndicator} from 'react-native';

import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import HomePage from '../pages/homepage/HomePage';
import ActivityPage from '../pages/ActivityPage/ActivityPage';
import ActivityHistoryPage from '../pages/ActivityHistoryPage/ActivityHistoryPage';
import LeaderBoard from '../pages/LeaderBoard/LeaderBoard';
import {AuthContext} from './AuthProvider';
import routes from './routes';

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
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name={routes.HOME_PAGE} component={HomePage} />
            <Stack.Screen
              name={routes.ACTIVITY_PAGE}
              component={ActivityPage}
            />
            <Stack.Screen
              name="ActivityHistoryPage"
              component={ActivityHistoryPage}
            />
            <Stack.Screen
              name={routes.LEADERBOARD_PAGE}
              component={LeaderBoard}
            />
          </>
        ) : (
          <>
            <Stack.Screen name={routes.SIGN_IN_PAGE} component={SignIn} />
            <Stack.Screen name={routes.SIGN_UP_PAGE} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
