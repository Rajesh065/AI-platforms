import {
  User,
  Employee,
  TokenPurchase,
  TokenRequest,
  TokenUsageRecord,
  TokenTransaction,
  CompanyInventory
} from '../types';

const STORAGE_KEYS = {
  INVENTORY: 'ai_token_company_inventory_v3',
  PURCHASES: 'ai_token_purchases_v3',
  EMPLOYEES: 'ai_token_employees_v3',
  REQUESTS: 'ai_token_requests_v3',
  USAGE_RECORDS: 'ai_token_usage_records_v3',
  TRANSACTIONS: 'ai_token_transactions_v3',
  ACTIVE_USER: 'ai_token_active_user_v3'
};

export const INITIAL_ADMIN_USER: User = {
  id: 'usr-admin-01',
  name: 'David Vance',
  email: 'admin@cortexai.enterprise',
  role: 'ADMIN',
  department: 'IT & AI Infrastructure',
  employeeId: 'ADM-001',
  title: 'Chief AI Infrastructure Admin',
  avatarInitials: 'DV'
};

export const INITIAL_EMPLOYEE_USERS: User[] = [
  {
    id: 'emp-01',
    name: 'Alex Rivera',
    email: 'alex.rivera@cortexai.enterprise',
    role: 'EMPLOYEE',
    department: 'Engineering (Core LLM)',
    employeeId: 'EMP-1001',
    title: 'Senior ML Engineer',
    avatarInitials: 'AR'
  },
  {
    id: 'emp-02',
    name: 'Priya Nair',
    email: 'priya.nair@cortexai.enterprise',
    role: 'EMPLOYEE',
    department: 'Product Engineering',
    employeeId: 'EMP-1002',
    title: 'Fullstack AI Developer',
    avatarInitials: 'PN'
  },
  {
    id: 'emp-03',
    name: 'Marcus Reed',
    email: 'marcus.reed@cortexai.enterprise',
    role: 'EMPLOYEE',
    department: 'Data Science',
    employeeId: 'EMP-1003',
    title: 'Lead Data Scientist',
    avatarInitials: 'MR'
  },
  {
    id: 'emp-04',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@cortexai.enterprise',
    role: 'EMPLOYEE',
    department: 'Product AI',
    employeeId: 'EMP-1006',
    title: 'AI Product Architect',
    avatarInitials: 'SJ'
  }
];

const INITIAL_PURCHASES: TokenPurchase[] = [
  {
    id: 'pur-101',
    providerName: 'OpenAI',
    tokensPurchased: 20000000,
    costUsd: 50000,
    purchaseDate: '2026-08-15',
    invoiceNumber: 'INV-OAI-98421',
    notes: 'GPT-4o and o1 Enterprise Tier Volume Commitment',
    addedBy: 'David Vance'
  },
  {
    id: 'pur-102',
    providerName: 'Anthropic',
    tokensPurchased: 15000000,
    costUsd: 45000,
    purchaseDate: '2026-08-18',
    invoiceNumber: 'INV-ANTH-44120',
    notes: 'Claude 3.5 Sonnet Coding & Artifact API Allocation',
    addedBy: 'David Vance'
  },
  {
    id: 'pur-103',
    providerName: 'Google Cloud',
    tokensPurchased: 10000000,
    costUsd: 20000,
    purchaseDate: '2026-08-22',
    invoiceNumber: 'INV-GCP-77192',
    notes: 'Gemini 1.5 Pro 2M Long-Context Document Pipeline',
    addedBy: 'David Vance'
  },
  {
    id: 'pur-104',
    providerName: 'AWS Bedrock',
    tokensPurchased: 5000000,
    costUsd: 10000,
    purchaseDate: '2026-08-25',
    invoiceNumber: 'INV-AWS-33019',
    notes: 'Llama 3 70B & Mistral Large Serverless Endpoints',
    addedBy: 'David Vance'
  }
];

