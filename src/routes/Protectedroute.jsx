import { Navigate } from "react-router-dom";

export const Protectedroute = ({ children }) => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
    return isAuth ? children : <Navigate to="/" />;
}
