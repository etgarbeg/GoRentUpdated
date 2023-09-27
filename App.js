import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './assets/components/Tabs';
import { UserProvider } from './assets/UserContext/UserProvider';


const App = ({ navigation }) => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;