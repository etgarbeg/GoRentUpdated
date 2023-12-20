
import { NavigationHelpersContext } from '@react-navigation/native';
import styles from '../Styles/style';
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import categoreis from '../../data/categories.json'




const Categories = ({ navigation }) => {

    const images = [
        require('../images/categories/tech.png'),
        require('../images/categories/sport.png'),
        require('../images/categories/Home.png'),
        require('../images/categories/books.png'),
        require('../images/categories/cloth.png'),
        require('../images/categories/misc.png'),
    ];
    return (

        <View style={styles.containerCatagories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoreis.map((category, index) => (

                    <TouchableOpacity


                        key={index} style={styles.containerCatagoryBox}
                        onPress={() => { navigation.navigate('CategoryProducts', { category: category.name }) }}>
                        <Text style={styles.title1}>{category.name}</Text>
                        <Image style={styles.imageCtagory} source={images[index]} />

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View >
    );
};





export default Categories;
