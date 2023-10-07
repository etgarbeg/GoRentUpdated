import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './assets/components/Tabs';
import { UserProvider } from './assets/UserContext/UserProvider';

import axios from 'axios';

const App = ({ navigation }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    // Fetch data from your server
    axios.get('http://192.168.1.207:3000/users')
      .then((response) => {
        setUsers(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);




  return (
    <UserProvider>
      <NavigationContainer>

        <Tabs />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;