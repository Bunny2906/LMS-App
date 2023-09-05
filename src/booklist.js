import React,{useEffect, useState} from "react"
import Footer from './footer';
import {default as BookDetails} from "./bookdetails";
import "./App";
import axios from "axios";
import './books.css'
import {auth} from'./firebase';
const BookList = ()=>{
    const[books,setBooks] = useState([]);
    const[result,setResult] = useState("Please wait...");
    useEffect(()=>{
        function getBooks(){
            const URL = `https://openlibrary.org/search.json?title=${localStorage.getItem('searchInput')}`;
            console.log(localStorage.getItem('searchInput'))
            axios.get(URL).then((response)=>{
            console.log(response.data.docs);
            setBooks(response.data.docs.slice(0,42));
            setTimeout(()=>{
                if(response.data.docs.length == 0)
                {
                   setResult("No results found 🙁");
                }
                else
                {
                    setResult("Here are results for your search")
                }
                },4000)
            console.log(books)})
            .catch((err)=>{console.log(err)});}
            getBooks();},[URL]);
    const [data,setData] = useState({
        email:"",
        src:"",
        title:""
    })
    let favArray=[];
    const {email,src,title}=data;
    const [added,setAdded] = useState(false);
    const AddToFavourites =(book_key,book_title)=>{
            data.email = auth?.currentUser.email;
            data.src = `https://covers.openlibrary.org/b/olid/${book_key}-M.jpg`;
            data.title = book_title;
            console.log(data);
            const post_eml = data.email.substring(0,data.email.length-4);
            /*axios.get(`https://fav-books-27775-default-rtdb.firebaseio.com/favbooks-${post_eml}.json`)
            .then((response)=>{favArray = Object.values(response.data);console.log(favArray,favArray.includes(data))}).catch((err)=>{console.log(err)})
            if(favArray.includes(data))
            {
                alert("Book already exists in your favourites list !!")
            }
            else
            {}*/
            axios.post(`https://fav-books-27775-default-rtdb.firebaseio.com/favbooks-${post_eml}.json`,data)
            .then(alert("Added successfully !!")).catch((err)=>{console.log(err)});
        }
return <div>
            <div className="booklist">
                <h1>{result}</h1>
                {books.map((book)=>(
                    <div className="book">
                        <img onClick={()=>{BookDetails(book.key)}} src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} alt={book.title}></img>
                        <h6>{book.title.length > 25 ? book.title.substring(0,30)+`...`:book.title}</h6>
                        <h5 onClick={()=>{AddToFavourites(book.cover_edition_key,book.title)}}>Add To Favourites 🤍</h5>
                    </div>
                ))}
            </div>
            <Footer />
        </div>    
};
export default BookList;