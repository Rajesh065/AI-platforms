import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { Search, Filter, Download } from 'lucide-react';

export const TransactionsPage: React.FC = () => {
  const { transactions } = useTokens();
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('ALL');

  const actionTypes: string[] = [
    'ALL',
    'PURCHASE',
    'INITIAL_ALLOCATION',
    'ALLOCATION_INCREASE',
    'ALLOCATION_DECREASE',
    'TOKENS_REVOKED',
    'TOKEN_USAGE',
    'REQUEST_SUBMITTED',
    'REQUEST_APPROVED',
    'REQUEST_PARTIALLY_APPROVED',
    'REQUEST_REJECTED'
  ];

  const filtered = transactions.filter(tx => {
    const matchesSearch =
      tx.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.performedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === 'ALL' || tx.actionType === actionFilter;
    return matchesSearch && matchesAction;
  });

  const exportCsv = () => {
    const headers = 'ID,Timestamp,Employee,ActionType,TokenAmount,Description,PerformedBy\n';
    const rows = filtered.map(t =>
      `"${t.id}","${t.timestamp}","${t.employeeName}","${t.actionType}",${t.tokenAmount},"${t.description.replace(/"/g, '""')}","${t.performedBy}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tokenflow-transactions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Transaction Audit Ledger</h1>
          <p className="text-xs text-slate-500 mt-1">
            Complete chronological audit log of all token purchases, quota allocations, revocations, and AI task consumption.
          </p>
        </div>
        <button
          onClick={exportCsv}
          className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center space-x-2 border border-slate-200 transition-all"
        >
          <Download className="w-4 h-4 text-slate-600" />
          <span>Export Audit Log (CSV)</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by actor, employee, or description..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <select
            value={actionFilter}
            onChange={e => setActionFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
          >
            {actionTypes.map(act => (
              <option key={act} value={act}>
                {act === 'ALL' ? 'All Action Types' : act.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-3 px-4 font-semibold">Timestamp</th>
                <th className="py-3 px-4 font-semibold">Employee / Target</th>
                <th className="py-3 px-4 font-semibold">Action Type</th>
                <th className="py-3 px-4 font-semibold text-right">Tokens</th>
                <th className="py-3 px-4 font-semibold">Description</th>
                <th className="py-3 px-4 font-semibold">Performed By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(tx => (
                <tr key={tx.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">{tx.timestamp}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{tx.employeeName}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${
                      tx.actionType === 'PURCHASE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      tx.actionType.includes('APPROVED') ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                      tx.actionType.includes('REVOKED') || tx.actionType.includes('REJECTED') ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                      tx.actionType === 'TOKEN_USAGE' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {tx.actionType.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className={`py-3 px-4 text-right font-mono font-bold whitespace-nowrap ${
                    tx.tokenAmount > 0 ? 'text-emerald-700' : tx.tokenAmount < 0 ? 'text-amber-600' : 'text-slate-500'
                  }`}>
                    {tx.tokenAmount > 0 ? `+${tx.tokenAmount.toLocaleString()}` : tx.tokenAmount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-slate-700 max-w-md">{tx.description}</td>
                  <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{tx.performedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
