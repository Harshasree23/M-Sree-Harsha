import "./Desc.css";

const Desc = (props) => {

    return(
        <>
            <div className='desc-container' >
                <h1> {props.heading} </h1>
                { props.desc }
            </div>
        </>
    );
};


export default Desc;