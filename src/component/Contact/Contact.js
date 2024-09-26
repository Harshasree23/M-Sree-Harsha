import './Contact.css';

export const Contact = () =>
{
    return(
        <>
        <footer id='Contact'>
            <div className='footer-img'>
                <img src='me.png' alt='my image'/>
            </div>
            <div className="contact">
                <div className='info'>
                    <div className='title'> Developer :</div>
                    <div className='ans' > M. Sree Harsha </div>
                </div>
                <div className='info'>
                    <div className='title'> Email :</div>
                    <div className='ans'> marvelavengersharsha@gmail.com </div>
                </div>
                <div className='links' rel="noreferrer" target='_blank'>

                    <a href='https://github.com/Harshasree23' target='_blank' rel='noreferrer'>
                        <img src='/footer/code.png' alt='Git' />
                    </a>
                    
                    <a href='mailto:marvelavengersharsha@gmail.com?subject=Contacting%20Harsha&body=Hi%20Harsha,'>
                        <img src='/footer/email.png' alt='Email' />
                    </a>

                    <a href='https://www.linkedin.com/in/sreeharsha23/' target='_blank' rel='noreferrer'>
                        <img src='/footer/linkedin-logo.png' alt='LinkedIn' />
                    </a>
                    
                </div>
            </div>
        </footer>
        </>
    );
};