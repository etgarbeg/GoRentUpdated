import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './assets/components/Tabs';
import { UserProvider } from './assets/UserContext/UserProvider';
import { response } from 'express';


const App = ({ navigation }) => {

  const [backEndData, setBackEndData] = useState([{}]);
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>
        setBackEndData(data)
    )
  })




  return (
    <UserProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;