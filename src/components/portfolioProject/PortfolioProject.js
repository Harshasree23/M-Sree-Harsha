import ProjectHeading from '../projectHeading/ProjectHeading';
import './PortfolioProject.css';
import Skills from '../skills/Skills';
import ImageMatter from '../imageMatter/ImageMatter';
import Desc from '../Desc/Desc';
import DescList from '../descList/DescList';
import ProjectLinks from '../projectLinks/ProjectLinks';
import { InView } from 'react-intersection-observer';

const PortfolioProject = (props) => {
    return (
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
                            <ImageMatter src={props.data.images[1]} matter={props.data.description} />
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
                                desc="Used a component-based architecture and became familiar with the React.js environment.
                        By utilizing various React hooks and APIs from my server, H-API, I created a dynamic website.
                        Implemented a custom routing mechanism to display different projects and their information."
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
                                heading="Some notable features of my portfolio are : "
                                text="Caching, 
                            Component based Architecture,
                            Custom routing mechanism,
                            Simple UI,
                            Themes,
                            SPA"
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
                            <Desc
                                heading="Caching :"
                                desc='As this project uses APIs every time the page reloads a new request have to be made to 
                        the server reducing the performance of the site. To compensate this "Caching" is
                        used with the help of Local Storage once data is fetched , it retains for an hour.'
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
                            <ProjectLinks
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

export default PortfolioProject;
