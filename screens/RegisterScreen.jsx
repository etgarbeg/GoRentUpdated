import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Text, Modal, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';

const RegisterScreen = ({ navigation }) => {
    const [err, setErrors] = useState('');
    const [Validpassword, setValidPassword] = useState('');
    const [AllCities, setAllCities] = useState([{}]);
    const [isCityPickerVisible, setCityPickerVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const { firstName,
        lastName,
        email,
        password,
        username,
        country,
        city,

        setFirstName,
        setLastName,
        setEmail,
        setUsername,
        setCountry,
        setCity,
        setPassword,


        validateFormRegister } = useContext(UserContext);

    const clearForm = () => {
        setCity('');
        setCountry('');
        setValidPassword('');
        setLastName('');
        setFirstName('');
        setPassword('');
        setUsername('');
        setEmail('');


    }
    const handleSubmit = () => {

        setErrors(validateFormRegister(firstName, lastName, username, email, password, Validpassword, country, city))

        if (err == 'complited') {

            clearForm();
            navigation.navigate('Login')
        }
    }



    const handleCitySelect = (cityName) => {
        setCity(cityName);
        toggleCityPicker();
    };


    const toggleCityPicker = () => {
        setCityPickerVisible(!isCityPickerVisible);
    };




    useEffect(() => {
        fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=1b14e41c-85b3-4c21-bdce-9fe48185ffca&limit=5")
            .then(response => response.json())
            .then(data => {
                if (data.result && data.result.records && data.result.records.length > 0) {

                    setAllCities(data.result.records);
                    console.log(data.result.records);
                    // Log city names individually
                    data.result.records.forEach(record => {
                        console.log('City Name:', record.city_name);
                    });
                } else {
                    console.log('No city records found.');
                }
            })
            .catch(error => {
                // Handle the error here (e.g., show an error message).
                console.log("Error fetching data:", error);
            });
    }, []); // Empty dependency array means this effect runs only once

    // Log AllCities here after the state has been updated
    console.log("AllCities:", AllCities);

    return (



        <View style={styles.containerRegister}>

            <View style={styles.overlay} />
            <Image
                source={require('../assets/images/logo/blackFade.png')}
                style={styles.imageRegister}
            />



            <View style={styles.formSectionRegister}>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="first name"
                        placeholderTextColor="#555" value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="last name"
                        placeholderTextColor="#555" value={lastName}
                        onChangeText={setLastName} />
                </View>


                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="username"
                        placeholderTextColor="#555" value={username}
                        onChangeText={setUsername}
                    />
                </View>



                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="Email"
                        placeholderTextColor="#555" value={email}
                        onChangeText={setEmail} />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} secureTextEntry={true} placeholder="password"
                        placeholderTextColor="#555" value={password}
                        onChangeText={setPassword} />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} secureTextEntry={true} placeholder="verify Password"
                        placeholderTextColor="#555" value={Validpassword}
                        onChangeText={setValidPassword} />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="country"
                        placeholderTextColor="#555" value={country}
                        onChangeText={setCountry} />
                </View>


                <View style={styles.inputContainerRegisterCityPIcker}>
                    <TouchableOpacity style={styles.pickerLine} onPress={toggleCityPicker}>
                        <Text>{city || 'Select a city'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.inputContainerRegisterCityPIckerIn}>
                    {isCityPickerVisible && (
                        <FlatList
                            style={styles.flatlistCities}
                            data={AllCities}
                            keyExtractor={(item) => item.city_name}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleCitySelect(item.city_name)}
                                    style={styles.pickerOption}
                                >
                                    <Text>{item.city_name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
                {err ? <Text style={styles.ErrorTxt}>*{err}</Text> : <Text></Text>}
                <TouchableOpacity style={styles.buttonRegister} onPress={handleSubmit}>
                    <Text style={styles.buttonTextRegister}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};


export default RegisterScreen;
