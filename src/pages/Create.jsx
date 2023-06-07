import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

import { useTitle } from "../hooks/useTitle";


export const Create = () => {
    useTitle("Create");

    const navigate = useNavigate();
    const colref = collection(db, "posts");

    async function handleForm(event) {
        event.preventDefault();
        const document = {
            title: event.target.title.value,
            description: event.target.desc.value,
            user: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            }
        }
        await addDoc(colref, document)
        // .then(() => console.log("success"));
        event.target.title.value = "";
        event.target.desc.value = "";
        navigate("/");
    }
    return (
        <section className="py-10 px-2">
            <div className="flex flex-col mx-auto md:w-4/6 p-4 flex-wrap gap-6">
                <h1 className="text-3xl font-bold text-center">Add New Post</h1>
                <form name="form" onSubmit={handleForm}>
                    <input className="block border w-full text-lg p-1 shadow-md mb-4 focus:outline-none rounded-md" type="text" name="title" id="title" placeholder="Title" />
                    <textarea className="border w-full shadow-md p-1 text-lg mb-4 focus:outline-none rounded-md" name="desc" id="desc" rows="10" placeholder="Description"></textarea>
                    <div className="text-center">
                        <button className="bg-green-500 w-full py-2 rounded text-xl text-white font-medium" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
