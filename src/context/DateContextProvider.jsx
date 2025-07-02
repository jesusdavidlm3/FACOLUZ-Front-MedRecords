import { dateContext } from "./dateContext";
import React, { useState } from "react";

const DateContextProvider = ({children}) => {

    const [consultationReason, setConsultationReason] = useState()
    const [currentDisease, setCurrentDisease] = useState()
    const [treatment, setTreatment] = useState()
    const [treatmentDescription, setTreatmentDescription] = useState()
    const [lastDate, setLastDate] = useState()
    const [bifosfonato, setBifosfonato] = useState()
    const [bifosfonatoDescription, setBifosfonatoDescription] = useState()
    const [anesthesia, setAnesthesia] = useState()
    const [anesthesiaDescription, setAnesthesiaDescription] = useState()
    const [alergy, setAlergy] = useState()
    const [alergyDescription, setAlergyDescription] = useState()
    const [cancer, setCancer] = useState()
    const [cancerType, setCancerType] = useState()
    const [cancerTreatment, setCancerTreatment] = useState()
    const [cancerLocation, setCancerLocation] = useState()
    const [cancerDate, setCancerDate] = useState()
    const [menstruation, setMenstruation] = useState()
    const [pregnacy, setPregnacy] = useState()
    const [pregnacyTime, setPregnacyTime] = useState()
    const [pregnacyControl, setPregnacyControl] = useState()

    return(
        <dateContext.Provider value={{
            consultationReason,
            setConsultationReason,
            currentDisease,
            setCurrentDisease,
            treatment,
            setTreatment,
            treatmentDescription,
            setTreatmentDescription,
            lastDate,
            setLastDate,
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
        }}>
            {children}
        </dateContext.Provider>
    )
}

export default DateContextProvider;