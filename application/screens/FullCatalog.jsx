import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../assets/UserContext/UserContext';
import { View, ScrollView, Text } from 'react-native';
import styles from '../assets/Styles/style';
import PostBox from '../assets/components/PostBox';
import SearchBar from '../assets/components/SearchBar';

const FullCatalog = ({ navigation }) => {
    const { currentUser } = useContext(UserContext);
    const data = currentUser.products;

    const [filteredAvailableItems, setFilteredAvailableItems] = useState([]);
    const [filteredRentedItems, setFilteredRentedItems] = useState([]);

    // Initially, show all items
    useEffect(() => {
        setFilteredAvailableItems(data.filter(item => item.productAvailable));
        setFilteredRentedItems(data.filter(item => !item.productAvailable));
    }, [data]);

    const handleSearch = (query) => {
        // Filter available items based on search query
        const filteredAvailable = data.filter(item =>
            item.productName.toLowerCase().includes(query.toLowerCase()) &&
            item.productAvailable
        );

        // Filter rented items based on search query
        const filteredRented = data.filter(item =>
            item.productName.toLowerCase().includes(query.toLowerCase()) &&
            !item.productAvailable
        );

        setFilteredAvailableItems(filteredAvailable);
        setFilteredRentedItems(filteredRented);
    };

    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={styles.containerCatallog}>
                <View style={styles.overlay} />
                <View style={styles.containerTop}></View>
                <SearchBar onSearch={handleSearch} />

                <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                    <Text style={styles.CatalogTitle}>Available Now</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.sectionContainer}>
                            {filteredAvailableItems.map((item, index) => (
                                <View key={index} style={styles.itemContainer}>
                                    <PostBox navigation={navigation} product={item} />
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    <Text style={styles.CatalogTitle}>Currently Rented</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.sectionContainer}>
                            {filteredRentedItems.map((item, index) => (
                                <View key={index} style={styles.itemContainer}>
                                    <PostBox navigation={navigation} product={item} />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default FullCatalog;
