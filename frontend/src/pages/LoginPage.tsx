import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { ArrowRight, Mail, Lock } from 'lucide-react';

interface LoginPageProps {
  onSuccessLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSuccessLogin }) => {
  const { demoUsers, loginAs, showToast } = useTokens();

  const [activeTab, setActiveTab] = useState<'DEMO' | 'CUSTOM'>('DEMO');
  const [emailInput, setEmailInput] = useState('admin@cortexai.enterprise');
  const [passwordInput, setPasswordInput] = useState('admin123');
  const [selectedRole, setSelectedRole] = useState<'ADMIN' | 'EMPLOYEE'>('ADMIN');

  const handleDemoSelect = (user: any) => {
    loginAs(user);
    onSuccessLogin();
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !passwordInput) {
      showToast('Please enter both email and password.', 'error');
      return;
    }

    if (selectedRole === 'ADMIN') {
      loginAs(demoUsers.admin);
    } else {
      loginAs(demoUsers.employees[0]);
    }
    onSuccessLogin();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-xl w-full space-y-6">
        {/* Brand Header - Clean, No OS, No AI icons */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              TokenFlow
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
              Enterprise
            </span>
          </div>
          <p className="text-xs text-slate-600 max-w-sm mx-auto">
            AI Token & Multi-LLM Quota Management Platform with Employee Revocations & Justified Approvals
          </p>
        </div>

        {/* Main Authentication Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm">
          {/* Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('DEMO')}
              className={`py-2 rounded-lg transition-all ${
                activeTab === 'DEMO'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1-Click Demo Profiles
            </button>
            <button
              onClick={() => setActiveTab('CUSTOM')}
              className={`py-2 rounded-lg transition-all ${
                activeTab === 'CUSTOM'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In with Password
            </button>
          </div>

          {/* TAB 1: 1-Click Demo Profiles */}
          {activeTab === 'DEMO' && (
            <div className="space-y-4">
              {/* Admin Profile */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    Company Admin Portal
                  </span>
                  <span className="text-[11px] text-slate-500">Full Quota & Revoke Access</span>
                </div>

                <button
                  onClick={() => handleDemoSelect(demoUsers.admin)}
                  className="w-full p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-200 hover:border-blue-300 text-left flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      DV
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-slate-900">{demoUsers.admin.name}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                          ADMIN
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{demoUsers.admin.title}</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">{demoUsers.admin.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all">
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Employee Profiles */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Employee Workspaces
                  </span>
                  <span className="text-[11px] text-slate-500">Task Execution & Token Requests</span>
                </div>

                <div className="space-y-2">
                  {demoUsers.employees.map((emp: any) => (
                    <button
                      key={emp.id}
                      onClick={() => handleDemoSelect(emp)}
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-left flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-200">
                          {emp.avatarInitials}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-xs text-slate-900">{emp.name}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-mono">
                              {emp.employeeId}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600">{emp.title} • {emp.department}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Form Sign In with Credentials */}
          {activeTab === 'CUSTOM' && (
            <form onSubmit={handleCustomLogin} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Select Role</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedRole('ADMIN');
                      setEmailInput('admin@cortexai.enterprise');
                      setPasswordInput('admin123');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedRole === 'ADMIN'
                        ? 'bg-blue-50 border-blue-500 text-blue-900'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <p className="font-bold text-slate-900">Admin Portal</p>
                    <p className="text-[11px] text-slate-500">Manage all quotas</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedRole('EMPLOYEE');
                      setEmailInput('alex.rivera@cortexai.enterprise');
                      setPasswordInput('emp123');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedRole === 'EMPLOYEE'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <p className="font-bold text-slate-900">Employee Portal</p>
                    <p className="text-[11px] text-slate-500">Execute tasks & request quota</p>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                <span>Demo Creds: </span>
                <span className="text-blue-700 font-mono font-medium">admin@cortexai.enterprise / admin123</span>
                <span> or </span>
                <span className="text-emerald-700 font-mono font-medium">alex.rivera@cortexai.enterprise / emp123</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Sign In to {selectedRole === 'ADMIN' ? 'Admin Console' : 'Employee Workspace'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        <div className="text-center text-[11px] text-slate-500">
          Enforces token revocation for unused reserves only • LocalStorage Persistence
        </div>
      </div>
    </div>
  );
};
