import React,{useState,useEffect} from "react";
import axios from 'axios';
function BookDetails(book_id)
{
    const URL = `https://openlibrary.org/works/${book_id}.json`;
    useEffect(()=>{
        axios.get(URL).then((response)=>{console.log(response.data)})
        .catch((err)=>{console.log(err)})
    })
    return <div>

            </div>
}
export default BookDetails;