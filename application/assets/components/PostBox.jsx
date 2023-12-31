import React, { useState } from 'react'; import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Dimensions } from 'react-native';
import styles from '../Styles/style';

const screenHeight = Dimensions.get('window').height;


const PostBox = ({ navigation, product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const {
        currentUser } = useContext(UserContext);
    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    return (

        <View style={[styles.container4, { height: screenHeight * 0.32, width: 280 }]}>


            <TouchableOpacity onPress={() =>
                navigation.navigate('ItemScreen', { product })} style={styles.middleSection}

            >



                <Image style={styles.squareImage} source={{ uri: product.productImage }} onError={(error) => console.error("Image error:", error)} />
            </TouchableOpacity>
            <View style={[styles.ShadowContainer, styles.conatinerBoxRowB]}>
                <View style={styles.container5}>
                    <Text style={styles.titlePost}>{product.productName}</Text>
                    <Text style={styles.distanceText}>{product.productAvaliable ? <Text>
                        Avaliable
                    </Text> : <Text>Taken</Text>}</Text>


                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ItemScreen', { product })}
                    style={styles.bottomSection}
                    activeOpacity={0.5}
                >
                    {/* Your TouchableOpacity content */}
                </TouchableOpacity>


            </View>
        </View >

    );
};


export default PostBox;
