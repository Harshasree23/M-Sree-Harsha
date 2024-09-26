import "./CertificatesContainer.css";

export function CertificateContainer(props)
{
    const skills = props.content.skills;
    return(
        <>
        <div className="item" style={{ "--pos":props.position , "--qua":props.total }}>
            <div className="certificate"  >
                <div className="certificate-heading"> 
                    {props.content.certificateName}
                </div>
                <div className="certificate-usedTechnologies">
                {skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
                </div>
                <div className="certificate-desc">
                    {props.content.description}
                </div>
                <div className="certificate-link">
                    <a href={props.content.verify} target="blank">certificate Link</a>
                </div>
            </div>
        </div>
        </>
    );
}