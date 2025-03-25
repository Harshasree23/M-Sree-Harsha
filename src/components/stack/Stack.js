import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { InView } from 'react-intersection-observer';
import './Stack.css';

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

const Stack = (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // Try to load cached data with expiry
            const cachedData = getWithExpiry('projectData');
            if (cachedData) {
                setData(cachedData);
                return;
            }

            // Fetch fresh data if no valid cache is available
            setIsLoading(true);
            try {
                const response = await fetch("https://hapi-sfpz.onrender.com/api/projects");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);

                // Save fetched data to localStorage with 1-hour expiration
                saveWithExpiry('projectData', json, 3600000); // 1 hour = 3600000ms
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); 

    const handleProjectClick = ( data ) => {
        props.setPageData( data );
        props.setPage( data.projectName );
    };

    return (
        <>
            <div className="stack-container">
                <InView
                    as="div"
                    className='stack-back'
                    triggerOnce={false}  
                    threshold={0.45}     
                    onChange={ (inView) => setInView(inView)  }
                >
                    <p  id="heading" className={inView ? 'in-view' : ''} > My Work </p>
                </InView>
                
                {isLoading ? (
                    <div className="loading">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {data &&
                            data.slice().reverse().map((item, index) => (
                                <div
                                    key={index}
                                    className="stack-children"
                                    onClick={() => handleProjectClick(item)}
                                >
                                    <div className="project-name">{item.projectName}</div>
                                    <div className="project-img">
                                        <div className="project-images" style={{ gridArea: "img1" }}>
                                                <img src={item.images[0]} alt={item.projectName} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </>
                )}
            </div>
        </>
    );
};

export default Stack;
