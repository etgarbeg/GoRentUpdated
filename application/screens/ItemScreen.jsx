import React, { useContext } from 'react';
import { UserContext } from '../assets/UserContext/UserContext';
import { View, Text, FlatList } from 'react-native';
import styles from '../assets/Styles/style';
import PostBox from '../assets/components/PostBox';

const FullCatalog = ({ navigation }) => {
    const { currentUser } = useContext(UserContext);

    return (
        <View style={styles.containerCatallog}>
            <View style={styles.overlay} />
            <View style={styles.containerTop}></View>

            {/* FlatList for Requested Items */}
            <Text style={styles.CatalogTitle}>Requested Items</Text>
            <FlatList
                data={currentUser.requested}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <PostBox navigation={navigation} product={item} />
                    </View>
                )}
            />
        </View>
    );
};

export default FullCatalog;
