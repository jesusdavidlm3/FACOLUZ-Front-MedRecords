import React, { useContext, useState } from 'react'
import { Button, Card, Form, Select, Space, Input, InputNumber } from 'antd'

import * as lists from "../../context/lists"
import './style.scss'

const Tooth = ({identification,expandedMenu}) => {
    const idArea = identification.toString().split('');
    const area = parseInt(idArea[0]);
    const id = parseInt(idArea[1]);
    const pieces = useState([0, 0, 0, 0, 0]);
    const mobility = useState(0);
    const probing = useState([0.0, 0.0]);
    const radiograph = useState(1);
    const classification = useState([0, 0, 0]);
    const interpretation = useState('');

        
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
    
    const sendDataTooth = () => {
        const dataTooth = {
            area: area,
            id: id,
            pieces: pieces,
            mobility: mobility,
            probing: probing,
            radiograph: radiograph,
            classification: classification,
            interpretation: interpretation
        }
        console.log(dataTooth);
        return (dataTooth);
    }

    let divActive = 'true'; 
    return(
        <div className='visual_tooth_container' onClick={expandedMenu}>
            {[...Array(5)].map((_, j) => {
                return(<>
                <div className={`visual_div_dental_diagram_${j} ${divActive}`} />
                </>)
            })}
        </div>
    )
}

export default Tooth;