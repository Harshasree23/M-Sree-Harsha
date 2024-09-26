import './BounceWater.css';

export const BounceWater = (props) => 
{
    return(
        <>
        <div className='ball comeAndGo'
            style={{
                top: props.top+"%",
                left: props.left+"%",
                height: props.size+"rem",
                width: props.size+"rem",
                zIndex: props.z ? props.z : 1,
            }}
        >
        </div>
        </>
    )
}