import { historyContext } from "./historyContext";
import React, { useState } from "react";

const HistoryContextProvider = ({children}) => {
    
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [birthDate, setBirthDate] = useState()
    const [sex, setSex] = useState()
    const [birthPlace, setBirthPlace] = useState()
    const [phone, setPhone] = useState()
    const [municipality, setMunicipality] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [bloodType, setBloodType] = useState()
    const [religion, setReligion] = useState()
    const [race, setRace] = useState()
    const [emergencyName, setEmergencyName] = useState()
    const [emergencyPhone, setEmergencyPhone] = useState()
    const [emergencyRelation, setEmergencyRelation] = useState()
    const [companion, setCompanion] = useState()
    const [companionPhone, setCompanionPhone] = useState()

    return(
        <historyContext.Provider value={{
            id, setId,
            name, setName,
            birthDate, setBirthDate,
            sex, setSex,
            birthPlace, setBirthPlace,
            phone, setPhone,
            municipality, setMunicipality,
            city, setCity,
            address, setAddress,
            bloodType, setBloodType,
            religion, setReligion,
            race, setRace,
            emergencyName, setEmergencyName,
            emergencyPhone, setEmergencyPhone,
            emergencyRelation, setEmergencyRelation,
            companion, setCompanion,
            companionPhone, setCompanionPhone
        }}>
            {children}
        </historyContext.Provider>
    )
}

export default HistoryContextProvider;