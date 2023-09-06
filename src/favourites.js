import React,{useEffect, useState} from "react"
import Footer from './footer';
import "./App";
import axios from "axios";
import './books.css'
import {auth} from'./firebase';
const DisplayFavourites = ()=>{
    const[books,setBooks] = useState([]);
    const get_eml = auth?.currentUser.email.substring(0,auth?.currentUser.email.length-4);
    const URL = `https://fav-books-27775-default-rtdb.firebaseio.com/favbooks-${get_eml}.json`;
    useEffect(()=>{
        axios.get(URL).then((response)=>{
        setBooks(Object.values(response.data).reverse());
        console.log(books);
    }).catch((err)=>{console.log(err)});},[URL]);
    const DeleteFavourites = async(book)=>{
        try
        {
            await axios.delete(`https://fav-books-27775-default-rtdb.firebaseio.com/favbooks-${get_eml}/${book}`);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    return <div className="favourites">
                {books.map((book)=>(
                    <div className="book">
                        <img src={book.src} ></img>
                        <h6>{book.title.length > 25 ? book.title.substring(0,30)+`...`:book.title}</h6>
                        <h5 onClick={()=>{DeleteFavourites(books.indexOf(book))}}>Remove From Favourites💔</h5>
                    </div>
                ))}
            </div>
}

export default DisplayFavourites;