const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 'emp-01',
    employeeId: 'EMP-1001',
    name: 'Alex Rivera',
    email: 'alex.rivera@cortexai.enterprise',
    department: 'Engineering (Core LLM)',
    role: 'Senior ML Engineer',
    allocatedTokens: 3500000,
    usedTokens: 2950000,
    remainingTokens: 550000,
    usagePercentage: 84.3,
    joinedDate: '2025-03-12',
    status: 'Active',
    activeProjects: ['CodePilot Copilot', 'Model Benchmark']
  },
  {
    id: 'emp-02',
    employeeId: 'EMP-1002',
    name: 'Priya Nair',
    email: 'priya.nair@cortexai.enterprise',
    department: 'Product Engineering',
    role: 'Fullstack AI Developer',
    allocatedTokens: 2000000,
    usedTokens: 1200000,
    remainingTokens: 800000,
    usagePercentage: 60.0,
    joinedDate: '2025-05-18',
    status: 'Active',
    activeProjects: ['Customer Support Agentic Bot', 'UI Generator']
  },
  {
    id: 'emp-03',
    employeeId: 'EMP-1003',
    name: 'Marcus Reed',
    email: 'marcus.reed@cortexai.enterprise',
    department: 'Data Science',
    role: 'Lead Data Scientist',
    allocatedTokens: 4000000,
    usedTokens: 3850000,
    remainingTokens: 150000,
    usagePercentage: 96.3,
    joinedDate: '2024-11-01',
    status: 'Active',
    activeProjects: ['Catalog Vector Embeddings', 'Reranker Engine']
  },
  {
    id: 'emp-04',
    employeeId: 'EMP-1004',
    name: 'Emily Watson',
    email: 'emily.watson@cortexai.enterprise',
    department: 'Healthcare AI',
    role: 'NLP Specialist',
    allocatedTokens: 1500000,
    usedTokens: 600000,
    remainingTokens: 900000,
    usagePercentage: 40.0,
    joinedDate: '2025-07-20',
    status: 'Active',
    activeProjects: ['Clinical Note Summarization', 'Medical NER']
  },
  {
    id: 'emp-05',
    employeeId: 'EMP-1005',
    name: 'Rohan Sharma',
    email: 'rohan.sharma@cortexai.enterprise',
    department: 'DevOps & SRE',
    role: 'AI Infrastructure SRE',
    allocatedTokens: 1000000,
    usedTokens: 450000,
    remainingTokens: 550000,
    usagePercentage: 45.0,
    joinedDate: '2025-01-15',
    status: 'Active',
    activeProjects: ['vLLM Inference Cluster Latency Optimizer']
  },
  {
    id: 'emp-06',
    employeeId: 'EMP-1006',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@cortexai.enterprise',
    department: 'Product AI',
    role: 'AI Product Architect',
    allocatedTokens: 2500000,
    usedTokens: 2100000,
    remainingTokens: 400000,
    usagePercentage: 84.0,
    joinedDate: '2024-09-10',
    status: 'Active',
    activeProjects: ['Enterprise Knowledge Graph & Copilot']
  }
];

