import {RouteItemSideNavInterface} from "../../../infraestructure";
import {LoginPage} from "../../../presentation";

export const publicRoutes: RouteItemSideNavInterface[] = [
    {
        to: '/login',
        name: 'Inicio',
        Component: LoginPage
    }
];
