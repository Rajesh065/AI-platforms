import React, { useState, useEffect } from 'react';
import { TokenProvider, useTokens } from './context/TokenContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ToastContainer } from './components/ToastContainer';
import { LoginPage } from './pages/LoginPage';

import { AdminDashboard } from './pages/AdminDashboard';
import { EmployeeManagementPage } from './pages/EmployeeManagementPage';
import { TokenRequestsPage } from './pages/TokenRequestsPage';
import { TokenInventoryPage } from './pages/TokenInventoryPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

import { EmployeeDashboard } from './pages/EmployeeDashboard';
import { MyTokenUsagePage } from './pages/MyTokenUsagePage';
import { RequestTokensPage } from './pages/RequestTokensPage';

function MainAppContent() {
  const { role, currentUser } = useTokens();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>('admin-dashboard');

  // Whenever currentUser or role changes, automatically reset the active tab to the appropriate portal dashboard!
  useEffect(() => {
    if (role === 'ADMIN') {
      const validAdminTabs = [
        'admin-dashboard',
        'employee-management',
        'token-requests',
        'token-inventory',
        'transactions',
        'analytics'
      ];
      if (!validAdminTabs.includes(currentTab)) {
        setCurrentTab('admin-dashboard');
      }
    } else {
      const validEmpTabs = [
        'employee-dashboard',
        'my-token-usage',
        'request-tokens'
      ];
      if (!validEmpTabs.includes(currentTab)) {
        setCurrentTab('employee-dashboard');
      }
    }
  }, [role, currentUser]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Instant tab resolution based on role
    if (role === 'ADMIN') {
      setCurrentTab('admin-dashboard');
    } else {
      setCurrentTab('employee-dashboard');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onSuccessLogin={handleLoginSuccess} />;
  }

  // Fallback check to avoid white screen
  const effectiveTab = () => {
    if (role === 'ADMIN') {
      const validAdminTabs = [
        'admin-dashboard',
        'employee-management',
        'token-requests',
        'token-inventory',
        'transactions',
        'analytics'
      ];
      return validAdminTabs.includes(currentTab) ? currentTab : 'admin-dashboard';
    } else {
      const validEmpTabs = [
        'employee-dashboard',
        'my-token-usage',
        'request-tokens'
      ];
      return validEmpTabs.includes(currentTab) ? currentTab : 'employee-dashboard';
    }
  };

  const tabToRender = effectiveTab();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <Navbar
        currentTab={tabToRender}
        onNavigateTab={setCurrentTab}
        onOpenLoginModal={handleLogout}
      />

      <div className="flex-1 flex">
        <Sidebar currentTab={tabToRender} onSelectTab={setCurrentTab} />

        <main className="flex-1 p-6 max-w-7xl mx-auto w-full overflow-y-auto">
          {/* Admin Pages */}
          {role === 'ADMIN' && (
            <>
              {tabToRender === 'admin-dashboard' && <AdminDashboard onNavigateTab={setCurrentTab} />}
              {tabToRender === 'employee-management' && <EmployeeManagementPage />}
              {tabToRender === 'token-requests' && <TokenRequestsPage />}
              {tabToRender === 'token-inventory' && <TokenInventoryPage />}
              {tabToRender === 'transactions' && <TransactionsPage />}
              {tabToRender === 'analytics' && <AnalyticsPage />}
            </>
          )}

          {/* Employee Pages */}
          {role === 'EMPLOYEE' && (
            <>
              {tabToRender === 'employee-dashboard' && <EmployeeDashboard onNavigateTab={setCurrentTab} />}
              {tabToRender === 'my-token-usage' && <MyTokenUsagePage />}
              {tabToRender === 'request-tokens' && <RequestTokensPage />}
            </>
          )}
        </main>
      </div>

      <ToastContainer />
    </div>
  );
}

export function App() {
  return (
    <TokenProvider>
      <MainAppContent />
    </TokenProvider>
  );
}

export default App;
