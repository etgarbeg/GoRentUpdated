import { useContext } from 'react';
import { UserContext } from '../assets/UserContext/UserContext';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from '../assets/Styles/style';
import PostBox from '../assets/components/PostBox'; // Import your PostBox component
import BannerSlideshow from '../assets/components/BannerSlideshow';
import SearchBar from '../assets/components/SearchBar';
import { useState } from 'react';
const FullCatalog = ({ navigation }) => {
    //MY catalog

    const {
        currentUser } = useContext(UserContext);
    const data = currentUser.products; // Example data array, replace with your actual data
    const [currentIndex, SetcurrentIndex] = useState(0);

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

                                        <PostBox navigation={navigation} product={item} />

                                    </View>
                                ))}
                            </View>
                        </ScrollView>





                        <Text style={styles.CatalogTitle}>All Catalog</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <View style={styles.sectionContainer}>
                                {data.map((item, index) => (
                                    <View key={index} style={styles.itemContainer}>
                                        <PostBox navigation={navigation} product={item} />
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
