import { dateContext } from "./dateContext";
import { useState } from "react";

const DateContextProvider = ({children}) => {

    const [id, setId] = useState()
    const [name, setName] = useState()
    const [birthDate, setBirthDate] = useState()
    const [sex, setSex] = useState()
    const [birthPlace, setBirthPlace] = useState()
    const [phone, setPhone] = useState()
    const [municipality, setMunicipality] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [doctorId, setDoctorId] = useState()

    return(
        <dateContext.Provider value={{
            id, setId,
            name, setName,
            birthDate, setBirthDate,
            sex, setSex,
            birthPlace, setBirthPlace,
            phone, setPhone,
            municipality, setMunicipality,
            city, setCity,
            address, setAddress,
            date, setDate,
            time, setTime,
            doctorId, setDoctorId
        }}>
            {children}
        </dateContext.Provider>
    )
}

export default DateContextProvider;