import "./Contact.css"

const Contact = () => {
    return(
        <>
            <div className="contact-container" >
                    
                    <img src='my-logo.png' alt="My Logo" className="my-logo" />
                    
                    <div className="address">
                        <p style={{paddingLeft:"2rem"}}>
                            Rami Reddy Tata street
                        </p>
                        <p style={{paddingLeft:"2rem"}} >Kallur</p>
                        <p style={{paddingLeft:"2rem"}} >Kurnool</p>
                        <p style={{paddingLeft:"2rem"}} >Andhra Pradesh</p>
                        <p style={{paddingLeft:"2rem"}} >India</p>
                    </div>

                    <div style={{ display:"flex" , flexDirection:"column" , justifyContent:"space-between" }} >

                        <div className="name-icons" style={{ display:"flex",gap:"4rem",paddingBottom:"2rem",borderBottom:".2rem solid var(--middletrans)" }} >
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

                        <div className="footer-skills" style={{ columns:"3" , padding:"1rem" }} >
                            <ul>
                                <li>FrontEnd Languages</li>
                                <li>Java</li>
                                <li>Node Js</li>
                                <li>Express Js</li>
                                <li>React JS</li>
                                <li>React Native</li>
                                <li>MongoDB</li>
                                <li>API Integration</li>
                                <li>SEO Optimization</li>
                                <li>Version control</li>
                                <li>SQL</li>
                            </ul>
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