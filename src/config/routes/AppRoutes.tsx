import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage, TasksPage} from "../../presentation";
import {ProtectedRoutes} from "./ProtectedRoutes.tsx";
import {PublicRoutes} from "./PublicRoutes.tsx";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path={"/tasks"} element={
                <ProtectedRoutes>
                    <TasksPage/>
                </ProtectedRoutes>
            }/>
            <Route path={"/login"} element={
                <PublicRoutes>
                    <LoginPage/>
                </PublicRoutes>
            }/>
            <Route path={"*"} element={<Navigate to={"/login"} replace/>}/>
        </Routes>
    );
}
