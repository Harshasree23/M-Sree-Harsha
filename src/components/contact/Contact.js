import "./Contact.css"

const Contact = () => {
    return(
        <>
            <div className="contact-container" >

                <div className="contact-top">
                    <img src='my-logo.png' alt="My Logo" className="my-logo" />
                    <p className="name"> Munimadugu Sree Harsha </p>

                    <div className="contact-icons" >
                        <a href='https://github.com/Harshasree23' target='_blank' rel='noreferrer'> 
                            <Icon src="/footer/code.png" alt="Github" />
                            <p className="pop-up"> Harshasree23 </p>
                        </a>
                        <a href='mailto:sreeharshamunimadugu@gmail.com' target='_blank' rel='noreferrer'> 
                            <Icon src="/footer/email.png" alt="Email"  />
                            <p className="pop-up"> sreeharshamunimadugu@gmail.com </p>
                        </a>
                        <a href='https://www.linkedin.com/in/sreeharsha23/' target='_blank' rel='noreferrer'> 
                            <Icon src="/footer/linkedin-logo.png" alt="Linked in" />
                            <p className="pop-up"> sreeharsha23 </p>
                        </a>
                        <a href="./Sree_Harsha.pdf" download="SreeHarshaResume.pdf" >
                            <Icon src="download.png" alt="Resume" />
                            <p className="pop-up"> Resume </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

const Icon = (props) => {
    return(
        <>
            <img src={`${props.src}`} alt={`${props.alt}`} className='icons'/>
        </>
    )
}

export default Contact;