import "./ProjectLinks.css";

const ProjectLinks = (props) => {

    const style = props.disabled ? "no-link" : "link";
    return(
        <>
            <div className='links-container'>
                <div className={style}>
                    {/* <img src='code.png' alt='code.png' /> */}
                    <a href={ props.projectLink } target="_blank" rel="noreferrer" >
                        <p > Project link : { props.projectLink } </p>
                    </a>
                    
                </div>
                <div className={style}>
                    {/* <img src='code.png' alt='code.png' /> */}
                    <a href={ props.gitLink } target="_blank" rel="noreferrer" >
                        <p > Git link : { props.gitLink } </p>
                    </a>
                </div>
                <div className='return-home' onClick={ () => { props.setPage("home") } }>
                    Back to Home
                </div>
            </div>

            
        </>
    );
};


export default ProjectLinks;