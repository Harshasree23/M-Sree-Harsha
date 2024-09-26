import './App.css';
import Heading from './component/Header/Header.js';
import { NavBar } from './component/Navbar/NavBar.js';
// import { SkillBar } from './component/SkillBar/SkillBar.js';
// import InteractiveBackground from './component/Interactive/InteractiveBackground.js';
import { Empty } from './component/Empty/Empty.js';
// import { Projects } from './component/Projects/Projects.js';
import { Certificate } from './component/certifiacte/Certificate.js';
import { Contact } from './component/Contact/Contact.js';
import { Tools } from './component/tools/Tools.js';
import { Skills } from './component/Skills/Skills.js';
import { About } from './component/About/About.js';
import SlideShow from './component/SlideShow/SlideShow.js';




// import { createContext, useState } from 'react';

// const ToolContext = createContext();

// export const ToolProvider = ({ children }) => {
//   const [toolVariable, setToolVariable] = useState('circle'); // Replace with your initial value

//   return (
//     <ToolContext.Provider value={{ toolVariable, setToolVariable }}>
//       {children}
//     </ToolContext.Provider>
//   );
// };


export function App() {

  return (
    <>
      {/* <ToolProvider> */}
        {/* <InteractiveBackground/> */}
        <Tools/>
      {/* </ToolProvider> */}
        <Heading/>
        <About/>
        <NavBar/>
        <Empty name='Skills'/>
        <Skills/>
        {/* <SkillBar /> */}
        <Empty name='Projects'/>
        {/* <Projects/> */}
        <SlideShow/>
        <Empty name='Certifications'/>
        <Certificate/>
        <Contact/>
    </>  
  );
}

// export default ToolContext;