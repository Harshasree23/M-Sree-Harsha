import './Exp.css';
import { useState } from 'react';
// import { Loader } from '../Loader/Loader';
import { InView } from 'react-intersection-observer';

const Exp = () => {

    const [inView, setInView] = useState(false);

    return(
        <>
            <div className='exp-section' >
                <InView
                        as="div"
                        className='heading'
                        triggerOnce={false}  
                        threshold={0.45}     
                        onChange={ (inView) => setInView(inView)  }
                    >
                    <p  id="heading" className={inView ? 'in-view' : ''} > Experience </p>
                </InView>
            </div>
        </>
    );
}

export default Exp;