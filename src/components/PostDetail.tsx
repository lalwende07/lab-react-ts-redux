import React from "react";
import { Publish } from '../interfaces';
import '../css/postDetail.css';

interface PostDetailProps {
    onePost: Publish | null
}

const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {

    return (
        <div className="post">
            <h1>Publication: {onePost?.id}</h1>
            <h2>Titre: {onePost?.title}</h2>
            <p>{onePost?.body}</p>

        </div>


        );

}

export default PostDetail;