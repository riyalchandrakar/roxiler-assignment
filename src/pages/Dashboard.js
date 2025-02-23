import React, { useEffect, useState } from "react";
import { fetchTransactions, fetchStatistics } from "../services/api";
import Table from "../components/Table";
import StatsBox from "../components/StatsBox";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [stats, setStats] = useState({});
  const [month, setMonth] = useState("March");

  useEffect(() => {
    fetchTransactions(month, "", 1).then(res => setTransactions(res.data));
    fetchStatistics(month).then(res => setStats(res.data));
  }, [month]);

  return (
    <div>
      <h2>Transaction Dashboard</h2>

      {/* Month Selection Dropdown */}
      <select onChange={e => setMonth(e.target.value)}>
        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          .map(m => <option key={m} value={m}>{m}</option>)}
      </select>

      {/* StatsBox Component */}
      <StatsBox stats={stats} />

      {/* Transactions Table */}
      <Table transactions={transactions} />
    </div>
  );
};

export default Dashboard;
