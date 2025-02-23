// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTransactions = async (page, perPage, search, month) => {
    const response = await axios.get(`${API_URL}/transactions/list`, {
        params: { page, perPage, search, month },
    });
    return response.data;
};

export const fetchStatistics = async (month) => {
    const response = await axios.get(`${API_URL}/transactions/statistics`, {
        params: { month },
    });
    return response.data;
};

export const fetchBarChartData = async (month) => {
    const response = await axios.get(`${API_URL}/transactions/bar-chart`, {
        params: { month },
    });
    return response.data;
};

export const fetchPieChartData = async (month) => {
    const response = await axios.get(`${API_URL}/transactions/pie-chart`, {
        params: { month },
    });
    return response.data;
};

export const fetchCombinedData = async (month) => {
    const response = await axios.get(`${API_URL}/transactions/combined`, {
        params: { month },
    });
    return response.data;
};