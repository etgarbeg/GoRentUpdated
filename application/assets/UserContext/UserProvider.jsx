import React, { createContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import { date } from 'yup';
import users from '../../data/users.json'
import { useContext } from 'react';

import { API_BASE_URL } from '../../data/api';

export const UserProvider = ({ children }) => {



    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [otherUsers, setOtherUsers] = useState([]);

















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









    const value = {
        firstName,
        lastName,
        email,
        username,
        password,
        country,
        city, users, currentUser,
        otherUsers,

        setOtherUsers,
        setCurrentUser,
        setUsers,
        setFirstName,
        setLastName,
        setEmail,
        setUsername,
        setPassword,
        setCountry,
        setCity,
        validateFormRegister,

    };




    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
