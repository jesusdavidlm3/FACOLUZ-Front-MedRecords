import React, {useContext} from "react";
import { routerContext } from "../context/routerContext";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Home from "../pages/Home";
import OpenDate from "../pages/OpenDate";
import OpenHistory from "../pages/OpenHistory";
import SearchDate from "../pages/SearchDate";
import SearchHistory from "../pages/SearchHistory";


const Router = () => {

    const {view} = useContext(routerContext)

    try {
        switch(view){
            case "Home": return <Home/>
            case "Login": return <Login/>
            case "OpenDate": return <OpenDate/>
            case "OpenHistory": return <OpenHistory/>
            case "SearchDate": return <SearchDate/>
            case "SearchHistory": return <SearchHistory/>
            default: return <ErrorPage/>
        }
    } catch (err) {
        return <ErrorPage/>
    }
}

export default Router;
