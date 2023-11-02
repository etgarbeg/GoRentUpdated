import React, { useState } from 'react'; import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Dimensions } from 'react-native';
import styles from '../Styles/style';

const screenHeight = Dimensions.get('window').height;


const PostBox = ({ navigation }) => {
    const [isLiked, setIsLiked] = useState(false);
    const {
        currentUser } = useContext(UserContext);
    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    return (

        <View style={[styles.container4, { height: screenHeight * 0.32, width: 280 }]}>


            <TouchableOpacity onPress={() =>
                navigation.navigate('ItemScreen')
            } style={styles.middleSection}

            >



                <Image source={require('../images/exmpleProducts/books/Barney.jpg')} style={styles.postImage} />
            </TouchableOpacity>
            <View style={[styles.ShadowContainer, styles.conatinerBoxRowB]}>
                <View style={styles.container5}>
                    <Text style={styles.titlePost}>{currentUser.products[0].productName}</Text>
                    <Text style={styles.distanceText}>{currentUser.products[0].productAvaliable ? <Text>
                        Avaliable
                    </Text> : <Text>Taken</Text>}</Text>


                </View>


                <TouchableOpacity onPress={() => {
                    navigation.navigate('ItemScreen')
                }} style={styles.bottomSection} activeOpacity={0.5}>



                </TouchableOpacity>
            </View>
        </View >

    );
};


export default PostBox;
