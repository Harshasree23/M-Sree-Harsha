import "./SkillContainer.css";

export function SkillContainer(props)
{

    return(
        <>
        <div  className="skills comeAndGo">
                <div className="Skill-heading"> 
                    {props.content.skillName}
                </div>
                <div className="Skill-desc">
                    {props.content.description}
                </div>
        </div>
        </>
    );
}