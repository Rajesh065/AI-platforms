# 🤖 CortexAI OS - Enterprise LLM Gateway, Multi-Agent Swarms & AI Platform

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)](.github/workflows/ci.yml)
[![Security Scan](https://img.shields.io/badge/Security-Verified-blue)](.github/workflows/security-scan.yml)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

**CortexAI OS** is an enterprise-grade AI Engineering, Multi-Provider LLM Gateway, Autonomous Agent Swarm Orchestration, Hybrid RAG Vector Engine, and LoRA Fine-Tuning Platform.

---

## 🌟 Key Architecture & Features

1. **⚡ Multi-Provider LLM Gateway**: Dynamic routing between DeepSeek-V3, Claude 3.5 Sonnet, GPT-4o, and Llama 3.3 with semantic caching.
2. **🐝 Autonomous Agent Swarm Studio**: Directed Acyclic Graph (DAG) multi-agent workflows with tool execution and memory reflection.
3. **📚 Hybrid RAG & Vector Engine**: HNSW vector indexing, BM25 keyword reranking, and chunking strategies.
4. **🧪 Prompt Engineering & Evaluation**: Side-by-side prompt testing, variable injection, and automated LLM-as-a-Judge scoring.
5. **🛡️ AI Safety & Guardrails Suite**: Real-time prompt injection blocking, PII redaction, and hallucination scoring.
6. **🎯 LoRA Fine-Tuning & Evaluation**: Multi-GPU training orchestration, loss curve monitoring, and benchmark verification (MMLU, GSM8K).

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
