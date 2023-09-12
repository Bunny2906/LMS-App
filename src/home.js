import React ,{useState,useContext,useEffect,useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import Nav from './navbar';
import Footer from './footer'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import { auth } from './firebase';
const URL = "https://openlibrary.org/search.json?title=";
function Home()
{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            console.log("invalid")
            navigate('/signin');
        }
    },[])
    const [searchItem,setSearchItem] = useState("");
    const handleChange = (e)=>{
        setSearchItem(e.target.value);
    }
    const fetchBooks = (e)=>{
        localStorage.setItem('searchInput',searchItem);
        navigate('/booklist')
    }
    return( 
        <div className='home'>
            <div className='main'>
                <h3 className='wlcmnote'>{`Welcome ${localStorage.getItem("name")}!!`}</h3>
                <div className='searchTerm'>
                    
                </div>
                <h1>Popular Books</h1>
                <div className='popbooks'>
                    <div className='book1'>
                        <img src={image1}></img>
                        <h5>Formal Languages and Automata Theory</h5>
                    </div>
                    <div className='book2'>
                        <img src={image2}></img>
                        <h5>Signals and Systems</h5>
                    </div>
                    <div className='book3'>
                        <img src={image3}></img>
                        <h5>DC Machines and Transformers</h5>
                    </div>
                    <div className='book4'>
                        <img src={image4}></img>
                        <h5>Web Technologies</h5>
                    </div>
                    <div className='book5'>
                        <img src={image5}></img>
                        <h5>Strength of Materials</h5>
                    </div>
                    <div className='book6'>
                        <img src={image6}></img>
                        <h5>Fluid Mechanics and Hydraulic Machines</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;
