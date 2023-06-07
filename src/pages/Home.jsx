import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { useTitle } from "../hooks/useTitle";
import { PostCard, SkeletonPage } from "../components";

export const Home = () => {
    useTitle("Home");
    const [toggle, setToggle] = useState(false);
    const [posts, setPost] = useState(new Array(2).fill(false));

    const colref = collection(db, "posts");

    useEffect(() => {
        async function getData() {
            const res = await getDocs(colref);
            const data = res.docs;
            setPost(data.map((post) => ({ ...post.data(), id: post.id })));
        }
        // console.log("...");
        getData();
    }, [toggle, JSON.parse(localStorage.getItem("isAuth"))]);

    return (
        <section className="py-10 px-2">
            {posts.map((post, index) => (
                post
                    ? (<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />)
                    : <SkeletonPage key={index} />
            ))}
        </section>
    )
}
