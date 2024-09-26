// import { Banner } from '../Banner/Banner';
import { BounceWater } from '../BounceWater/BounceWater';
import './heading.css';


function Heading()
{
    return(
        <>
        <div className='my-name-container'>
            {/* <Banner/> */}
            <p className='munimadugu disappear'>Munimadugu </p>
            <p className='harsha disappear'>  Sree Harsha </p>
            <BounceWater top='-50' left='40' size='60' z='-1'/>
            <BounceWater top='80' left='5' size='20' />
            <BounceWater top='50' left='10' size='5' />
            <BounceWater top='45' left='5' size='3' />
            <BounceWater top='40' left='9' size='2' />
            <BounceWater top='60' left='0' size='10' />
        </div>
        </>
    );
}

export default Heading;