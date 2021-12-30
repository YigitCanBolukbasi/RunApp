import * as React from 'react';
import Navigation from './navigation/Navigation';
import {AuthProvider} from './navigation/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
