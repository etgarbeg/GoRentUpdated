import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


import styles from '../assets/Styles/style';
import Categories from '../assets/components/Categories';

import PostBox from '../assets/components/PostBox';
import CatalogPreView from '../assets/components/collections/CatalogPreView';
import SearchBar from '../assets/components/SearchBar';



const ExploreScreen = ({ navigation }) => {


    const posts = [
        {
            userImg: <Image source={require('../assets/images/icon/navbar/profile.png')} style={styles.userImgProfSmall} />,
            username: 'John',
            title: 'Post 1',
            img: <Image source={require('../assets/images/exmpleProducts/books/Barney.jpg')} style={styles.postImg} />,
        }

    ];



    return (

        <View style={styles.containerHome}>

            <SearchBar style={styles.searchBar} />
            <Categories style={styles.categoriesContainer} navigation={navigation} />

            <View style={styles.line1Section}><Text style={styles.line1}></Text></View>
            <View style={styles.myFavoritesContainer}>
                <View style={styles.topTitleFavor}>
                    <Text style={styles.textExploreTitle}>My Favorites</Text>
                    <TouchableOpacity style={styles.seeAllButton} >
                        <Text style={styles.seeAllButtonText}>See All</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.containerAllFavor} >
                    <CatalogPreView navigation={navigation} />
                </View>
            </View>

        </View>




    );
};



export default ExploreScreen;
