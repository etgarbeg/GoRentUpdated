import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';

const RegisterScreen = ({ navigation }) => {
    const [err, setErrors] = useState('');
    const [Validpassword, setValidPassword] = useState('');
    const [AllCities, setAllCities] = useState([{}]);
    const [isCityPickerVisible, setCityPickerVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const {
        firstName,
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
        validateFormRegister
    } = useContext(UserContext);

    const clearForm = () => {
        setCity('');
        setCountry('');
        setValidPassword('');
        setLastName('');
        setFirstName('');
        setPassword('');
        setUsername('');
        setEmail('');
    };

    const handleSubmit = () => {
        setErrors(validateFormRegister(firstName, lastName, username, email, password, Validpassword, country, city));

        if (err === 'completed') {
            clearForm();
            navigation.navigate('Login');
        }
    };

    const handleCitySelect = (cityName) => {
        setSelectedCity(cityName);
        toggleCityPicker();
    };

    const toggleCityPicker = () => {
        setCityPickerVisible(!isCityPickerVisible);
    };

    useEffect(() => {
        fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=1b14e41c-85b3-4c21-bdce-9fe48185ffca")
            .then(response => response.json())
            .then(data => {
                if (data.result && data.result.records && data.result.records.length > 0) {
                    setAllCities(data.result.records);
                } else {
                    console.log('No city records found.');
                }
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    }, []);

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




                <View style={styles.inputContainerRegisterCityPIcker}>
                    <TouchableOpacity style={styles.pickerLine} onPress={toggleCityPicker}>
                        <Text>{city ? city : 'Select an Address'}</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Search for a city"
                    value={searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                    style={styles.searchInput}
                />
                <View style={styles.inputContainerRegisterCityPIcker}>
                    <TouchableOpacity style={styles.pickerLine} onPress={toggleCityPicker}>
                        <Text>{city ? city : 'Select an Address'}</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Search for a city"
                    value={searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                    style={styles.searchInput}
                />
                <View style={styles.inputContainerRegisterCityPIckerIn}>
                    {isCityPickerVisible && (
                        <FlatList
                            style={styles.flatlistCities}
                            data={searchInput ? AllCities.filter((item) =>
                                item.city_name.toLowerCase().includes(searchInput.toLowerCase())
                            ) : AllCities}
                            keyExtractor={(item) => item.city_name}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleCitySelect(item.city_name)}
                                    style={styles.pickerOption}
                                >
                                    <Text>{item.city_name}, {item.street_name}, {item.region_name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View> <View style={styles.inputContainerRegisterCityPIcker}>
                    <TouchableOpacity style={styles.pickerLine} onPress={toggleCityPicker}>
                        <Text>Select an Address</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Search for a city"
                    value={searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                    style={styles.searchInput}
                />
                <View style={styles.inputContainerRegisterCityPIckerIn}>
                    {isCityPickerVisible && (
                        <FlatList
                            style={styles.flatlistCities}
                            data={searchInput ? sortedCities : AllCities} // Use sortedCities when there is a search input, else use AllCities
                            keyExtractor={(item) => item.city_name}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleCitySelect(item.city_name)}
                                    style={styles.pickerOption}
                                >
                                    <Text>{item.city_name}, {item.street_name}, {item.region_name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
                <View>

                </View>

                <TouchableOpacity style={styles.buttonRegister} onPress={handleSubmit}>
                    <Text style={styles.buttonTextRegister}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};


export default RegisterScreen;
