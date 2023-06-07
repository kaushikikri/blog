import Photo from "../assets/pagenotfound.png";
import { Link } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";

export const Pagenotfound = () => {
  useTitle("Not found");
  return (
    <section className="md:w-3/6 px-2 m-auto mt-10 text-center">
      <h1 className="text-2xl font-medium mb-6">404 / Page Not Found</h1>
      <img className="rounded-lg mb-6" src={Photo} alt="pnf" />
      <Link to="/">
        <button className="bg-blue-800 text-white text-2xl py-1 px-2 rounded">Back To Home</button>
      </Link>
    </section>
  )
}
