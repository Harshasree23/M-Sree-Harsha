import ProjectHeading from '../projectHeading/ProjectHeading';
import ImageMatter from '../imageMatter/ImageMatter';
import Skills from '../skills/Skills';
import Desc from '../Desc/Desc';
import DescList from '../descList/DescList';
import ProjectLinks from '../projectLinks/ProjectLinks';
import ImageMatterReverse from '../imageMatterReverse/ImageMatterReverse';
import { InView } from 'react-intersection-observer';
import './HapiProject.css';
import { useEffect } from 'react';

const HapiProject = (props) => {

     useEffect(() => {
            const handlePopState = (event) => {
              props.setPage("home");
            };
            window.addEventListener('popstate', handlePopState);
            window.history.pushState(null, null, window.location.href);
            return () => {
              window.removeEventListener('popstate', handlePopState);
            };
          }, [props,props.setPage]);

    return(
        <>
        <div className="project">

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
                <ProjectHeading heading={props.data.projectName} setPage={props.setPage} />
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <Skills skills={props.data.usedTechnologies} />
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <ImageMatter src={props.data.images[0]} matter={props.data.description} />
                </div>
            )}
            </InView>


            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <DescList heading="Some notable features of H-API server are : " 
                    text="Server Side Rendering,
                          Responsive,
                          MVC Architecture,
                          CURD operations through simple form filling,
                          Image Storing through Multer,
                          Cloudinary API,
                          Authentication
                          Password - session storage" />
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <Desc heading="MVC :"
                  desc='Used MVC (Model-View-Controller) architecture, to make clear seperation between the components
                        and their functionalities.' />
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <Desc heading="Server Side Rendering :"
                  desc='Made use of EJS ( Embedded JavaScript Templating ) to create a front-end for the server. This is a server side rendering
                  instead of client side rendering, used this to get a grip on SSR.' />
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <ImageMatterReverse src={props.data.images[1]} 
                                matter=" Add new data to API by simply filling a form. "/>
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <ImageMatter src={props.data.images[2]}
                         matter="Same for editing and deleting..." />
                </div>
            )}
            </InView>

            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <ProjectLinks setPage = {props.setPage}
                        projectLink = {props.data.link}
                        gitLink = {props.data.git} />
                </div>
            )}
            </InView>
        </div>
        </>
    );
};

export default HapiProject;