import './About.css';
import { InView } from 'react-intersection-observer';

const About = () => {
    return (
        <>
        <div className='about' >
            <InView threshold={0.45} triggerOnce={false}  >
                {({ inView, ref }) => (
                    <div ref={ref} className={`description ${inView ? 'in-view' : ''}`}>
                        <p>I am a computer science enthusiast exploring different technologies around.</p>
                    </div>  
                )}
            </InView>
            

            <InView threshold={0.45} triggerOnce={false}  >
                {({ inView, ref }) => (
                    <div ref={ref} className={`my-skills ${inView ? 'in-view' : ''}`}>
                        <ul>
                            <li>MERN Developer</li>
                            <li>Version Control</li>
                            <li>UI / UX</li>
                            <li>Databases</li>
                            <li>DSA</li>
                        </ul>
                    </div>
                )}
            </InView>
        </div>
        </>
    );
};

export default About;