const INITIAL_REQUESTS: TokenRequest[] = [
  {
    id: 'req-201',
    employeeId: 'emp-03',
    employeeName: 'Marcus Reed',
    department: 'Data Science',
    requestedTokens: 2000000,
    projectName: 'Vector Embeddings Re-indexing (v3-Large)',
    taskDescription: 'Re-indexing 12 million product catalog items with text-embedding-3-large 3072-dimensional vectors.',
    reason: 'Current 150k remaining balance will run out in approximately 30 minutes during parallel batch job.',
    previousInsufficientReason: 'Original 4M allocation was used for fine-tuning candidate cross-encoders.',
    status: 'PENDING',
    requestedAt: '2026-09-01 10:45 AM'
  },
  {
    id: 'req-202',
    employeeId: 'emp-01',
    employeeName: 'Alex Rivera',
    department: 'Engineering (Core LLM)',
    requestedTokens: 1500000,
    projectName: 'CodePilot Copilot Refactor Engine',
    taskDescription: 'Running comprehensive AST static analysis benchmark on 500 enterprise repositories using Claude 3.5 Sonnet.',
    reason: 'Need 1.5M additional tokens to complete the multi-file repo context refactor benchmark before Friday release.',
    previousInsufficientReason: 'High token consumption due to 128k context window multi-file repository injection.',
    status: 'PENDING',
    requestedAt: '2026-09-01 11:20 AM'
  },
  {
    id: 'req-203',
    employeeId: 'emp-06',
    employeeName: 'Sarah Jenkins',
    department: 'Product AI',
    requestedTokens: 1000000,
    projectName: 'Enterprise Knowledge Graph Copilot',
    taskDescription: 'Building dynamic entity extraction pipeline across 4,000 PDF compliance documents.',
    reason: 'Urgent client demo scheduled for Fortune 50 customer on Thursday.',
    previousInsufficientReason: 'Initial allocation exhausted on testing extraction prompt permutations.',
    status: 'APPROVED',
    approvedTokens: 1000000,
    adminRemarks: 'Approved full request. Priority tier demo confirmed with executive team.',
    requestedAt: '2026-08-30 02:15 PM',
    decidedAt: '2026-08-30 03:00 PM',
    reviewedBy: 'David Vance'
  }
];

const INITIAL_USAGE_RECORDS: TokenUsageRecord[] = [
  {
    id: 'usg-501',
    employeeId: 'emp-01',
    employeeName: 'Alex Rivera',
    projectName: 'CodePilot Copilot',
    taskName: 'Multi-file TypeScript AST Refactor',
    modelUsed: 'Claude 3.5 Sonnet (Anthropic)',
    tokensUsed: 42000,
    description: 'Executed repo-level context injection and refactored authentication middleware.',
    timestamp: '2026-09-01 11:15 AM',
    remainingBalanceAfter: 550000
  },
  {
    id: 'usg-502',
    employeeId: 'emp-03',
    employeeName: 'Marcus Reed',
    projectName: 'Vector Embeddings',
    taskName: 'Batch Catalog Embedding Generation',
    modelUsed: 'text-embedding-3-large (OpenAI)',
    tokensUsed: 125000,
    description: 'Embedded 25,000 product descriptions with 3072-dimension vectors.',
    timestamp: '2026-09-01 10:30 AM',
    remainingBalanceAfter: 150000
  }
];

const INITIAL_TRANSACTIONS: TokenTransaction[] = [
  {
    id: 'tx-001',
    timestamp: '2026-08-15 09:00 AM',
    employeeId: 'COMPANY',
    employeeName: 'Company Reserve',
    actionType: 'PURCHASE',
    tokenAmount: 20000000,
    description: 'Purchased 20,000,000 tokens from OpenAI ($50,000 USD, Inv #INV-OAI-98421)',
    performedBy: 'David Vance (Admin)'
  },
  {
    id: 'tx-002',
    timestamp: '2026-08-18 10:30 AM',
    employeeId: 'COMPANY',
    employeeName: 'Company Reserve',
    actionType: 'PURCHASE',
    tokenAmount: 15000000,
    description: 'Purchased 15,000,000 tokens from Anthropic ($45,000 USD, Inv #INV-ANTH-44120)',
    performedBy: 'David Vance (Admin)'
  }
];

