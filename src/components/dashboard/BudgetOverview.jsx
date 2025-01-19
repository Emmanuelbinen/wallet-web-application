import React from 'react';
import { AlertCircle } from 'lucide-react';

export function BudgetOverview({ income, expenses }) {
  const budgetPercentage = (expenses / income) * 100;
  const isOverBudget = budgetPercentage > 85;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Budget Overview</h2>
        {isOverBudget && (
          <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            <span className="text-sm">85% of budget used</span>
          </div>
        )}
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
              isOverBudget ? 'bg-red-500' : 'bg-green-500'
            }`}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Spent: ${expenses.toFixed(2)}</span>
          <span>Budget: ${income.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}