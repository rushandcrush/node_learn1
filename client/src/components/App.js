import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>
const Surv = () => <h2>Surv</h2>
const Landing = () => <h2>Landing</h2>

const App = (props) => {
    useEffect(() => {
        props.fetchUser()
    })
    return (
        <div className='container'>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/surv' element={<Dashboard/>}/>
                    <Route path='/surv/new' element={<Surv/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default connect(null, actions)(App)