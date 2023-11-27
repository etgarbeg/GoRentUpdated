import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './assets/components/Tabs';
import UserContextProvider from './assets/UserContext/UserContext';


const App = ({ navigation }) => {




  return (
    <UserContextProvider >
      <NavigationContainer>
        <MainNavigation />

      </NavigationContainer>
    </UserContextProvider >
  );
};

export default App;