import { dateContext } from "./dateContext";
import React, { useState } from "react";

const DateContextProvider = ({children}) => {

    const [consultationReason, setConsultationReason] = useState()
    const [currentDisease, setCurrentDisease] = useState()
    const [treatment, setTreatment] = useState()
    const [bifosfonato, setBifosfonato] = useState()
    const [bifosfonatoDescription, setBifosfonatoDescription] = useState()
    const [anesthesia, setAnesthesia] = useState()
    const [anesthesiaDescription, setAnesthesiaDescription] = useState()
    const [alergy, setAlergy] = useState()
    const [alergyDescription, setAlergyDescription] = useState()
    const [forecast, setForecast] = useState()
    const [observations, setObservations] = useState()
    
    //Cancer
    const [cancer, setCancer] = useState()
    const [cancerType, setCancerType] = useState()
    const [cancerTreatment, setCancerTreatment] = useState()
    const [cancerLocation, setCancerLocation] = useState()
    const [cancerDate, setCancerDate] = useState()

    //pregnacy
    const [menstruation, setMenstruation] = useState()
    const [pregnacy, setPregnacy] = useState()
    const [pregnacyTime, setPregnacyTime] = useState()
    const [pregnacyControl, setPregnacyControl] = useState()

    //ailments
    const [ailments, setAilments] = useState([])
    const [cardioAffection, setCardiopAffection] = useState()
    const [hematoAffection, setHematoAffection] = useState()
    const [renalAffection, setRenalAffection] = useState()
    const [neuroAffection, setNeuroAffection] = useState()
    const [hepaticAffection, setHepaticAffection] = useState()

    const [bloodType, setBloodType] = useState()
    const [proneToBleeding, setProneToBleeding] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [complementaryTests, setComplementaryTests] = useState()
    
    const [sys, setSys] = useState()
    const [dia, setDia] = useState()
    const [bpm, setBpm] = useState()
    const [temp, setTemp] = useState()

    //physicalExamination
    const [gangliosTest, setGangliosTest] = useState()
    const [faceTest, setFaceTest] = useState()
    const [atmTest, setAtmTest] = useState()
    const [mascMusclesTest, setMascMusclesTest] = useState()
    
    //intraoralExamination
    const [lipsTest, setLipsTest] = useState()
    const [mucouseTest, setMucouseTest] = useState()
    const [hardPalateTest, setHardPalateTest] = useState()
    const [softPalateTest, setSoftpalateTest] = useState()
    const [toungueTest, setToungueTest] = useState()
    const [mouthFloorTest, setMouthFloorTest] = useState()
    const [spitGlandTest, setSpitGlandTest] = useState()

    //gumEvaluation Color
    const [gumColor, setGumColor] = useState()
    const [gumColorArea, setGumColorArea] = useState()
    const [gumColorLocation, setGumColorLocation] = useState()
    const [gumColorAccentuated, setGumColorAccentuated] = useState()

    //gumEvaluation Size
    const [gumEnlargement, setGumEnlargement] = useState()
    const [gumEnlargementArea, setGumEnlargementArea] = useState()
    const [gumEnlargementLocation, setGumEnlargementLocation] = useState()
    const [gumEnlargementAccentuated, setGumEnlargementAccentuated] = useState()

    //gumEvaluation Consistency
    const [gumConsistency, setGumConsistency] = useState()
    const [gumConsistencyLocation, setGumConsistencyLocation] = useState()
    const [gumConsistencyAccentuated, setGumConsistencyAccentuated] = useState()
    
    //gumEvaluation Position
    const [gumPosition, setGumPosition] = useState()
    const [gumPositionLocation, setGumPositionLocation] = useState()
    const [gumPositionAccestuated, setGumPositionAccentuated] = useState()

    //gumEvaluation Form
    const [gumForm, setGumForm] = useState()
    const [gumFormLocation, setGumFormLocation] = useState()
    const [gumFormAccentuated, setGumFormAccentuated] = useState()

    return(
        <dateContext.Provider value={{
            consultationReason,
            setConsultationReason,
            currentDisease,
            setCurrentDisease,
            treatment,
            setTreatment,
            bifosfonato,
            setBifosfonato,
            bifosfonatoDescription,
            setBifosfonatoDescription,
            anesthesia,
            setAnesthesia,
            anesthesiaDescription,
            setAnesthesiaDescription,
            alergy,
            setAlergy,
            alergyDescription,
            setAlergyDescription,
            cancer,
            setCancer,
            cancerType,
            setCancerType,
            cancerTreatment,
            setCancerTreatment,
            cancerLocation,
            setCancerLocation,
            cancerDate,
            setCancerDate,
            menstruation,
            setMenstruation,
            pregnacy,
            setPregnacy,
            pregnacyTime,
            setPregnacyTime,
            pregnacyControl,
            setPregnacyControl,
            ailments,
            setAilments,
            bloodType,
            setBloodType,
            proneToBleeding,
            setProneToBleeding,
            height,
            setHeight,
            weight,
            setWeight,
            complementaryTests,
            setComplementaryTests,
            cardioAffection,
            setCardiopAffection,
            hematoAffection,
            setHematoAffection,
            renalAffection,
            setRenalAffection,
            neuroAffection,
            setNeuroAffection,
            hepaticAffection,
            setHepaticAffection,
            sys,
            setSys,
            dia,
            setDia,
            bpm,
            setBpm,
            temp,
            setTemp,
            gangliosTest,
            setGangliosTest,
            faceTest,
            setFaceTest,
            atmTest,
            setAtmTest,
            mascMusclesTest,
            setMascMusclesTest,
            lipsTest,
            setLipsTest,
            mucouseTest,
            setMucouseTest,
            hardPalateTest,
            setHardPalateTest,
            softPalateTest,
            setSoftpalateTest,
            toungueTest,
            setToungueTest,
            mouthFloorTest,
            setMouthFloorTest,
            spitGlandTest,
            setSpitGlandTest,
            forecast,
            setForecast,
            gumColor,
            setGumColor,
            gumColorArea,
            setGumColorArea,
            gumColorLocation,
            setGumColorLocation,
            gumColorAccentuated,
            setGumColorAccentuated,
            gumEnlargement,
            setGumEnlargement,
            gumEnlargementArea,
            setGumEnlargementArea,
            gumEnlargementLocation,
            setGumEnlargementLocation,
            gumEnlargementAccentuated,
            setGumEnlargementAccentuated,
            gumConsistency,
            setGumConsistency,
            gumConsistencyLocation,
            setGumConsistencyLocation,
            gumConsistencyAccentuated,
            setGumConsistencyAccentuated,
            gumPosition,
            setGumPosition,
            gumPositionLocation,
            setGumPositionLocation,
            gumPositionAccestuated,
            setGumPositionAccentuated,
            gumForm,
            setGumForm,
            gumFormLocation,
            setGumFormLocation,
            gumFormAccentuated,
            setGumFormAccentuated,
            observations,
            setObservations
        }}>
            {children}
        </dateContext.Provider>
    )
}

export default DateContextProvider;