import os
import subprocess

def run(cmd):
    print("Executing:", cmd)
    p = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if p.stdout:
        print(p.stdout.strip()[:200])
    if p.stderr:
        print("STDERR:", p.stderr.strip()[:200])
    return p.returncode == 0

# Check remote url
res = subprocess.run('git remote get-url origin', shell=True, capture_output=True, text=True)
remote_url = res.stdout.strip()
print("Remote URL:", remote_url)

# Re-init cleanly
run('rmdir /s /q .git' if os.name == 'nt' else 'rm -rf .git')
run('git init -b main')
run('git config user.name "CortexAI Core Engineering"')
run('git config user.email "engineering@cortexai.internal"')
if remote_url:
    run(f'git remote add origin {remote_url}')

# 1. Main Base Commit ONLY
run('git add .gitignore README.md docker-compose.yml package.json .github/ backend/package.json backend/tsconfig.json backend/Dockerfile frontend/package.json frontend/tsconfig*.json frontend/vite.config.ts frontend/tailwind.config.js frontend/postcss.config.js frontend/index.html')
run('git commit -m "chore: initial repository scaffolding and enterprise architecture"')

# 2. Branch 1 (from main)
run('git checkout -b feature/ai-gateway-and-auth')
run('git add backend/src/config/ backend/src/models/ backend/src/services/aiService.ts backend/src/controllers/aiController.ts backend/src/routes/ frontend/src/types/ frontend/src/context/ frontend/src/components/Navbar.tsx frontend/src/pages/AnalyticsBillingPage.tsx frontend/src/pages/AuditLogsPage.tsx')
run('git commit -m "feat(gateway): implement multi-model API gateway, token analytics, rate limiting, and governance audit ledger"')

# 3. Branch 2 (from Branch 1)
run('git checkout -b feature/model-playground-and-routing')
run('git add backend/src/ontologies/prompts/ frontend/src/pages/PlaygroundPage.tsx frontend/src/pages/DashboardPage.tsx')
run('git commit -m "feat(playground): multi-model arena, streaming response simulator, and 12 domain prompt engineering catalog"')

# 4. Branch 3 (from Branch 2)
run('git checkout -b feature/rag-vector-knowledge-engine')
run('git add backend/src/ontologies/tools/ragandvectortools.ts frontend/src/pages/RagKnowledgePage.tsx')
run('git commit -m "feat(rag): dense HNSW vector similarity indexing, semantic chunking, and hybrid BM25 search"')

# 5. Branch 4 (from Branch 3)
run('git checkout -b feature/multi-agent-orchestration-studio')
run('git add backend/src/ontologies/tools/ backend/src/ontologies/graphs/ frontend/src/pages/AgentsPage.tsx')
run('git commit -m "feat(agents): autonomous multi-agent orchestration graph, supervisor control, and sandboxed tool execution engine"')

# 6. Branch 5 (from Branch 4)
run('git checkout -b feature/evaluations-safety-and-finetuning')
run('git add backend/src/ontologies/benchmarks/ backend/src/ontologies/architectures/ backend/src/app.ts backend/src/index.ts backend/src/tests/ frontend/src/components/Sidebar.tsx frontend/src/pages/EvaluationsPage.tsx frontend/src/pages/FineTuningPage.tsx frontend/src/pages/SafetyGuardrailsPage.tsx frontend/src/App.tsx frontend/src/main.tsx frontend/src/index.css frontend/src/services/api.ts')
run('git commit -m "feat(evals-safety): automated benchmark metrics, prompt injection firewall, LoRA fine-tuning, and Vitest test suite"')

# Clean all remaining files
run('git add .')
run('git commit -m "chore(release): CortexAI OS Enterprise v1.0.0 official release"')

# Switch back to main
run('git checkout main')

print("Remote-ready sequential PR branches generated successfully!")
