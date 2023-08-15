import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from '../assets/Styles/style';
import PostBox from '../assets/components/PostBox'; // Import your PostBox component
import BannerSlideshow from '../assets/components/BannerSlideshow';
import SearchBar from '../assets/components/SearchBar';
const FullCatalog = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6]; // Example data array, replace with your actual data

    return (


        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={styles.containerCatallog}>
                <View style={styles.overlay} />


                <SearchBar />
                <View style={styles.containeCollectionColum}>

                    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>


                        <Text style={styles.CatalogTitle}>Most rented</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.sectionContainer}>
                                {data.map((item, index) => (
                                    <View key={index} style={styles.itemContainer}>
                                        <PostBox navigation={navigation} />
                                    </View>
                                ))}
                            </View>
                        </ScrollView>





                        <Text style={styles.CatalogTitle}>All Catalog</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <View style={styles.sectionContainer}>
                                {data.map((item, index) => (
                                    <View key={index} style={styles.itemContainer}>
                                        <PostBox navigation={navigation} />
                                    </View>
                                ))}
                            </View>
                        </ScrollView>

                    </ScrollView>
                </View>
            </View >
        </ScrollView>

    );
};

export default FullCatalog;
