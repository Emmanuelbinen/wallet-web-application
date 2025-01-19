import React from 'react';

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Balance</h2>
          <p className="text-2xl font-bold text-red-600">$5,240.00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Monthly Income</h2>
          <p className="text-2xl font-bold text-green-600">$3,500.00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Monthly Expenses</h2>
          <p className="text-2xl font-bold text-gray-600">$2,260.00</p>
        </div>
      </div>

      {/* Placeholder for future components */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <p className="text-gray-500">No recent transactions</p>
      </div>
    </div>
  );
}

export default Dashboard;