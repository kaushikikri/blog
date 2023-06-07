import { auth, db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const PostCard = ({ post, toggle, setToggle }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const { id, title, description, user } = post;

  async function handleDel() {
    const docref = doc(db, "posts", id);
    await deleteDoc(docref)
    // .then(() => console.log("success"));
    setToggle(!toggle)
  }

  return (
    <div className="border rounded px-5 py-7 mb-4">
      <div className="text-2xl font-medium mb-4">{title}</div>
      <p className="text-lg mb-4 break-words">{description}</p>
      <p className="flex justify-between items-center flex-wrap">
        <span className="bg-gray-200 rounded p-2">{user.name}</span>
        {isAuth && (user.id === auth.currentUser.uid) && <button onClick={handleDel} className="text-lg text-red-500"><i className="bi bi-trash3"></i></button>}
      </p>
    </div>
  )
}
