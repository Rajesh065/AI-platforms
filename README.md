# AI Token Management Platform (TokenFlow Enterprise)

An enterprise-grade, modern web application for purchasing, allocating, auditing, and managing LLM tokens and AI credits across engineering and data teams.

---

## 🎯 Project Overview & Purpose
An IT enterprise purchases AI tokens/credits in bulk from multiple LLM providers (OpenAI, Anthropic, Google Cloud, AWS Bedrock, Mistral). The company Admin manages the company token pool, assigns token quotas to employees, and monitors real-time consumption.

When an employee runs out of tokens or requires additional quota for high-context tasks, they submit a justification request. The Admin evaluates the justification, previous allocation history, and current token balances to approve full, partially approve, or reject the request with feedback remarks.

---

## 📦 Dependencies & Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **TypeScript**: `v5.7.0` or higher

---

## 📥 Installation

Clone the repository and install all dependencies:

```bash
# Navigate to project directory
cd "AI platforms/frontend"

# Install frontend dependencies
npm install
```

---

## 🔨 Build Instructions

To compile TypeScript and create an optimized production build:

```bash
# Build the production bundle
npm run build
```

The compiled static assets will be output to the `dist/` directory.

---

## 🚀 Run Instructions

To start the local development server with hot-module reloading:

```bash
# Start Vite development server
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🧪 Testing

To execute automated unit and integration test suites:

```bash
# Run test suites
npm run test
```

---

## 📖 Usage Guide & User Roles

### 1. 🛡️ Company Admin Portal (`David Vance`)
- **Dashboard Overview**: Monitor Total Purchased Tokens (50M), Allocated Tokens (22M), Consumed Tokens (17.48M), and Available Reserve (28M).
- **Employee Quota Directory**: Increase, reduce, or revoke unused tokens. *(Strict rule: Already consumed tokens can NEVER be revoked).*
- **Token Request Approvals**: Review pending employee requests. Approve full, partially approve with custom amount, or reject with feedback remarks.
- **Provider Inventory**: Record new token purchase orders from OpenAI, Anthropic, Google Cloud, or AWS Bedrock.
- **Transaction Audit Ledger**: Complete chronological ledger of all platform actions with CSV export.

### 2. 👨‍💻 Employee Workspace (`Alex Rivera`, `Priya Nair`, `Marcus Reed`)
- **My Dashboard**: View assigned quota, consumed tokens, remaining balance, and usage progress bar.
- **AI Task Simulator**: Execute simulated inference workloads across Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, and Llama 3 with real-time balance deductions.
- **Request Tokens**: Submit requests for additional free company-sponsored token quota with justifications.

---

## 🔒 Security & Data Persistence
- 100% LocalStorage data persistence surviving browser refreshes.
- Zero external backend or third-party database dependencies required.
