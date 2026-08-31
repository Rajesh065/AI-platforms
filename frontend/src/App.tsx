import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { AgentsPage } from './pages/AgentsPage';
import { RagKnowledgePage } from './pages/RagKnowledgePage';
import { EvaluationsPage } from './pages/EvaluationsPage';
import { FineTuningPage } from './pages/FineTuningPage';
import { SafetyGuardrailsPage } from './pages/SafetyGuardrailsPage';
import { AnalyticsBillingPage } from './pages/AnalyticsBillingPage';
import { AuditLogsPage } from './pages/AuditLogsPage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
            {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
            {currentTab === 'playground' && <PlaygroundPage />}
            {currentTab === 'agents' && <AgentsPage />}
            {currentTab === 'rag' && <RagKnowledgePage />}
            {currentTab === 'evaluations' && <EvaluationsPage />}
            {currentTab === 'finetuning' && <FineTuningPage />}
            {currentTab === 'safety' && <SafetyGuardrailsPage />}
            {currentTab === 'analytics' && <AnalyticsBillingPage />}
            {currentTab === 'audit' && <AuditLogsPage />}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
