import { CertificateContainer } from '../certificates/CertificatesContainer';
import { Loader } from '../Loader/Loader';
import './certificate.css';
import React, { useState, useEffect } from 'react';

export function Certificate() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [length,setLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch("https://hapi-sfpz.onrender.com/api/certifications");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setLength(json.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);


  const handleCertificates = () => {
    if (!data) {
      return null; 
    }
    let idx=1;
    return data.map((certi) => ( 
      <CertificateContainer key={idx} position={idx++} total={length} content={certi} /> 
    ));
  };

  return (
    <div id="Certificates" className="certificate-container">
      {isLoading ? (
        <div className='loading'>
          <Loader/>
        </div> 
      ) : (
        <div className='rotate-class' style={{ "--quantity":`${length}` }}>
          <div className='rotate-slider cylinder' style={{ "--quantity":`${length}` }}>
            {handleCertificates()}
          </div>
        </div>
      )}
    </div>
  );
}