import React from 'react';

export function TransactionItem({ transaction }) {
    if (!transaction) {
        return (
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <p className="text-gray-500">No transaction data available</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div>
                <p className="font-semibold text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
            </div>
            <div className="text-right">
                <p className={`font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
        </div>
    );
}
