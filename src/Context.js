import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Category from './Json/Movie.json'
import ListAccount from './Json/Account.json'
const Context = createContext();

export default function Provider({ children })

{
    const movie =  [] // list all 15 movie
    Category.map((category)=>{

        category.Movie.map(movieItem=>{ 
            movie.push({...movieItem,Category:category.Name})
        })

    })


    var userInfo = JSON.parse(sessionStorage.getItem('Account'))
    var account = userInfo[0];
    
    const value = {
        movie
    }
    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider >
    )
}
export {Context}