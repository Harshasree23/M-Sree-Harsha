import './Home.css';
import Clock from "../clock/Clock";

const Home = (props) => {  

    return(
        <>
            <div className="home-page">
                <div className="top-info" >
                    <Clock />
                    <div className="my-desc" >
                        <p> I am a computer science enthusiastic exploring differnent technologies around </p>
                    </div>
                    <div className="skills" >
                        <ul>
                            <li>MERN Developer</li>
                            <li>Version Control</li>
                            <li>UI / UX</li>
                            <li>Data Bases</li>
                            <li>DSA</li>
                        </ul>
                    </div>
                </div>
                
                <div className='other-tools' >
                    <div onClick={props.toggleTheme} className='theme'>
                        <img src='theme.png' className={ props.isDarkMode ? 'dark-img' : 'light-img' } alt='theme' /> 
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