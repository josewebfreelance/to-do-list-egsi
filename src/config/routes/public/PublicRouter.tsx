import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./publicRoutes.ts";
import React from "react";

export const PublicRouter = () => {
    return (
        <Routes>
            {
                publicRoutes.map(({to, name, Component}) => (
                    <Route
                        key={name}
                        path={to}
                        element={<Component/>}
                    />
                ))
            }
        </Routes>
    );
}
