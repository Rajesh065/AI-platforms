import React from 'react';
export const RagKnowledgePage: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-xl font-black text-white">RAG Knowledge Hub & Vector Retrieval</h1>
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs">
      <p className="text-sm font-bold text-slate-200">Dense HNSW Vector Search + BM25 Hybrid Ranker</p>
      <p className="text-slate-400 font-mono">1,250,000 vector embeddings indexed across enterprise documentation.</p>
    </div>
  </div>
);
