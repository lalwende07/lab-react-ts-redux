import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import '../css/posts.css';


import { Publish } from "../interfaces/Publish";


const Posts: React.FC = () => {

    const [allPosts, setAllPosts] = useState<Publish[] | null>(null);
    const [NumberOfPosts, setNumberOfPosts] = useState<number>(5);
    

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${NumberOfPosts}`);
            const datas: Publish[] = await response.json();
            //console.log(datas);
            setAllPosts(datas);
            console.log(allPosts);
        };
        getPosts();
    }, [NumberOfPosts]);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPosts(+e.target.value)
    }

    return (
        <div className="posts-container">
            <h1>Page Principale</h1>
            <div style={{ display: "flex", flexDirection: 'column' }}>
                <label htmlFor="posts"> Nombre de publication {NumberOfPosts}</label>
                <input type="range" min={1} max={20} onChange={onChange} />
                <PostsList allPosts={allPosts}/>
            </div>
        </div>
    );
};

export default Posts;