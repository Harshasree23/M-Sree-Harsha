import './empty.css';


export function Empty(props)
{
    return(
        <>
        <div className="empty" >
            
            <div className='intro'>
                {props.name}
            </div>
        </div>
        </>
    )
}