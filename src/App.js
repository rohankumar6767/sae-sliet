import React from 'react';
import './App.css';

import {Navbar, Header, Teams, About, Footer} from './components/index'
import {Greenrangers, Query} from './pages/index'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => (
    <div className="app">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={[<Header />, <Teams />, <About />, <Footer />]} />

                <Route path='/greenrangers' element={[<Greenrangers/>, <Footer />]} />

                <Route path='/query_form' element={[<Query />, <Footer />]} />
            </Routes>
        </Router>
    </div>
)

export default App;
