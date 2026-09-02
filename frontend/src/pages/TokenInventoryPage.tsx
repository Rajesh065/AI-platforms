import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { ProviderName } from '../types';
import { Plus, X } from 'lucide-react';

export const TokenInventoryPage: React.FC = () => {
  const { inventory, purchases, recordTokenPurchase } = useTokens();

  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [providerName, setProviderName] = useState<ProviderName>('OpenAI');
  const [tokensAmount, setTokensAmount] = useState<number>(10000000);
  const [costUsd, setCostUsd] = useState<number>(25000);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [notes, setNotes] = useState('');

  const providers: ProviderName[] = ['OpenAI', 'Anthropic', 'Google Cloud', 'AWS Bedrock', 'Azure OpenAI', 'Mistral AI'];

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokensAmount || !costUsd) return;

    recordTokenPurchase({
      providerName,
      tokensPurchased: Number(tokensAmount),
      costUsd: Number(costUsd),
      purchaseDate: new Date().toISOString().split('T')[0],
      invoiceNumber: invoiceNumber || `INV-${providerName.substring(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`,
      notes: notes || `Volume LLM Token purchase agreement with ${providerName}`
    });

    setIsPurchaseModalOpen(false);
    setTokensAmount(10000000);
    setCostUsd(25000);
    setInvoiceNumber('');
    setNotes('');
  };

  const providerDistribution = providers.map(prov => {
    const total = purchases.filter(p => p.providerName === prov).reduce((sum, p) => sum + p.tokensPurchased, 0);
    const spend = purchases.filter(p => p.providerName === prov).reduce((sum, p) => sum + p.costUsd, 0);
    const percent = inventory.totalPurchasedTokens > 0 ? Number(((total / inventory.totalPurchasedTokens) * 100).toFixed(1)) : 0;
    return { name: prov, total, spend, percent };
  }).filter(p => p.total > 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Company Token Inventory & Purchases</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage provider purchase orders, monitor multi-model commitments, and expand the company token reserve.
          </p>
        </div>
        <button
          onClick={() => setIsPurchaseModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>+ Record Token Purchase</span>
        </button>
      </div>

      {/* 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Total Purchased Tokens</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1.5">{inventory.totalPurchasedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">${inventory.totalPurchaseCostUsd.toLocaleString()} USD invested</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Allocated in Quotas</span>
          <p className="text-2xl font-extrabold text-blue-600 mt-1.5">{inventory.totalAllocatedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">{((inventory.totalAllocatedTokens / inventory.totalPurchasedTokens) * 100).toFixed(1)}% of total pool</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Actual Consumed Tokens</span>
          <p className="text-2xl font-extrabold text-amber-600 mt-1.5">{inventory.totalUsedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">{((inventory.totalUsedTokens / inventory.totalPurchasedTokens) * 100).toFixed(1)}% burned</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Remaining Available Reserve</span>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1.5">{inventory.remainingAvailableTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">Available for allocation</p>
        </div>
      </div>

      {/* Provider Distribution */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-4">LLM Provider Volume Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {providerDistribution.map(item => (
            <div key={item.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-900">{item.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {item.percent}%
                </span>
              </div>
              <p className="text-lg font-bold text-slate-900">{item.total.toLocaleString()} tokens</p>
              <p className="text-[11px] text-slate-500">${item.spend.toLocaleString()} USD total cost</p>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mt-2">
                <div style={{ width: `${item.percent}%` }} className="h-full bg-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Purchases Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Purchase Orders & Invoices Ledger</h3>
          <span className="text-xs text-slate-500">{purchases.length} total orders recorded</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-3 px-4 font-semibold">Purchase Date</th>
                <th className="py-3 px-4 font-semibold">Provider</th>
                <th className="py-3 px-4 font-semibold text-right">Tokens Purchased</th>
                <th className="py-3 px-4 font-semibold text-right">Cost (USD)</th>
                <th className="py-3 px-4 font-semibold">Invoice #</th>
                <th className="py-3 px-4 font-semibold">Notes / Purpose</th>
                <th className="py-3 px-4 font-semibold">Recorded By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {purchases.map(pur => (
                <tr key={pur.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-500">{pur.purchaseDate}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{pur.providerName}</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700">
                    +{pur.tokensPurchased.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-slate-800">
                    ${pur.costUsd.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500">{pur.invoiceNumber}</td>
                  <td className="py-3 px-4 text-slate-600 max-w-xs">{pur.notes}</td>
                  <td className="py-3 px-4 text-slate-500">{pur.addedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isPurchaseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Record New Token Purchase</h3>
              <button onClick={() => setIsPurchaseModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePurchaseSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">LLM Provider</label>
                  <select
                    value={providerName}
                    onChange={e => setProviderName(e.target.value as ProviderName)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
                  >
                    {providers.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cost (USD $)</label>
                  <input
                    type="number"
                    min="1"
                    value={costUsd}
                    onChange={e => setCostUsd(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-mono focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tokens Purchased</label>
                <input
                  type="number"
                  min="1000"
                  step="10000"
                  value={tokensAmount}
                  onChange={e => setTokensAmount(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Invoice Number (Optional)</label>
                <input
                  type="text"
                  placeholder="INV-OAI-10294"
                  value={invoiceNumber}
                  onChange={e => setInvoiceNumber(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-mono focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Purchase Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Claude 3.5 Sonnet Q4 dedicated rate card..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsPurchaseModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                >
                  Save & Update Balance
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
