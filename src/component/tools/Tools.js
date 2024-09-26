import './Tools.css';
// import React,{ useContext, useEffect } from 'react';

// import ToolContext from '../../App';
import { DateTime } from '../Date/Date';

export const Tools = () =>
{
    // const { toolVariable, setToolVariable } = useContext(ToolContext);

    // const handleVariableChange = () => {
    //     var selectElement = document.getElementById("tool-select");
    //     var selectedIndex = selectElement.value;
    //     setToolVariable(selectedIndex);
    // };

    // useEffect(() => {
    //     console.log(toolVariable);
    //   }, [toolVariable]);

    return(
        <>
        <div className='tools'>
            {
            /* <div className='tool-item'> 
                <img src='theme.png' alt="theme logo" />
            </div> */
            }
            <DateTime/>
           {/* <select className='tool-select' id='tool-select' onChange={handleVariableChange}>
                <option hidden> Animation Shape </option>
                <optgroup label='Animation shape'>
                    <option value="star"> Star </option>
                    <option value="circle"> Circle </option>
                    <option value="triangle"> Triangle </option>
                    <option value="square"> Square </option>
                    <option value="none"> None </option>
                </optgroup>
            </select> */}
            </div>
        </>
    );
};