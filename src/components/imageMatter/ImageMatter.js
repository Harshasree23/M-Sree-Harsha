import "./ImageMatter.css";

const ImageMatter = (props) => {

    return(
        <>
            <div className="image-matter" >
                
                <div className='pro-image' >
                    <img style={ props.style || undefined } src={props.src} alt={props.alt}/>
                </div>

                <div className='pro-image-matter' >
                    { props.matter }
                </div>
            </div>      
        </>
    );
};

export default ImageMatter;