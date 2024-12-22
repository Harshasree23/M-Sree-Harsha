import './ProjectHeading.css';


const ProjectHeading = (props) => {

    return(
        <>
            <div className='go-to-home' onClick={ () => { props.setPage("home") } }>
                <img src="home.png" alt="home" />
            </div>

            <div className='pro-name' >
                {props.heading}
            </div>
            
            { JSON.stringify( props.data ) }
        </>
    );
};

export default ProjectHeading;