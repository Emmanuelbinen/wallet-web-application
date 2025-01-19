import React, { useState, useEffect } from 'react';
import { TransactionForm } from '../components/transactions/TransactionForm';
import { TransactionItem } from '../components/transactions/TransactionItem';
import { Filter } from 'lucide-react';

function Transactions() {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem('transactions');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const handleAddTransaction = (newTransaction) => {
        setTransactions(prev => [newTransaction, ...prev]);
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
                <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                </button>
            </div>

            <TransactionForm onAddTransaction={handleAddTransaction} />

            <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
                    <div className="space-y-2">
                        {transactions.length === 0 ? (
                            <p className="text-gray-500">No transactions yet.</p>
                        ) : (
                            transactions.map(transaction => (
                                <TransactionItem 
                                    key={transaction.id} 
                                    transaction={transaction} 
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;