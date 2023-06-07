import { NavLink } from "react-router-dom";
export const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center text-lg items-center md:mx-40 border-t p-4">
                <p>© 2030
                    <NavLink to="/"> WriteNote</NavLink>. 
                    <span> All Rights Reserved.</span>
                </p>
            </div>
        </footer>
    )
}
