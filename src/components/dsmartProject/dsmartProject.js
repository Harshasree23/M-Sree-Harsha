import Desc from '../Desc/Desc';
import DescList from '../descList/DescList';
import ImageMatter from '../imageMatter/ImageMatter';
import Skills from '../skills/Skills';
import ProjectHeading from '../projectHeading/ProjectHeading';
import ProjectLinks from '../projectLinks/ProjectLinks';
import './dsmartProject.css';
import { InView } from 'react-intersection-observer';
import { useEffect } from 'react';

const DsmartProject = (props) => {

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
             <div className='project'>
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
                            <Desc
                                desc="Used a component-based architecture and became familiar with the React Native environment.
                                    React Native App D-SMART acts as a Frontend , 
                                    Backend is done with ExpressJs , 
                                    DataBase is MongoDB. This app serves the purpose of collecting data and displaying
                                    it in different forms and performs various calculations to classify users. ( For Phd purpose )"
                            />
                        </div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`animated-component ${inView ? 'in-view' : ''}`}
                        >
                            <DescList
                                heading="Some notable features of my D-SMART are : "
                                text="Caching, 
                            Component based Architecture,
                            Simple UI,
                            Data Visualization,
                            Download Data in Excel,
                            MVC Architectured Server,
                            Authentication"
                            />
                        </div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`animated-component ${inView ? 'in-view' : ''}`}
                        >
                            <div className='img-container'>
                                
                                <p className='img-matter'> Simple User Interface :<br></br>
                                Designed and implemented a user-friendly interface by adhering to best UI/UX principles, ensuring simple navigation and enhanced usability. 
                                </p>

                                <img src={props.data.images[4]}
                                     alt='img' 
                                     style={{ height:"35rem" }}/>
                            </div>
                            
                        </div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`animated-component ${inView ? 'in-view' : ''}`}
                        >
                            <div className='img-container'>
                                
                            <img src={props.data.images[2]}
                                     alt='img' 
                                     style={{ height:"35rem" }}/>

                            <img src={props.data.images[3]}
                                     alt='img' 
                                     style={{ height:"35rem" }}/>

                                <p className='img-matter'> Data Visualization :<br/>
                                Dynamic data visualization techniques to process and display collected data through interactive graphs,
                                automated calculations of key statistical metrics such as cutoffs, mean, etc ... 
                                enabling efficient analysis and decision-making. 
                                </p>

                            </div>
                            
                        </div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`animated-component ${inView ? 'in-view' : ''}`}
                        >
                            <ProjectLinks
                                disabled = {true}
                                setPage={props.setPage}
                                projectLink={props.data.link}
                                gitLink={props.data.git}
                            />
                        </div>
                    )}
                </InView>
            </div>
        </>
    );
};

export default DsmartProject;