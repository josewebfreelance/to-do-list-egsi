import {getTokenFromSessionStorage} from "../../stores";
import {Navigate} from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
    const tokenStorage = getTokenFromSessionStorage();

    if (tokenStorage && tokenStorage.token) {
        return <>{children}</>
    }

    return <Navigate to={'/login'} replace/>
}
