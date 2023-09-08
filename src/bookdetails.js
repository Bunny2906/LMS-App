import React,{useState,useEffect} from "react";
import { useNavigate,useParams} from "react-router-dom";
import './books.css';
import axios from 'axios';
function BookDetails()
{
    const {id} = useParams();
    const [description,setDescription] = useState("");
    const [title,setTitle] = useState("");
    const [coverImg,setCoverImg] = useState("");
    const URL = `https://openlibrary.org/works/`;
    let response;
    useEffect(()=>{
        function getBookDetails()
        {
            axios.get(`${URL}${id}.json`)
            .then((res)=>{setCoverImg(`https://covers.openlibrary.org/b/id/${res.data.covers[0]}-M.jpg`);
            console.log(res.data);setTitle(res.data.title);setDescription(res.data.description ? (res.data.description):("no description found"))})
            .catch((err)=>{console.log(err)});
        }
        getBookDetails();
    },[id])
    return <div>
                <div className="bookdetails">
                    <h2 className="title">{title}</h2>
                    <img src={coverImg} alt={title}></img>
                    <p className="description"><u><h3>Description :</h3></u>{description}</p>
                </div>
           </div>
}
export default BookDetails;