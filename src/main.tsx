import { createRoot } from 'react-dom/client'
import {EntryPointApp} from './EntryPointApp.tsx'
import {HashRouter} from "react-router-dom";
import React from "react";
import './config/theme/styles/styles.scss';

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <EntryPointApp/>
    </HashRouter>
)
