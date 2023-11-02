import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


import styles from '../assets/Styles/style';
import Categories from '../assets/components/Categories';

import SearchBar from '../assets/components/SearchBar';
import { UserContext } from '../assets/UserContext/UserContext';



const ExploreScreen = ({ navigation }) => {


    const { users, currentUser, otherUsers, FOtherUsers } = useContext(UserContext);




    return (

        <View style={styles.containerHome}>

            <SearchBar style={styles.searchBar} />
            <Categories style={styles.categoriesContainer} navigation={navigation} />


            <View style={styles.myFavoritesContainer}>
                <View style={styles.topTitleFavor}>
                    <Text style={styles.textExploreTitle}>Near by</Text>
                    <TouchableOpacity style={styles.seeAllButton} >
                        <Text style={styles.seeAllButtonText}>See All</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.containerAllFavor} >



                </View>
            </View >

        </View >




    );
};



export default ExploreScreen;
