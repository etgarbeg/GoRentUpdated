import { createContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../../data/api';
import axios from 'axios';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    //user

    const [currentUser, setCurrentUser] = useState(null);
    const [otherUsers, setOtherUsers] = useState([]);
    const [loginTxtErr, setLoginTxtErr] = useState('');


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



    axios.get('https://gorentapp.onrender.com/api/users/')
        .then((response) => {
            setUsers(response.data);

        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });











    //formValidTION

    const validateFormRegister = (firstName, lastName, username, email, password, Validpassword, country, city) => {

        console.log(firstName, lastName, username, email, password, Validpassword, country, city)
        const StringRegex = /^[a-zA-Z0-9]/;
        if (firstName == '' || lastName == '' || username == '' || email == '' || password == '' || country == '' || city == '') {
            return 'missing details'
        }


        // Validate first name (example: not empty)
        else if (!StringRegex.test(firstName)) {
            return 'First name is not Valid';
        }

        // Validate last name (example: not empty)
        if (!StringRegex.test(lastName)) {
            return 'Last name is not Valid';
        }

        // Validate email using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Invalid email address';
        }

        // Validate username using regex
        const usernameRegex = /^[a-zA-Z0-9]/;
        if (!username || !usernameRegex.test(username)) {
            return 'Username is not Valid';
        }
        if (!StringRegex.test(password)) {
            return 'password is not Valid';
        }


        // Validate country (example: not empty)
        if (!StringRegex.test(country)) {
            return 'Country is not Valid';
        }

        // Validate city (example: not empty)
        if (!StringRegex.test(city)) {
            return 'City is not Valid';
        }
        if (password !== Validpassword) {
            console.log(password);
            console.log(Validpassword)
            return 'passwords are not similar';
        }

        return 'complited'

    };

    const LoginUser = async () => {
        try {
            console.log("in Login user");
            const response = await axios.post(`${API_BASE_URL}/login`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = response.data;
            return data;
        } catch (error) {
            console.error('Error during login:', error);
            throw new Error('Login failed');
        }
    };


    const RegisterUser = async (user) => {
        let result = await fetch(`${API_BASE_URL}/register`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

        let data = await result.json();
        return data;

    }

    const value = {
        email,
        users,
        password,
        loginTxtErr,
        currentUser,
        setLoginTxtErr,
        LoginUser,
        setPassword,
        setCurrentUser,
        setEmail,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
} 
