import './Clock.css';
import { useEffect, useState } from "react";

const Clock = () => {

    const [time,setTime] = useState( new Date().toLocaleTimeString() );
    const [date,setDate] = useState( new Date().toLocaleDateString() );

    useEffect( () => {
        const intervalId = setInterval( () => {
            setTime( new Date().toLocaleTimeString() );
            setDate( new Date().toLocaleDateString() ); 
        }, 1000 );  

        return () => clearInterval( intervalId );
    }, [] );

    return(
        <>
            <div className="clock" >
                <div className="time" >
                    { time }
                </div>
                <div className="date" >
                    { date }
                </div>
            </div>
        </>
    );
};

export default Clock;