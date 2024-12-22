import "./Badges.css";
import { Loader } from '../Loader/Loader';
import { useEffect , useState } from "react";
import { InView } from "react-intersection-observer";

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

const Badges = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inView,setInView] = useState(false);
    const [badgeView,setBadgeView] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // Try to load cached data with expiry
            const cachedData = getWithExpiry('badgeData');
            if (cachedData) {
                setData(cachedData);
                return;
            }
            // Fetch fresh data if no valid cache is available
            setIsLoading(true);
            try {
                const response = await fetch("https://hapi-sfpz.onrender.com/api/badges");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);

                // Save fetched data to localStorage with 1-hour expiration
                saveWithExpiry('badgeData', json, 3600000); // 1 hour = 3600000ms
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
            <div className="badges-container">
                <InView
                    as="div"
                    className='badges-heading'
                    triggerOnce={false}  
                    threshold={0.2}     
                    onChange={ (inView) => setInView(inView)  } >
                    <p  className={inView ? 'in-view' : ''}> Badges </p>
                </InView>
                {isLoading ? (
                    <div className="loading">
                        <Loader />
                    </div>
                ) : (
                <div className="badges">
                    {
                       data && data.map( ( item , idx ) => 
                            <InView
                                as="div"
                                className='badge'
                                key={idx}
                                triggerOnce={false}  
                                threshold={[0.8,0.2]}     
                                onChange={ (badgeView) => setBadgeView(badgeView)  }>
                                <div className={ badgeView ? 'badge-view img-leaves' : 'img-leaves' } >
                                    <img src={item.badgeUrl} alt="logo" />
                                    <img src="leaves.png" alt="leaves" />
                                    
                                </div>
                                <div className="caption"> {item.company} </div>
                            </InView>
                         )
                    }
            
                </div>
                ) }
            </div>
        </>
    );
};

export default Badges;