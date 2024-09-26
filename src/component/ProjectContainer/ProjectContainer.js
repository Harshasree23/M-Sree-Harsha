import "./ProjectContainer.css";

export function ProjectContainer(props)
{
    const technologies = props.content.usedTechnologies;
    return(
        <>
        <div  className="projects">
            {/* <div className="project-card" >
                <div className="project-heading"> 
                    {props.content.projectName}
                </div>
                <div className='open'>
                    <img src='open_in_new.png' alt='open in new'/>
                </div> 
                <div className='short-desc'>
                    Restfull API server
                </div>
                
            </div> */}
            <div className="Project">
                <div className="project-heading"> 
                    {props.content.projectName}
                </div>
                <div className="project-usedTechnologies">
                {technologies.map((technology, index) => (
                    <span key={index}>{technology}</span>
                ))}
                </div>
                <div className="project-desc">
                    {props.content.description}
                </div>
                <div className="project-link">
                    <a href={props.content.link} target="blank">Project Link</a>
                </div>
                <div className="project-git">
                    <img src='code.png' alt="git"/>
                    <a href={props.content.git} target="blank">Git</a>
                </div>
            </div>
        </div>
        </>
    );
}