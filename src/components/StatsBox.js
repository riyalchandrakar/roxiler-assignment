import React from "react";

const StatsBox = ({ stats }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
      <div style={boxStyle}>💰 Total Sales: <b>${stats.totalAmount || 0}</b></div>
      <div style={boxStyle}>✔️ Sold Items: <b>{stats.soldItems || 0}</b></div>
      <div style={boxStyle}>❌ Not Sold Items: <b>{stats.notSoldItems || 0}</b></div>
    </div>
  );
};

const boxStyle = {
  padding: "15px",
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  width: "30%",
  textAlign: "center",
  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
};

export default StatsBox;
