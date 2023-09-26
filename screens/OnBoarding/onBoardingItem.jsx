import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import slides from './slides'
import styles from '../../assets/Styles/style'
const onBoardingItem = ({ item }) => {
    return (
        <View style={[styles.container1, { width }]}>
            <Image source={item.image} style={{ width, flex: 0.7, justifyContent: 'center' }} />
            <Text>onBoardingItem</Text>
        </View>
    )
}
export default onBoardingItem;

