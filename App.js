import React, { useState } from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//manu

//userContext
import { UserProvider } from './assets/UserContext/UserProvider';
//fonts

//screens
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import InboxScreen from './screens/InboxScreen';
import PasswordResetVerification from './screens/PasswordResetVerification';


import FullCatalog from './screens/FullCatalog';
import ItemScreen from './screens/ItemScreen';
import SingleChat from './screens/SingleChat';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PasswordResetVerification"
      component={PasswordResetVerification}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FullCatalog"
      component={FullCatalog}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ItemScreen"
      component={ItemScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SingleChat"
      component={SingleChat}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);




const InboxStack = () => (
  <Stack.Navigator>



    <Stack.Screen
      name="Inbox"
      component={InboxScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="SingleChat"
      component={SingleChat}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);





const ProfileStack = () => (
  <Stack.Navigator>

    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FullCatalog"
      component={FullCatalog}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ItemScreen"
      component={ItemScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SingleChat"
      component={SingleChat}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);




const App = ({ navigation }) => {



  return (


    <UserProvider>

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Explore') {
                iconName = 'magnify';
              } else if (route.name === 'Profile') {
                iconName = 'account';
              } else if (route.name === 'Inbox') {
                iconName = 'email';
              }

              return <MaterialCommunityIcons name={iconName} size={35} color={'rgba(0,0,0,0.5)'} />;
            },
          })}


          tabBarOptions={{
            style: {
              backgroundColor: 'rgba(0,0,0,0.3)', // Change the background color of the tab bar
            }, iconStyle: {
              marginTop: 10, // Adjust the vertical positioning of the icons
            },
            activeTintColor: 'black', // Change the active tab icon and text color
            labelStyle: {
              color: 'black', // Change the inactive tab text color
            },
            tabStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            indicatorStyle: {
              backgroundColor: '#000', // Change the active tab indicator color
              height: '100%',
              width: '33%',
              borderRadius: 100,
              position: 'absolute',
              bottom: 0,
              left: 0,
            }, showLabel: false, // Hide the tab titles

          }}
        >
          <Tab.Screen name="Explore" component={ExploreStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
          <Tab.Screen name="Inbox" component={InboxStack} />
        </Tab.Navigator>


      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
