import "./Skills.css";

const Skills = (props) => {

    return(
        <>
            <div className='skills-container' >
                <p className='tech'> Technologies </p>
                <div className='skills'>
                    { props.skills.map( ( item , id=0 ) => <p key={id++}> { item } </p> ) }
                </div>
            </div>
            
        </>
    );
};

export default Skills;