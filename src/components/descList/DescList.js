import "./DescList.css";

const DescList = (props) => {
    const text = props.text;
    const split_text = text.split(",");

    return(
        <>
            <div className='desc-list'>
                <p> {props.heading} </p>
                <ul>
                    { split_text.map( (item, idx=0) => <li key={idx++} > {item} </li> ) }
                </ul>
            </div>
        </>
    );
};

export default DescList;