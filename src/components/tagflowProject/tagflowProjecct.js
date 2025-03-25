import ProjectHeading from '../projectHeading/ProjectHeading';
import ImageMatter from '../imageMatter/ImageMatter';
import Skills from '../skills/Skills';
import Desc from '../Desc/Desc';
import DescList from '../descList/DescList';
import ProjectLinks from '../projectLinks/ProjectLinks';
import ImageMatterReverse from '../imageMatterReverse/ImageMatterReverse';
import { InView } from 'react-intersection-observer';
import './tagflowProject.css';
import { useEffect } from 'react';

const TagFlowProject = (props) => {

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
            <Desc desc="This system streamlines office or campus operations using fixed RFID readers and pre-tagged user ID cards. By leveraging Radio-Frequency Identification (RFID) technology, which enables contactless identification, it eliminates the need for manual check-ins. Users are categorized into Admins, Staff, and Members, each with role-specific dashboards for efficient information access and management. This project effectively integrates hardware and software to simplify daily activities, enhancing security and operational efficiency." />
                </div>
            )}
            </InView>


            <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`animated-component ${inView ? 'in-view' : ''}`}
                >
            <DescList heading="Some notable features of Tag Flow server are : " 
                    text="JWT Authentication,
                        MVC,
                        Web Sockets,
                        Mail Sending ( Node Mailer ),
                        Hardware and Software Integration,
                        Scheduled task server
                        " />
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
            <ImageMatterReverse src={props.data.images[1]} 
                                matter=" Utilized Socket.IO for real-time transmission of scanned card data to the front-end. "/>
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
                         matter="Role-specific dashboards designed for optimal efficiency, offering a clean, user-friendly interface and rapid access to critical data. Personalized layouts ensure each user interacts with the most relevant information." />
                </div>
            )}
            </InView>

            <ImageMatter src={props.data.images[3]} />
            <ImageMatterReverse src={props.data.images[4]} 
                                matter=" Send mails to us by simply filling a form "/>

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

export default TagFlowProject;