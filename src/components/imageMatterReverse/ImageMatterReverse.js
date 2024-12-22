import "./ImageMatterReverse.css";

const ImageMatterReverse = (props) => {

    return(
        <>
            <div className="image-matter-reverse" >

                <div className='pro-image-matter' >
                    {props.matter}
                </div>

                <div  className='pro-image' >
                    <img src={props.src} alt={props.alt}/>
                </div>

            </div>      
        </>
    );
};

export default ImageMatterReverse;