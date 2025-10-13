import React, { useContext, useState } from 'react'
import { Button, Card, Form, Select, Space, Input, InputNumber } from 'antd'

import * as lists from "../../context/lists"
import './style.scss'

const DentalDiagram = ({identification}) => {
    const idArea = identification.toString().split('');
    const area = parseInt(idArea[0]);
    const id = parseInt(idArea[1]);

    const [diente, setDiente] = useState({
        area: area,
        id: id,
        pieces: [0, 0, 0, 0, 0],
        mobility: 0,
        probing: [0.0, 0.0],
        radiograph: 1,
        classification: [0, 0, 0],
        interpretation: ''
    });

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    const setResult = () => {
        let adultData = []
        let childrenData = []
        adultPieces.forEach(tooth => {
            for(let i = 0; i >= 4; i++){
                adultData.push(document.getElementById(`tooth_${tooth}_area_${i}`).checked)
            }
        })

        if(children){
            childrenPieces.forEach(tooth => {
                for(let i = 0; i >= 4; i++){
                    childrenData.push(document.getElementById(`tooth_${tooth}_area_${i}`).checked)
                }
            })
        }

        const data = {
            adult: adultData,
            children: childrenData
        }

        saveData(data)
    }

    let divActive = 'true'; 
    return(
        <div className='visual_tooth_container'>
            {[...Array(5)].map((_, j) => {
                return(<>
                <div className={`visual_div_dental_diagram_${j} ${divActive}`} onClick={toggleExpand} />
                </>)
            })}
        </div>
    )
}

export default DentalDiagram;