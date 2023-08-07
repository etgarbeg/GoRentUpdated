
import { NavigationHelpersContext } from '@react-navigation/native';
import styles from '../Styles/style';
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Text, Image } from 'react-native';


const Categories = ({ Navigation }) => {
    const { width } = Dimensions.get('window');

    const categories = [
        { title: 'Tech', image: require('../images/categories/tech.png') },
        { title: 'Sport', image: require('../images/categories/sport.png') },
        { title: 'Home', image: require('../images/categories/Home.png') },

        { title: 'Books', image: require('../images/categories/books.png') },
        { title: 'clothes', image: require('../images/categories/cloth.png') },
        { title: 'Misc..', image: require('../images/categories/misc.png') },

    ];

    return (

        <View style={styles.containerCatagories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (

                    <TouchableOpacity
                        key={index} style={styles.containerCatagoryBox}
                        onPress={() => { Navigation.navigate('FullCatalog') }}>
                        <Text style={styles.title1}>{category.title}</Text>
                        <Image source={category.image} style={styles.imageCtagory} />

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};





export default Categories;
