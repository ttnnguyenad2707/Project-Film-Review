import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Category from './Json/Movie.json'

const Context = createContext();

export default function Provider({ children })

{
    const movie =  [] // list all 15 movie
    Category.map((category)=>{

        category.Movie.map(movieItem=>{ 
            movie.push(movieItem)
        })

    })
   

    
    


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