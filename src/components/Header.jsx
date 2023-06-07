import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import Logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom"

export const Header = () => {
    let [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

    function handleLogin() {
        signInWithPopup(auth, provider).then(() => {
            setAuth(true);
            localStorage.setItem("isAuth", true);
        })
    }

    function handleLogout() {
        signOut(auth).then(() => {
            setAuth(false);
            localStorage.setItem("isAuth", false);
        })
    }

    return (
        <header>
            <div className="flex md:justify-between justify-center gap-1 items-center md:mx-40 border-b p-4 flex-wrap">
                <Link to="/" className="flex items-center gap-1">
                    <img className="w-12" src={Logo} alt="Logo" />
                    <span className="text-2xl">WriteNote</span>
                </Link>
                <div className="flex gap-2 text-lg">
                    <NavLink to="/">
                        <div className=" md:px-3 px-1 py-2 " end="true">Home</div>
                    </NavLink>
                    {isAuth
                        ? (
                            <>
                                <NavLink to="create">
                                    <div className="md:px-3 px-1 py-2">Create</div>
                                </NavLink>
                                <button onClick={handleLogout}>
                                    <div className="bg-blue-900 text-slate-100 md:px-3 px-1 py-2 rounded"><span><i className="bi bi-box-arrow-right"></i></span> Logout</div>
                                </button>
                            </>
                        )
                        : (
                            <button onClick={handleLogin} >
                                <div className="bg-blue-900 text-slate-100 md:px-3 px-1 py-2 rounded"><span><i className="bi bi-google"></i></span> Login</div>
                            </button>
                        )}

                </div>
            </div>
        </header>
    )
}
