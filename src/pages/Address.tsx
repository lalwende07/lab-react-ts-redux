import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import '../css/address.css';

import { NotebookAddress } from '../interfaces/NotebookAddress';
import NotebookList from "../components/NotebookList";


const Address: React.FC = () => {
    const [allAddress, setAllAddress] = useState<NotebookAddress[] | null>(null);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [profile, setProfile] = useState<string>("");

    console.log({name});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('submitted')
        const newNotebookAddress: NotebookAddress = {
            name,
            email,
            profile,
        };

        //a faire charger le handleSubmit avec les setters
    }

    return (

        <div className="formulaire-addresse"><h1>Address</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name" className="name" value={name} onChange={e => setName(e.target.value)}/>
                <br />
                 <label htmlFor="email">Email: </label>
                <input id="email" className="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <br />
                 <label htmlFor="profile">Profile: </label>
                 <input id="profile" value={profile} onChange={e => setProfile(e.target.value)}/>
                 <br />
                 <button type="submit">Add</button>
            </form>
            <div className='list-address'>
                <NotebookList allAddress={allAddress}/>
            </div>
        </div>

    )
};

export default Address;