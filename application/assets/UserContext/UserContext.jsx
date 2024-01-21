import { createContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../../data/api';
import axios from 'axios';


export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    //user

    const [currentUser, setCurrentUser] = useState(null);
    const [otherUsers, setOtherUsers] = useState([]);
    const [loginTxtErr, setLoginTxtErr] = useState('');

    const [allmessegesArray, setAllmessegesArray] = useState(null);



    //form


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [users, setUsers] = useState([]);



    useEffect(() => {
        // This will run once when the component mounts
        axios.get('http://192.168.1.207:5500/api/users')
            .then((response) => {
                setUsers(response.data);
                console.log("our users ", response.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);





    const validateEmailEdit = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false;

        }
        else return true;
    }





    //formValidTION

    const validateFormRegister = (username, password, firstName, lastName, email, country, city, Validpassword) => {

        console.log(username, password, firstName, lastName, email, country, city)
        const StringRegex = /^[a-zA-Z0-9]/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!firstName ||
            !lastName || !username || !email || !password ||
            !country || !city) {
            return 'missing details'
        }


        // Validate first name (example: not empty)
        else if (!StringRegex.test(firstName)) {
            return 'First name is not Valid';
        }

        // Validate last name (example: not empty)
        else if (!StringRegex.test(lastName)) {
            return 'Last name is not Valid';
        }

        // Validate email using regex

        else if (!emailRegex.test(email)) {
            return 'Invalid email address';
        }

        // Validate username using regex

        else if (!StringRegex.test(username)) {
            return 'Username is not Valid';
        }
        else if (!StringRegex.test(password)) {
            return 'password is not Valid';
        }


        // Validate country (example: not empty)
        else if (!StringRegex.test(country)) {
            return 'Country is not Valid';
        }

        // Validate city (example: not empty)
        else if (!StringRegex.test(city)) {
            return 'City is not Valid';
        }
        else if (password !== Validpassword) {
            console.log(password);
            console.log(Validpassword)
            return 'passwords are not similar';
        }

        else
            return 'complited'

    };



    const LoginUser = async () => {

        try {

            console.log("im here")
            const response = await axios.post(`${API_BASE_URL}/login`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Server Response:', response.data);
            const user = response.data.user;

            // Check if the user object exists
            if (user) {
                const otherUsers = users.filter(User => User._id !== user._id);
                setOtherUsers(otherUsers)
                console.log("users", users)
                console.log("user context - > other  users", otherUsers)
                return user;  // Return the user object

            } else {
                console.error('Login failed. Please try again.');
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login failed. Please try again.'); // Simplified error message
            throw new Error('Login failed');
        }
    };


    // Client-side code (React Native)

    const RegisterUser = async (userData) => {
        try {
            const result = await fetch(`${API_BASE_URL}/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await result.json();
            return data;
        } catch (error) {
            console.error('Registration failed. Please try again.', error);
            throw new Error('Registration failed');
        }
    };



    const findUserByOwnerId = (users, ownerId) => {
        for (const user of users) {
            if (user.products.some(userProduct => userProduct.ownerId === ownerId)) {
                return user;
            }
        }
        return null; // User not found
    };


    const sendRentRequest = async ({ currentUserId, userWithProductId, productId }) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/sendRentRequest`,
                {
                    currentUser: currentUserId,
                    userWithProduct: userWithProductId,
                    product: productId
                },
                {
                    timeout: 1000,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.data.success) {
                throw new Error(`Rent request failed: ${response.data.message}`);
            }

            alert(response.data.message);
            return response.data.data; // Assuming the data field contains the relevant information
        } catch (error) {
            throw new Error(`Rent request failed: ${error.message}`);
        }
    };


    const value = {
        email,
        users,
        password,
        loginTxtErr,
        currentUser,
        otherUsers,
        firstName,
        lastName,
        email,
        password,
        username,
        country,
        city,

        setUsers,
        setOtherUsers,
        setLoginTxtErr,
        LoginUser,
        setFirstName,
        setLastName,
        setUsername,
        setPassword,
        setCurrentUser,
        setEmail,
        validateFormRegister,
        validateEmailEdit,
        setCity,
        setCountry,
        RegisterUser,
        sendRentRequest, findUserByOwnerId,
        setCurrentUser

    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
} 
