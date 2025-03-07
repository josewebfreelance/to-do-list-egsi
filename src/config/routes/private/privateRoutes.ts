import {RouteItemSideNavInterface} from "../../../infraestructure";
import {TasksPage} from "../../../presentation";

export const privateRoutes: RouteItemSideNavInterface[] = [
    {
        to: '/tasks',
        name: 'tareas',
        Component: TasksPage
    }
];
