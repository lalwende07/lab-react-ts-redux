import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { FunctionComponent, useState, useEffect } from 'react';
import Posts from './pages/Posts';
import Post from './pages/Post';

const App: FunctionComponent = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Posts/>} />
                    <Route path='/:id' element={<Post/>} />
                </Routes>
            </BrowserRouter>
        </div>
        )
}

export default App;
