import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GridTwoThreeLike = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleFavoriteItem = (item) => {
        setFavoriteItems((prevItems) => [...prevItems, item]);
    };

    const renderGridItems = () => {
        const gridData = [
            { id: 1, image: require('../images/exmpleProducts/books/book1.jpg') },
            { id: 2, image: require('../images/exmpleProducts/books/book2.jpeg') },
            { id: 3, image: require('../images/exmpleProducts/books/book4.jpeg') },
            { id: 4, image: require('../images/exmpleProducts/books/book4.jpeg') },
            { id: 5, image: require('../images/exmpleProducts/books/book5.jpeg') },
            { id: 6, image: require('../images/exmpleProducts/books/book6.jpeg') },
        ];

        return gridData.map((item) => (
            <TouchableOpacity
                key={item.id}
                style={styles.gridItem}
                onPress={() => handleFavoriteItem(item)}
            >
                <Image source={item.image} style={styles.image} />
                <TouchableOpacity
                    style={styles.heartIconContainer}
                    onPress={() => handleFavoriteItem(item)}
                >

                    <FontAwesome
                        name="heart"
                        size={16}
                        color={favoriteItems.includes(item) ? 'red' : 'rgba(0,0,0,0.2)'}
                    />

                </TouchableOpacity>
            </TouchableOpacity >
        ));
    };

    return <View style={styles.container}>{renderGridItems()}</View>;
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 3 / 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,

    },
    gridItem: {
        width: '32%',
        aspectRatio: 1,
        marginBottom: '2%',
        position: 'relative', borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.1)'
        ,
        borderWidth: 1,

        backgroundColor: 'white'


    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    heartIconContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
    },

});

export default GridTwoThreeLike;
