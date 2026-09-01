import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { RagKnowledgeBase } from '../types';
import { Database, Plus } from 'lucide-react';

export const RagKnowledgePage: React.FC = () => {
  const [kbs, setKbs] = useState<RagKnowledgeBase[]>([]);

  useEffect(() => {
    api.getKnowledgeBases().then(setKbs).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Hybrid RAG & Vector Knowledge Base Hub</h1>
          <p className="text-xs text-slate-500 mt-0.5">HNSW index collections, BM25 dense-sparse reranking, and semantic chunking</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
          <Plus className="w-4 h-4" />
          <span>New Vector Collection</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {kbs.map(k => (
          <div key={k.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm text-slate-900">{k.name}</span>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Indexed</span>
            </div>
            <p className="text-xs text-slate-500">Embedding: {k.embeddingModel} ({k.vectorDimensions} dims)</p>
            <div className="pt-2 border-t border-slate-100 flex justify-between text-xs text-slate-700 font-bold">
              <span>{k.totalDocuments} Docs</span>
              <span>{k.indexedChunksCount.toLocaleString()} Chunks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
