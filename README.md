# ⚡ CortexAI OS - Enterprise AI Platform, Multi-Agent Studio & RAG Engine

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)](.github/workflows/ci.yml)
[![Security Scan](https://img.shields.io/badge/Security-Verified-blue)](.github/workflows/security-scan.yml)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

**CortexAI OS** is an enterprise-grade AI Operating System and Platform featuring a Unified Multi-Model Gateway, Autonomous Multi-Agent Orchestration Studio, Dense HNSW RAG Knowledge Engine, Evaluation Benchmark Suite, and Real-Time Safety Guardrails Firewall.

---

## 🌟 Key Architecture & Features

1. **🌐 Multi-Model Unified Gateway**: OpenAI, Anthropic, Google Gemini, DeepSeek, Meta Llama with dynamic latency/cost routing.
2. **🤖 Multi-Agent Orchestration Studio**: Supervisor, Coder, Critic, Researcher graph with 600+ sandboxed function calling tools.
3. **📚 RAG & Dense Vector Hub**: Hybrid BM25 + HNSW vector retrieval with semantic chunk visualizer.
4. **🧪 Evaluation Benchmark Suite**: GSM8K, HumanEval, MMLU benchmark datasets with toxicity & faithfulness scoring.
5. **🛡️ AI Safety Firewall & Guardrails**: Prompt injection defense, PII masking, and jailbreak detection.
6. **🎯 LoRA Fine-Tuning Workbench**: Parameter-efficient fine-tuning (PEFT/QLoRA) hyperparameter scheduler.
7. **📊 Token Analytics & Governance Ledger**: Real-time token consumption, cost attribution, and cryptographic audit log.

---

## 📦 Installation Instructions

```bash
# 1. Install all monorepo dependencies
npm install
```

---

## 🛠️ Build Instructions

```bash
# Build backend and frontend production assets
npm run build
```

---

## 🚀 Run Instructions

```bash
# Start backend API (http://localhost:5000)
npm run dev:backend

# Start frontend UI (http://localhost:3000)
npm run dev:frontend

# Run automated tests
npm test
```
