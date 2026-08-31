# 🧠 CortexAI OS - Enterprise Multi-Model AI Platform & LLMOps Hub

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)](.github/workflows/ci.yml)
[![Security Scan](https://img.shields.io/badge/Security-AI%20Guardrails%20Active-blue)](.github/workflows/security-scan.yml)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

**CortexAI OS** is an enterprise-grade, full-stack Multi-Model AI Orchestration Platform, LLMOps Workbench, Autonomous Multi-Agent Studio, RAG Vector Search Engine, Prompt Evaluation Benchmark, and AI Safety Guardrails Firewall.

---

## 🌟 Key Architecture & Features

1. **⚡ Multi-Model Playground & Smart Router**: Interactive LLM testing across GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3, DeepSeek-R1, and Mistral with streaming, temperature, top-p, and system prompt tuning.
2. **🤖 Multi-Agent Orchestration Studio**: Autonomous agent graph (Supervisor, Researcher, Coder, Critic, Data Analyst) with sandboxed Python code execution and tool calling.
3. **📚 RAG & Vector Knowledge Engine**: Document parsing (PDF, Markdown, Code), recursive chunking, dense vector similarity search, and hybrid BM25 retrieval.
4. **📊 Prompt Evaluation & Benchmark Suite**: Automated evaluation metrics (ROUGE-L, BLEU-4, Faithfulness, Hallucination Scorer, Toxicity, Answer Relevancy).
5. **🛠️ Fine-Tuning & Model Registry**: LoRA/QLoRA hyperparameter job scheduler, loss curve tracking, and versioned model checkpoint registry.
6. **🛡️ AI Safety & Prompt Injection Firewall**: Real-time jailbreak detection, prompt injection barrier, and PII data masking engine.
7. **💳 API Gateway, Token Analytics & Rate Limiting**: Input/Output token tracking, model-specific cost estimation, and granular rate-limit enforcement.
8. **🔒 AI Governance & Audit Ledger**: Immutable chronological access and prompt execution audit trail.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js >= 20.0.0
- npm >= 10.0.0

### Installation & Run
```bash
# 1. Install dependencies for all workspaces
npm install

# 2. Start Backend API (http://localhost:5000)
npm run dev:backend

# 3. Start Frontend UI (http://localhost:3000)
npm run dev:frontend

# 4. Run Automated Test Suites (Vitest)
npm test
```

### Running with Docker
```bash
docker-compose up --build
```
