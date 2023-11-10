import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { UserContext } from '../assets/UserContext/UserContext';
import styles from '../assets/Styles/style';


const ProfileScreen = ({ navigation }) => {

    const {
        currentUser, otherUsers, users } = useContext(UserContext);

    const other = users.filter(user => user.id !== currentUser.id)

    return (
        <View style={styles.container}>

            <View style={styles.overlay} />
            <View style={styles.profilePictureContainer}>
                <Image
                    source={require('../assets/images/icon/navbar/profile.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
                <Text style={styles.title}>{currentUser.username}</Text>
            </View>

            <View style={styles.catalogSection}>


            </View>



            <View style={[styles.userDetailsSection, styles.leftalign]}>

                <View>


                    <Text style={styles.userDetailsText}>Name         {currentUser.firstName} {currentUser.lastName} </Text>
                    <Text style={styles.userDetailsText}>Email           {currentUser.email}</Text>
                    <Text style={styles.userDetailsText}>City              {currentUser.adress.city}, {currentUser.adress.street}</Text>
                    <Text style={styles.userDetailsText}>Payment        {currentUser.crreditCard === null ? <Text>(N-Verified)</Text> : <Text>(Verified)</Text>}  </Text>
                </View>

                <View style={styles.catalogSection}>
                    <TouchableOpacity
                        onPress={() => {
                            //navigation.navigate('EditProfile'); // Change this to your edit profile screen
                        }}
                        style={styles.editButton}
                    >
                        <Image source={require('../assets/images/icon/forms/edit.png')} style={styles.editIcon} />
                    </TouchableOpacity>

                </View>
            </View>


            <View style={styles.line1Section}><Text style={styles.line1}></Text></View>
            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('FullCatalog')
                }} style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>My Catalog</Text>
                    <Image source={require('../assets/images/home/add.png')} style={styles.Imagsbox} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Rent history</Text>
                    <Image source={require('../assets/images/categories/misc.png')} style={styles.Imagsbox} />
                </TouchableOpacity>





            </View>

            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ExploreScreen')} style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Explore</Text>
                    <Image source={require('../assets/images/categories/books.png')} style={styles.Imagsbox} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Inbox')} style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Inbox</Text>
                    <Image source={require('../assets/images/home/inbox.png')} style={styles.Imagsbox} />
                </TouchableOpacity>

            </View>
        </View>



    );
};

export default ProfileScreen;