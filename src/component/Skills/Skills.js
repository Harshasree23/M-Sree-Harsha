import './Skills.css';
import React,{useEffect , useState} from 'react';
import { SkillContainer } from '../SkillContainer/SkillContainer';
import { Loader } from '../Loader/Loader';
// import { BounceWater } from '../BounceWater/BounceWater';


export const Skills = () => 
{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 
  
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true); 
        try {
          const response = await fetch("https://hapi-sfpz.onrender.com/api/skills");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false); 
        }
      };
  
      fetchData();
    }, []);
  
    const handleSkills = () => {
      if (!data) {
        return null; 
      }
      let idx=0;
      return data.map((skill) => ( 
        <SkillContainer key={idx} position={idx++} content={skill} /> 
      ));
    };
  
    return (
      <div id="Skills" className="skill-container">
        {isLoading ? (
          <div className='loading'>
            <Loader/>
          </div> 
        ) : (
         handleSkills()
        )}
      </div>
    );
};