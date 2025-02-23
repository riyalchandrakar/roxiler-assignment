// src/App.js
import React from 'react';
import TransactionList from './components/TransactionList';

const App = () => {
    return (
        <div>
            <h1>Transaction Dashboard</h1>
            <TransactionList />
        </div>
    );
};

export default App;