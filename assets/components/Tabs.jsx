import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import PasswordResetVerification from '../../screens/PasswordResetVerification';
import RegisterScreen from '../../screens/RegisterScreen';
import ExploreScreen from '../../screens/ExploreScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import FullCatalog from '../../screens/FullCatalog';
import ItemScreen from '../../screens/ItemScreen';
import SingleChat from '../../screens/SingleChat';
import InboxScreen from '../../screens/InboxScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OnBoardingScreen from '../../screens/OnBoarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const onBoardingStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="onboarding" component={OnBoardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetVerification" component={PasswordResetVerification} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const ExploreStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FullCatalog" component={FullCatalog} options={{ headerShown: false }} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const InboxStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SingleChat" component={SingleChat} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FullCatalog" component={FullCatalog} options={{ headerShown: false }} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SingleChat" component={SingleChat} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const Tabs = () => {
    return (
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
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: { display: 'none' }, // Hide the tab bar by default
            }}
            initialRouteName="Onboarding"
        >
            <Tab.Screen name="Onboarding" component={onBoardingStack} options={{ tabBarButton: () => null, headerShown: false, }} />
            <Tab.Screen name="Profile" component={ProfileStack} />
            <Tab.Screen name="Explore" component={ExploreStack} />

            <Tab.Screen name="Inbox" component={InboxStack} />
        </Tab.Navigator>
    );
};

export default Tabs;
