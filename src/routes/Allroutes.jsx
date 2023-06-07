import { Routes, Route } from "react-router-dom";
import { Home, Create, Pagenotfound } from "../pages";
import { Protectedroute } from "./Protectedroute";

export const Allroutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="create" element={<Protectedroute><Create /></Protectedroute>} />
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </main>
    )
}
