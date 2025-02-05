import './Certifications.css';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { InView } from 'react-intersection-observer';


const Certifications = () => {

    const [inView, setInView] = useState(false);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Helper functions for localStorage with expiry
    const saveWithExpiry = (key, value, expiryTime) => {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + expiryTime, // Expiry time in milliseconds
        };
        localStorage.setItem(key, JSON.stringify(item));
    };

    const getWithExpiry = (key) => {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            // Remove expired data
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    };

    useEffect(() => {
            const fetchData = async () => {
                // Try to load cached data with expiry
                const cachedData = getWithExpiry('certificateData');
                if (cachedData) {
                    setData(cachedData);
                    return;
                }
    
                // Fetch fresh data if no valid cache is available
                setIsLoading(true);
                try {
                    const response = await fetch("https://hapi-sfpz.onrender.com/api/certifications");
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const json = await response.json();
                    setData(json);
    
                    // Save fetched data to localStorage with 1-hour expiration
                    saveWithExpiry('certificateData', json, 3600000); // 1 hour = 3600000ms
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setIsLoading(false);
                }
            };
    
            fetchData();
        }, []); 

    return(
        <>
            <div className='certi-container' >
                <InView
                            as="div"
                            className='heading'
                            triggerOnce={false}  
                            threshold={0.45}     
                            onChange={ (inView) => setInView(inView)  }
                        >
                    <p  id="heading" className={inView ? 'in-view' : ''} > Certificates </p>
                </InView>

                {isLoading ? (
                    <div className="loading">
                        <Loader />
                    </div>
                ) : (
                    <>
                    <div className='all-certificates' >
                        {data &&
                            data.map((item, index) => (
                                <div className='certificate' >
                                    <div className={inView ? 'certi-name in-view' : 'certi-name'} > {item.certificateName} </div>
                                    <div className={inView ? 'certi-skills in-view' : 'certi-skills'} >  { item.skills.map( (i) => ( <div className='skill' >{i}</div> ) ) } </div>
                                    <div className={inView ? 'certi-desc in-view' : 'certi-desc'} > { item.description } </div>
                                </div>
                            ))}
                    </div>
                       
                    </>
                )}
            </div>
        </>
    );
}



export default Certifications;