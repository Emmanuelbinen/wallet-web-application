import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Charts component takes data as a prop
export function Charts({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Add a grid with dashed lines */}
            <CartesianGrid strokeDasharray="3 3" />
            {/* X-axis represents the months */}
            <XAxis dataKey="month" />
            {/* Y-axis represents the values */}
            <YAxis />
            {/* Tooltip shows details on hover */}
            <Tooltip />
            {/* Line for income data */}
            <Line type="monotone" dataKey="income" stroke="#059669" strokeWidth={2} name="Income" />
            {/* Line for expenses data */}
            <Line type="monotone" dataKey="expenses" stroke="#DC2626" strokeWidth={2} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}