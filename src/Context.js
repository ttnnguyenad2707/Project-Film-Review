import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Category from './Json/Movie.json'
import ListAccount from './Json/Account.json'
const Context = createContext();
export default function Provider({ children })

{
    useEffect(()=>{
        localStorage.setItem("Category",JSON.stringify(Category))
    },[])
    const categoryList=JSON.parse(localStorage.getItem("Category"))
    
    const [category,setCategory] = useState(categoryList);
    
    const [account,setAccount] = useState();
    const movie =  [] // list all 15 movie
    category.map((category)=>{

        category.Movie.map(movieItem=>{ 
            movie.push({...movieItem,Category:category.Name,CategoryID:category.ID})
        })

    })
    

   
    
    const value = {
        movie,
        account,setAccount,
        category,setCategory
    }
    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider >
    )
}
export {Context}