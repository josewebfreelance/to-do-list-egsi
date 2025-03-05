import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PublicRouter} from "./public";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/*'} element={
                <PublicRouter />            }
            />


            <Route path={'*'} element={<Navigate to={'/login'} replace/>}/>
        </Routes>
    );
}
