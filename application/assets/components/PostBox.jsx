import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext/UserContext';
import { Dimensions } from 'react-native';
import styles from '../Styles/style';

const screenHeight = Dimensions.get('window').height;

const PostBox = ({ navigation, product }) => {
   
    // Not sure why you're importing UserContext if you're not using it in this component

    return (
        <View style={[styles.container4, { height: screenHeight * 0.32, width: 280 }]}>
            <TouchableOpacity onPress={() => navigation.navigate('ItemScreen', { product })} style={styles.middleSection}>
                <Image style={styles.squareImage} source={{ uri: product.productImage }} onError={(error) => console.error("Image error:", error)} />
            </TouchableOpacity>
            <View style={[styles.ShadowContainer, styles.conatinerBoxRowB]}>
                <View style={styles.container5}>
                    <Text style={styles.titlePost}>{product.productName}</Text>
                    <Text style={styles.distanceText}>{product.productAvaliable ? 'Available' : 'Taken'}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ItemScreen', { product })} style={styles.bottomSection} activeOpacity={0.5}>
                    {/* Your TouchableOpacity content */}
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default PostBox;
