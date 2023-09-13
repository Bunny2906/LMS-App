import React,{useState,useEffect} from "react";
import { useNavigate,useParams} from "react-router-dom";
import Footer from './footer';
import './books.css';
import axios from 'axios';
function BookDetails()
{
    const {id} = useParams();
    const [description,setDescription] = useState("");
    const [title,setTitle] = useState("");
    const [coverImg,setCoverImg] = useState("");
    const [subjects,setSubjects] = useState([]);
    const [authorKey,setAuthorKey] = useState("");
    const [authorName,setAuthorName] = useState("");
    const URL = `https://openlibrary.org/works/`;
    useEffect(()=>{
        function getBookDetails()
        {
            axios.get(`${URL}${id}.json`)
            .then((res)=>{setCoverImg(`https://covers.openlibrary.org/b/id/${res.data.covers[0]}-M.jpg`);
            setTitle(res.data.title);
            setDescription(res.data.description ? (res.data.description):("No description found"));
            setSubjects(res.data.subjects.slice(0,10));setAuthorKey(res.data.authors[0].author.key.substring(9,19));console.log(authorKey);}).catch((err)=>{console.log(err)});
        }
        getBookDetails();
    },[id])
    axios.get(`https://openlibrary.org/authors/${authorKey}.json`).then((response)=>{console.log(response.data);setAuthorName(response.data.personal_name)})
    return <div>
               <div className="bookdetails">
                    <h2 className="title">{title}</h2>
                    <img src={coverImg} alt={title}></img>
                    <p className="description"><u><h3>Description :</h3></u>{description}</p>
                    <h3 className="author"><u>Author:</u>{" "+authorName}</h3>
                    <h4 className="subjects"><u>Subjects:</u>{subjects? "  "+subjects.join("/"):" No subjects found"}</h4>
                </div>
                <Footer />
           </div>
}
export default BookDetails;
