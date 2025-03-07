import {getTokenFromSessionStorage} from "../../stores";
import {Navigate} from "react-router-dom";

export const PublicRoutes = ({children}) => {
    const tokenStorage = getTokenFromSessionStorage();

    if (tokenStorage && tokenStorage.token) {
        return <Navigate to="/tasks" replace/>;
    }

    return <>{children}</>
}
