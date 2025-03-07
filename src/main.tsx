import {createRoot} from 'react-dom/client'
import {EntryPointApp} from './EntryPointApp.tsx'
import {HashRouter} from "react-router-dom";
import React, {Suspense} from "react";
import './config/theme/styles/styles.scss';
import './config/api/apiConfig.ts';
import {Loading} from "./shared";

createRoot(document.getElementById('root')!).render(
    <Suspense fallback={<Loading/>}>
        <Loading/>

        <HashRouter>
            <EntryPointApp/>
        </HashRouter>
    </Suspense>
)
