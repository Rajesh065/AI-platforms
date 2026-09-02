import React from 'react';
import { useTokens } from '../context/TokenContext';
import { LogOut } from 'lucide-react';

interface NavbarProps {
  onOpenLoginModal: () => void;
  onNavigateTab: (tab: string) => void;
  currentTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateTab, onOpenLoginModal }) => {
  const { currentUser, role, inventory, requests } = useTokens();
  const pendingCount = requests.filter(r => r.status === 'PENDING').length;

  return (
    <header className="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-40 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          className="flex items-center space-x-2.5 cursor-pointer"
          onClick={() => onNavigateTab(role === 'ADMIN' ? 'admin-dashboard' : 'employee-dashboard')}
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
            TF
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                TokenFlow
              </span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                Enterprise
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-none mt-0.5">AI LLM Quota & Token Management</p>
          </div>
        </div>

        {/* Global Pool Summary Bar (Admin only) */}
        {role === 'ADMIN' && (
          <div className="hidden lg:flex items-center space-x-6 bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500">Company Reserve: </span>
              <span className="font-bold text-emerald-600">{inventory.remainingAvailableTokens.toLocaleString()}</span>
              <span className="text-slate-400"> / {inventory.totalPurchasedTokens.toLocaleString()} tokens</span>
            </div>
            <div className="h-3 w-px bg-slate-200" />
            <div>
              <span className="text-slate-500">Allocated: </span>
              <span className="font-bold text-blue-600">{inventory.totalAllocatedTokens.toLocaleString()}</span>
            </div>
            <div className="h-3 w-px bg-slate-200" />
            <div>
              <span className="text-slate-500">Consumed: </span>
              <span className="font-bold text-amber-600">{inventory.totalUsedTokens.toLocaleString()}</span>
            </div>
          </div>
        )}

        {/* Right Controls: Active User Profile & Sign Out */}
        <div className="flex items-center space-x-3">
          {/* Pending Requests Indicator for Admin */}
          {role === 'ADMIN' && pendingCount > 0 && (
            <button
              onClick={() => onNavigateTab('token-requests')}
              className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold flex items-center space-x-1 hover:bg-amber-100 transition-colors"
            >
              <span>Requests:</span>
              <span className="font-bold">{pendingCount}</span>
            </button>
          )}

          {/* Active User Info & Role Badge */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
              role === 'ADMIN' ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}>
              {currentUser.avatarInitials}
            </div>
            <div className="hidden sm:block text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-semibold text-slate-900 leading-tight">{currentUser.name}</span>
                <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider ${
                  role === 'ADMIN' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {role}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">{currentUser.title}</p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={onOpenLoginModal}
            title="Sign Out / Switch Account"
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-200"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};
