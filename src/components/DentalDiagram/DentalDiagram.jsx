import React, { useContext, useState } from 'react'
import { Button, Card, Form, Select, Space, Input, InputNumber } from 'antd'
import { appContext } from '../../context/appContext'
import * as lists from "../../context/lists"
import './style.scss'

const DentalDiagram = ({saveData}) => {
    const children = false; //cambiar a true si es odontograma infantil
    const adultPieces = [
        18, 17, 16, 15, 14, 13, 12, 11,
        21, 22, 23, 24, 25, 26, 27, 28,
        31, 32, 33, 34, 35, 36, 37, 38,
        48, 74, 46, 45, 44, 43, 42, 41
    ]

    const childrenPieces = [
        55, 54, 53, 52, 51,
        61, 62, 63, 64, 65,
        71, 72, 73, 74, 75,
        85, 84, 83, 82, 81
    ]


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

    //{children ? (<h1>Dientes permanentes</h1>):(<h1>Odontograma</h1>)}
    let divActive = 'true'; //puede ser necesario cambiarlo por un useState si no renderiza cambios
    return(
        <div className='dental_diagram'>
            <div className='diagram_container'>
                {adultPieces.map((tooth, i) => (
                    <div className='visual_tooth_container'>
                        {[...Array(5)].map((_, j) => {
                            const isChecked = document.getElementById(`tooth_${tooth}_area_${i}`)
                            return(<>
                            <div className={`visual_checkbox_dental_diagram_${j} ${divActive}`} onClick={toggleExpand} />
                            </>)
                        })}
                    </div>
                ))}
            </div>
            
            <div className="options-container" >
                {isExpanded && (
                <Card title="Pieza Dental 12" className={`options-list ${isExpanded ? 'expanded' : ''}`}>
                    <Space align="start">
                        <Space className="space" direction="vertical">
                            <Form.Item label="Movilidad: ">
                                <Select 
                                    options={lists.movilityList}
                                    value={null}
                                    onChange={e => console.log(e)}
                                />
                            </Form.Item>
                            <Form.Item label="Sondaje Vestibular: ">
                                <InputNumber/>
                            </Form.Item>
                            <Form.Item label="Sondaje Palatino: ">
                                <InputNumber/>
                            </Form.Item>
                            <Form.Item label="Radiografia: ">
                                <Select
                                    options={lists.radiographyList}
                                    value={null}
                                    onChange={e => console.log(e)}
                                />
                            </Form.Item>
                        </Space>

                        <Space  className="space" direction="vertical">
                            <Form.Item label="Clasificacion: ">
                            </Form.Item>
                            <Form.Item label="ICDAS 1er: ">
                                <Select
                                    options={lists.icdasList}
                                    value={null}
                                    onChange={e => console.log(e)}
                                />
                            </Form.Item>
                            <Form.Item label="ICDAS 2do: ">
                                <Select
                                    options={lists.icdasList}
                                    value={null}
                                    onChange={e => console.log(e)}
                                />
                            </Form.Item>
                            <Form.Item label="BLACK: ">
                                <Select
                                    options={lists.blackList}
                                    value={null}
                                    onChange={e => console.log(e)}
                                />
                            </Form.Item>
                            
                        </Space>
                    </Space>
                    
                    <Form.Item label="Interpretacion:" layout="horizontal"> 
                        <Input.TextArea />
                    </Form.Item>
                </Card>
                )}
            </div>

            
            <Button variant='solid' color='primary' onClick={setResult}>Guardar</Button>
        </div>
    )
}

export default DentalDiagram;