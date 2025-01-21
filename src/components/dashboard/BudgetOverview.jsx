import React from 'react';
import { AlertCircle } from 'lucide-react';

// BudgetOverview component takes income and expenses as props
export function BudgetOverview({ income, expenses }) {
  // Calculate the percentage of the budget used
  const budgetPercentage = (expenses / income) * 100;
  // Determine if the budget usage is over 85%
  const isOverBudget = budgetPercentage > 85;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Budget Overview</h2>
        {/* Show alert if the budget usage is over 85% */}
        {isOverBudget && (
          <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            <span className="text-sm">85% of budget used</span>
          </div>
        )}
      </div>
    </div>
  );
}