export const storageService = {
  getInventory(): CompanyInventory {
    const raw = localStorage.getItem(STORAGE_KEYS.INVENTORY);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    const purchases = this.getPurchases();
    const employees = this.getEmployees();
    const totalPurchased = purchases.reduce((acc, p) => acc + p.tokensPurchased, 0);
    const totalCost = purchases.reduce((acc, p) => acc + p.costUsd, 0);
    const totalAllocated = employees.reduce((acc, e) => acc + e.allocatedTokens, 0);
    const totalUsed = employees.reduce((acc, e) => acc + e.usedTokens, 0);
    const remaining = totalPurchased - totalAllocated;

    const inventory: CompanyInventory = {
      totalPurchasedTokens: totalPurchased,
      totalAllocatedTokens: totalAllocated,
      totalUsedTokens: totalUsed,
      remainingAvailableTokens: Math.max(0, remaining),
      totalPurchaseCostUsd: totalCost
    };
    this.saveInventory(inventory);
    return inventory;
  },

  saveInventory(inv: CompanyInventory): void {
    localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(inv));
  },

  getPurchases(): TokenPurchase[] {
    const raw = localStorage.getItem(STORAGE_KEYS.PURCHASES);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    this.savePurchases(INITIAL_PURCHASES);
    return INITIAL_PURCHASES;
  },

  savePurchases(purchases: TokenPurchase[]): void {
    localStorage.setItem(STORAGE_KEYS.PURCHASES, JSON.stringify(purchases));
  },

  getEmployees(): Employee[] {
    const raw = localStorage.getItem(STORAGE_KEYS.EMPLOYEES);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    this.saveEmployees(INITIAL_EMPLOYEES);
    return INITIAL_EMPLOYEES;
  },

  saveEmployees(employees: Employee[]): void {
    localStorage.setItem(STORAGE_KEYS.EMPLOYEES, JSON.stringify(employees));
  },

  getRequests(): TokenRequest[] {
    const raw = localStorage.getItem(STORAGE_KEYS.REQUESTS);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    this.saveRequests(INITIAL_REQUESTS);
    return INITIAL_REQUESTS;
  },

  saveRequests(requests: TokenRequest[]): void {
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(requests));
  },

  getUsageRecords(): TokenUsageRecord[] {
    const raw = localStorage.getItem(STORAGE_KEYS.USAGE_RECORDS);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    this.saveUsageRecords(INITIAL_USAGE_RECORDS);
    return INITIAL_USAGE_RECORDS;
  },

  saveUsageRecords(records: TokenUsageRecord[]): void {
    localStorage.setItem(STORAGE_KEYS.USAGE_RECORDS, JSON.stringify(records));
  },

  getTransactions(): TokenTransaction[] {
    const raw = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    this.saveTransactions(INITIAL_TRANSACTIONS);
    return INITIAL_TRANSACTIONS;
  },

  saveTransactions(txs: TokenTransaction[]): void {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(txs));
  },

  getActiveUser(): User {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_USER);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fallback */ }
    }
    this.saveActiveUser(INITIAL_ADMIN_USER);
    return INITIAL_ADMIN_USER;
  },

  saveActiveUser(user: User): void {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(user));
  },

  recalculateAndSaveInventory(): CompanyInventory {
    const purchases = this.getPurchases();
    const employees = this.getEmployees();
    const totalPurchased = purchases.reduce((acc, p) => acc + p.tokensPurchased, 0);
    const totalCost = purchases.reduce((acc, p) => acc + p.costUsd, 0);
    const totalAllocated = employees.reduce((acc, e) => acc + e.allocatedTokens, 0);
    const totalUsed = employees.reduce((acc, e) => acc + e.usedTokens, 0);
    const remaining = totalPurchased - totalAllocated;

    const inventory: CompanyInventory = {
      totalPurchasedTokens: totalPurchased,
      totalAllocatedTokens: totalAllocated,
      totalUsedTokens: totalUsed,
      remainingAvailableTokens: Math.max(0, remaining),
      totalPurchaseCostUsd: totalCost
    };
    this.saveInventory(inventory);
    return inventory;
  },

  resetAll(): void {
    localStorage.clear();
    this.savePurchases(INITIAL_PURCHASES);
    this.saveEmployees(INITIAL_EMPLOYEES);
    this.saveRequests(INITIAL_REQUESTS);
    this.saveUsageRecords(INITIAL_USAGE_RECORDS);
    this.saveTransactions(INITIAL_TRANSACTIONS);
    this.saveActiveUser(INITIAL_ADMIN_USER);
    this.recalculateAndSaveInventory();
  }
};
