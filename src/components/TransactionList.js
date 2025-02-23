// src/components/TransactionList.js
import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);
    const [search, setSearch] = useState('');
    const [month] = useState('March'); // Example month

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const data = await fetchTransactions(page, perPage, search, month);
                setTransactions(data.transactions);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadTransactions();
    }, [page, search, month, perPage]); // Include perPage in dependencies

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reset to the first page when searching
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1)); // Prevent going to page 0
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Transaction List</h2>
            <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={handleSearchChange}
            />
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction._id}>{transaction.title} - ${transaction.price}</li>
                ))}
            </ul>
            <div>
                <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <span> Page {page} </span>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default TransactionList;