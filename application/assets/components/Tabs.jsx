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
import EditProfileScreen from '../../screens/EditProfileScreen';
import CategoryProductsScreen from '../../screens/CategoryProductsScreen';
import EditProductScreen from '../../screens/EditProductScreen';
import RequestedScreen from '../../screens/RequestedScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainTabs = () => {
    <Tab.Navigator    >

        <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: () => <MaterialCommunityIcons name='account' size={20} color='black' /> }} />
        <Tab.Screen name="Explore" component={ExploreStack} options={{ tabBarIcon: () => <MaterialCommunityIcons name='account' size={20} color='black' /> }} />

        <Tab.Screen name="Inbox" component={InboxStack} options={{ tabBarIcon: () => <MaterialCommunityIcons name='account' size={20} color='black' /> }} />
    </Tab.Navigator>

}


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
        <Stack.Screen name="RequestedScreen" component={RequestedScreen} options={{ headerShown: false }} />

        <Stack.Screen name="FullCatalog" component={FullCatalog} options={{ headerShown: false }} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProduct" component={EditProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SingleChat" component={SingleChat} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onboarding" component={OnBoardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PassswordResetVerification" component={PasswordResetVerification} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />

            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />

            <Stack.Screen name="SingleChat" component={SingleChat} options={{ headerShown: false }} />
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />

            <Stack.Screen name="CategoryProducts" component={CategoryProductsScreen} options={{ headerShown: false }} />

            <Stack.Screen name="FullCatalog" component={FullCatalog} options={{ headerShown: false }} />

            <Stack.Screen name="ItemScreen" component={ItemScreen} options={{ headerShown: false }} />

            <Stack.Screen name="EditProduct" component={EditProductScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RequestedScreen" component={RequestedScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
};

export default MainNavigation;