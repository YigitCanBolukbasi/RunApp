import React, {useEffect} from 'react';
import Navigation from './navigation/Navigation';
import {AuthProvider} from './navigation/AuthProvider';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
