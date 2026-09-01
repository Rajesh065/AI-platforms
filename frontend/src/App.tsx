import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HorizontalNav } from './components/HorizontalNav';
import { DashboardPage } from './pages/DashboardPage';
import { ModelsGatewayPage } from './pages/ModelsGatewayPage';
import { AgentSwarmPage } from './pages/AgentSwarmPage';
import { PromptStudioPage } from './pages/PromptStudioPage';
import { RagKnowledgePage } from './pages/RagKnowledgePage';
import { GuardrailsSafetyPage } from './pages/GuardrailsSafetyPage';
import { FineTuningPage } from './pages/FineTuningPage';
import { GovernanceAuditPage } from './pages/GovernanceAuditPage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
        <Navbar onNewInference={() => setCurrentTab('prompt')} />
        <HorizontalNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
          {currentTab === 'models' && <ModelsGatewayPage />}
          {currentTab === 'agents' && <AgentSwarmPage />}
          {currentTab === 'prompt' && <PromptStudioPage />}
          {currentTab === 'rag' && <RagKnowledgePage />}
          {currentTab === 'guardrails' && <GuardrailsSafetyPage />}
          {currentTab === 'finetuning' && <FineTuningPage />}
          {currentTab === 'governance' && <GovernanceAuditPage />}
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
