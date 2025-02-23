import React from "react";

const Table = ({ transactions }) => {
  return (
    <table border="1">
      <thead>
        <tr><th>ID</th><th>Title</th><th>Price</th><th>Sold</th></tr>
      </thead>
      <tbody>
        {transactions.map(t => (
          <tr key={t.id}><td>{t.id}</td><td>{t.title}</td><td>${t.price}</td><td>{t.sold ? "✅" : "❌"}</td></tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
