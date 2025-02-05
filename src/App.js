import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Home from './components/home/Home';
import Stack from './components/stack/Stack';
import ProjectHeading from './components/projectHeading/ProjectHeading';
import Badges from './components/badges/Badges';
import PortfolioProject from './components/portfolioProject/PortfolioProject';
import HapiProject from './components/hapiProject/HapiProject';
import DsmartProject from './components/dsmartProject/dsmartProject';
// import Exp from './components/exp/Exp';
import Certifications from './components/certifications/Certifications';


function App() {
  const [page,setPage] = useState("home");
  const [pageData,setPageData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const newTheme = !isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  };

  useEffect( () => {
    window.scrollTo(0,0);
  } , [page] );
 
  const renderPage = () => {
    switch(page)
    {
      case "home":
        return  <>
                <div className={`app ${isDarkMode ? 'dark-theme' : ''}`} >
                  <Cursor/>
                  <Home toggleTheme={toggleTheme}  isDarkMode={isDarkMode} />
                  <Stack setPage={setPage} setPageData={setPageData} />
                  {/* <Exp /> */}
                  <Certifications />
                  <Badges />
                  <Contact />
                </div>
                </>;
      case "Portfolio":
        return <>
                <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}  >
                    <Cursor />
                    <PortfolioProject setPage={setPage} data={pageData} />
                </div> 
               </>
      case "H-API":
        return <>
                <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}  >
                    <Cursor />
                    <HapiProject setPage={setPage} data={pageData} />
                </div> 
               </>
      case "D-SMART":
        return <>
              <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}  >
                <Cursor />
                <DsmartProject setPage={setPage} data={pageData} />
              </div>
        </>
      default:
        return <>
                <div className={`app ${isDarkMode ? 'dark-theme' : ''}`} >
                  <Cursor /> 
                  <ProjectHeading setPage={setPage}  heading="On-going" />
                  <h1>Details will be uploaded soon ...</h1>
                </div>
               </>
    }
  }

  return (
    <>
      { renderPage() }
    </>
  );
}

export default App;
