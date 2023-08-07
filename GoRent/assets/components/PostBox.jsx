import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import styles from '../Styles/style';

const screenHeight = Dimensions.get('window').height;


const PostBox = ({ navigation }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    return (

        <View style={[styles.container4, { height: screenHeight * 0.25, width: 200 }]}>
            <View style={styles.topPostSec}>
                <TouchableOpacity style={styles.container3Circle}><Image style={styles.container3Circle} source={require('../images/icon/navbar/profile.png')}></Image></TouchableOpacity>
                <Text style={styles.usernameTitle}>Ron12</Text>
                <TouchableOpacity onPress={handleLikePress} style={styles.heartIconContainer}>
                    <Icon name={isLiked ? 'heart' : 'heart-o'} size={20} color={isLiked ? 'red' : 'black'} />
                </TouchableOpacity>

            </View>
            <View style={styles.container5}>
                <Text style={styles.titlePost}>cdPlayer 2002 nok</Text>
                <Text style={styles.distanceText}>0.5km</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ItemScreen')
            }} style={styles.middleSection}

            >



                <Image source={require('../images/exmpleProducts/books/Barney.jpg')} style={styles.postImage} />
            </TouchableOpacity>
            <View style={styles.ShadowContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ItemScreen')
                }} style={styles.bottomSection} activeOpacity={0.5}>

                    <Text style={styles.rentText}>VIEW</Text>
                </TouchableOpacity>
            </View>
        </View >

    );
};


export default PostBox;
