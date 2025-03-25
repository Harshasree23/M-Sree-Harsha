import { useState } from 'react';
import './Home.css';

const Home = (props) => {  

    const [settings,setSettings] = useState(false);
    const [rotated, setRotated] = useState(false);


    return(
        <>
            <div className="home-page">

                <div className="top-info" >
                    <div className='options'>
                        <div onClick={ () =>{ setSettings(!settings); setRotated(!rotated) } }className={`option ${rotated ? 'rotated' : ''}`}  >
                            <img src='settings.png' className={ props.isDarkMode ? 'dark-img' : 'light-img' } alt='settings' />
                        </div>

                        {
                            settings ? 
                            <>
                            <div className='menu-open'>
                                <div onClick={props.toggleTheme} className='option'>
                                    {
                                        props.isDarkMode ? 
                                        <img src='light_mode.png' className={ props.isDarkMode ? 'dark-img' : 'light-img' } alt='light mode' /> :
                                        <img src='dark_mode.png' className={ props.isDarkMode ? 'dark-img' : 'light-img' } alt='dark mode' />
                                    }
                                </div>
                            </div>
                            </> :
                            <></>
                        }  
                    </div>    
                </div>
                 
                
                <div className="skills" style={{ "--width":"250px" }}>
                    <div className='slider' style={{ "--quantity":"6" }}>
                        <div className='item' style={{ "--pos": "1" }}>MERN Developer</div>
                        <div className='item' style={{ "--pos": "2" }}>Version Control</div>
                        <div className='item' style={{ "--pos": "3" }}>UI / UX Design</div>
                        <div className='item' style={{ "--pos": "4" }}>React Native</div>
                        <div className='item' style={{ "--pos": "5" }}>API Testing</div>
                        <div className='item' style={{ "--pos": "6" }}>Data Structures</div>
                    </div>
                </div>

                <div className="my-name">
                    <p className="munimadugu" data-text="Munimadugu"> Munimadugu </p>
                    <p className="sree-harsha" data-text="Sree Harsha"> Sree Harsha </p>
                </div>
                
                <div className="my-pic" >
                    <img src="my-pic.png" alt="my-pic" />
                </div>

            </div>
        </>
    );
};




export default Home;