import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { FunctionComponent, useState, useEffect } from 'react';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Address from './pages/Address';

const App: FunctionComponent = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Posts/>} />
                    <Route path='/:id' element={<Post/>} />
                    <Route path='/address' element={<Address/>} />
                </Routes>
            </BrowserRouter>
        </div>
        )
}

export default App;
