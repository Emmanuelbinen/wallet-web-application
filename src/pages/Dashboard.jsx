import React from 'react';
import { TransactionItem } from '../components/transactions/TransactionItem';
import { BudgetOverview } from '../components/dashboard/BudgetOverview';
import { Charts } from '../components/dashboard/Charts';

function Dashboard() {
  // Get transactions from localStorage
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');

  // Calculate totals
  const totals = transactions.reduce((acc, curr) => {
    if (curr.type === 'income') {
      acc.income += curr.amount;
    } else {
      acc.expenses += curr.amount;
    }
    acc.balance = acc.income - acc.expenses;
    return acc;
  }, { income: 0, expenses: 0, balance: 0 });

  // Prepare chart data
  const chartData = transactions.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const month = date.toLocaleString('default', { month: 'short' });

    const existingMonth = acc.find(item => item.month === month);
    if (existingMonth) {
      if (curr.type === 'income') {
        existingMonth.income += curr.amount;
      } else {
        existingMonth.expenses += curr.amount;
      }
    } else {
      acc.push({
        month,
        income: curr.type === 'income' ? curr.amount : 0,
        expenses: curr.type === 'expense' ? curr.amount : 0
      });
    }
    return acc;
  }, []).sort((a, b) => new Date(a.month) - new Date(b.month));

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Balance</h2>
          <p className="text-2xl font-bold text-red-600">
            ${totals.balance.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Income</h2>
          <p className="text-2xl font-bold text-green-600">
            ${totals.income.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Expenses</h2>
          <p className="text-2xl font-bold text-red-600">
            ${totals.expenses.toFixed(2)}
          </p>
        </div>
      </div>

      <BudgetOverview income={totals.income} expenses={totals.expenses} />
      <Charts data={chartData} />
      <TransactionItem transactions={transactions.slice(0, 5)} />  {/* Use TransactionItem here */}
    </div>
  );
}

export default Dashboard;