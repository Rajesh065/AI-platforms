import React from 'react';
import { useTokens } from '../context/TokenContext';
import {
  LayoutDashboard,
  Users,
  Send,
  Boxes,
  History,
  BarChart3,
  Bot,
  LucideIcon
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab }) => {
  const { role, requests } = useTokens();
  const pendingRequestsCount = requests.filter(r => r.status === 'PENDING').length;

  const adminNavItems: NavItem[] = [
    { id: 'admin-dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
    { id: 'employee-management', label: 'Employee Directory', icon: Users },
    { id: 'token-requests', label: 'Token Requests', icon: Send, badge: pendingRequestsCount },
    { id: 'token-inventory', label: 'Token Inventory & Purchases', icon: Boxes },
    { id: 'transactions', label: 'Transaction Audit Trail', icon: History },
    { id: 'analytics', label: 'Usage Analytics', icon: BarChart3 }
  ];

  // For employees, we keep it focused: Dashboard, Simulator, and Request Tokens (no Transaction History)
  const employeeNavItems: NavItem[] = [
    { id: 'employee-dashboard', label: 'My Dashboard', icon: LayoutDashboard },
    { id: 'my-token-usage', label: 'Consume Tokens & Simulator', icon: Bot },
    { id: 'request-tokens', label: 'Request Additional Tokens', icon: Send }
  ];

  const navItems = role === 'ADMIN' ? adminNavItems : employeeNavItems;

  return (
    <aside className="w-60 bg-white border-r border-slate-200 flex flex-col justify-between p-4 min-h-[calc(100vh-57px)]">
      <div className="space-y-5">
        <div>
          <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {role === 'ADMIN' ? 'Administration' : 'Employee Workspace'}
          </div>
          <nav className="space-y-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500">
        <p className="font-semibold text-slate-700">TokenFlow Enterprise</p>
        <p>AI Quota Management</p>
      </div>
    </aside>
  );
};
