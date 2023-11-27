import React, { createContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';


export const UserProvider = ({ children }) => {










    const value = {


    };




    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
