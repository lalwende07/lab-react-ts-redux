import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import { Publish } from "../interfaces";
import '../css/post.css';

//readOnly - on a seulement besoin d'un type par d'une interface
type PostParams = {
    id: string,
}

const Post = () => {

    //destructuring
    const { id } = useParams<PostParams>();

    const [onePost, setOnePost] = useState<Publish | null>(null);

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

            //une seul data pas le tableau
            const data: Publish = await response.json();
            setOnePost(data);
            //console.log(onePost);
        };

        //initialise la function
        getPost();

        //tableau de dépendance - id
    }, [id]);

    console.log(onePost)

    return (
        <div className="post-container">
            <Link to="/">Home</Link>
            <h1>Post</h1>
            <div>
                <PostDetail onePost={onePost}/>
            </div>
            
        </div>
    );
};

export default Post;