import React from "react";
//import '../css/postsList.css';
//import { useNavigate } from "react-router-dom";

import { NotebookAddress } from '../interfaces';

interface NotebookListProps {
    allAddress: NotebookAddress[] | null
}

const NotebookList: React.FC<NotebookListProps> = ({ allAddress }) => {

    return (
        <div>
            <ul className="posts">
                {allAddress?.map(address => (
                    <li key={address.email}>
                        <p>{address.name}</p>
                        <p>{address.email}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
};

export default NotebookList;