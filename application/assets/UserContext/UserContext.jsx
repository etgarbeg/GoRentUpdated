import { createContext, useState } from 'react';
import { API_BASE_URL } from '../../data/api';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    //user
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [otherUsers, setOtherUsers] = useState([]);
    const [loginTxtErr, setLoginTxt] = useState("");


    //form


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');


    //users
    const FindOtherUsers = async (currentUser) => {
        const data = users.filter((currentUser) => currentUser.id !== currentUser.id);
        setOtherUsers(data);
    };



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



    const LoginUser = async (email, password) => {
        let result = await fetch(`${API_BASE_URL}/login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        let data = await result.json();
        console.log(data);
        // if (!data || data == null) {
        //     setLoginTxt("incorrent email/password.")
        //     return false;
        // }
        // setCurrentUser(data);
        // FindOtherUsers(data);
        // return data;
    }




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

    const values = {
        email,
        loginTxtErr,
        currentUser,
        LoginUser,
        Register
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
} 
