import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { UserContext } from '../assets/UserContext/UserContext';
import styles from '../assets/Styles/style';
import EditProfileScreen from './EditProfileScreen';

const ProfileScreen = ({ navigation }) => {




    const handleEditProfile = () => {
        navigation.navigate('EditProfile');
    };

    const {
        currentUser, otherUsers, users, email } = useContext(UserContext);


    const hasRentRequests = currentUser.cart.length > 0;
    return (
        <View style={styles.container}>

            <View style={styles.overlay} />
            <View style={styles.profilePictureContainer}>
            <Image   style={{ width: '100%', height: '100%', resizeMode: 'cover',borderRadius:'50%',borderWidth:5,borderColor:'rgba(255,255,255,0.9)' }} source={{ uri: currentUser.image }} onError={(error) => console.error("Image error:", error)} />
                  
                
                <Text style={styles.title}>{currentUser.username}</Text>
            </View>

            <View style={styles.catalogSection}>


            </View>



            <View style={[styles.userDetailsSection, styles.leftalign]}>

                <View>


                    <Text style={styles.userDetailsText}>Name       {currentUser.firstName} {currentUser.lastName} </Text>
                    <Text style={styles.userDetailsText}>Email        {currentUser.email}</Text>
                    <Text style={styles.userDetailsText}>City           {currentUser.adress.city} </Text>
                    <Text style={styles.userDetailsText}>Payment  {currentUser.crreditCard === null ? <Text>(N-Verified)</Text> : <Text>(Verified)</Text>}  </Text>
                </View>

                <View style={styles.catalogSection}>
                    <TouchableOpacity
                        onPress={handleEditProfile}

                        style={styles.editButton}
                    >
                        <Image source={require('../assets/images/icon/forms/edit.png')} style={styles.editIcon} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.line1Section}><Text style={styles.line1}></Text></View>

            <TouchableOpacity style={styles.buttomMyRequest} onPress={() => {
                navigation.navigate('RequestedScreen')
            }}>
                <Text style={styles.actionButtonText}>My Rent request</Text>

                <TouchableOpacity style={styles.actionButtonWide}>
                    {hasRentRequests ? (
                        <View style={styles.notificationLogoGreen}></View>
                    ) : (
                        <View style={styles.notificationLogoGrey}></View>
                    )}

                </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('FullCatalog')
                }} style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>My Catalog</Text>
                    <Image source={require('../assets/images/home/add.png')} style={styles.Imagsbox} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ExploreScreen')} style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Explore</Text>
                    <Image source={require('../assets/images/categories/books.png')} style={styles.Imagsbox} />
                </TouchableOpacity>



            </View>

            <View style={styles.actionButtonsContainer}>



                <TouchableOpacity onPress={() => navigation.navigate('Inbox')} style={styles.actionButtonwide}>
                    <Text style={styles.actionButtonTextWide}>Inbox</Text>


                    <TouchableOpacity style={styles.actionButtonWide}>
                        {hasRentRequests ? (
                            <View style={styles.notificationLogoGreen}></View>
                        ) : (
                            <View style={styles.notificationLogoGrey}></View>
                        )}

                    </TouchableOpacity>
                    <Image source={require('../assets/images/home/inbox.png')} style={styles.Imagsbox} />
                </TouchableOpacity>


            </View>

        </View >



    );
};

export default ProfileScreen;
