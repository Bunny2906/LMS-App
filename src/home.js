import Nav from './navbar';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
function home()
{
    return(
        
        <div className='home'>
            <Nav />
            <div className='main'>
                <input type='text' className='bookinput' placeholder='Search for books'></input>
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
        </div>
    )
}
export default home;