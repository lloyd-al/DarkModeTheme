import React from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ThemeLayout } from './components/ThemeContext';

import './custom.css'

function App() {
    return (
        <ThemeLayout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
        </ThemeLayout>
    );
}

export default App;
