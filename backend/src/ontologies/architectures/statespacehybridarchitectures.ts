/**
 * AI Model Architecture Registry: StateSpaceHybridArchitectures
 * Description: Mamba-2 / Jamba selective state space models with linear-time sequential context computation
 */

export interface ModelArchitectureSpec {
  architectureId: string;
  modelName: string;
  family: string;
  parametersBillion: number;
  attentionHeads: number;
  hiddenDimension: number;
  layersCount: number;
  contextWindowTokens: number;
  kvCacheQuantization: string;
  tensorParallelDegree: number;
  pipelineParallelDegree: number;
  supportedServingFrameworks: string[];
  deploymentGuidelines: string[];
}

export const ARCHITECTURE_SSM_DATASET: ModelArchitectureSpec[] = [
  {
    architectureId: 'ARCH-SSM-001',
    modelName: 'StateSpaceHybridArchitectures Spec Model v1.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 2.0,
    attentionHeads: 17,
    hiddenDimension: 2560,
    layersCount: 25,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-002',
    modelName: 'StateSpaceHybridArchitectures Spec Model v2.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 3.5,
    attentionHeads: 18,
    hiddenDimension: 3072,
    layersCount: 26,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-003',
    modelName: 'StateSpaceHybridArchitectures Spec Model v3.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 5.0,
    attentionHeads: 19,
    hiddenDimension: 3584,
    layersCount: 27,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-004',
    modelName: 'StateSpaceHybridArchitectures Spec Model v4.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 6.5,
    attentionHeads: 20,
    hiddenDimension: 4096,
    layersCount: 28,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-005',
    modelName: 'StateSpaceHybridArchitectures Spec Model v5.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 8.0,
    attentionHeads: 21,
    hiddenDimension: 4608,
    layersCount: 29,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-006',
    modelName: 'StateSpaceHybridArchitectures Spec Model v6.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 9.5,
    attentionHeads: 22,
    hiddenDimension: 5120,
    layersCount: 30,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-007',
    modelName: 'StateSpaceHybridArchitectures Spec Model v7.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 11.0,
    attentionHeads: 23,
    hiddenDimension: 5632,
    layersCount: 31,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-008',
    modelName: 'StateSpaceHybridArchitectures Spec Model v8.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 12.5,
    attentionHeads: 24,
    hiddenDimension: 6144,
    layersCount: 32,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-009',
    modelName: 'StateSpaceHybridArchitectures Spec Model v9.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 14.0,
    attentionHeads: 25,
    hiddenDimension: 6656,
    layersCount: 33,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-010',
    modelName: 'StateSpaceHybridArchitectures Spec Model v10.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 15.5,
    attentionHeads: 26,
    hiddenDimension: 7168,
    layersCount: 34,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-011',
    modelName: 'StateSpaceHybridArchitectures Spec Model v11.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 17.0,
    attentionHeads: 27,
    hiddenDimension: 7680,
    layersCount: 35,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-012',
    modelName: 'StateSpaceHybridArchitectures Spec Model v12.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 18.5,
    attentionHeads: 28,
    hiddenDimension: 8192,
    layersCount: 36,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-013',
    modelName: 'StateSpaceHybridArchitectures Spec Model v13.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 20.0,
    attentionHeads: 29,
    hiddenDimension: 8704,
    layersCount: 37,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-014',
    modelName: 'StateSpaceHybridArchitectures Spec Model v14.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 21.5,
    attentionHeads: 30,
    hiddenDimension: 9216,
    layersCount: 38,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-015',
    modelName: 'StateSpaceHybridArchitectures Spec Model v15.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 23.0,
    attentionHeads: 31,
    hiddenDimension: 9728,
    layersCount: 39,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-016',
    modelName: 'StateSpaceHybridArchitectures Spec Model v16.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 24.5,
    attentionHeads: 32,
    hiddenDimension: 2048,
    layersCount: 40,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-017',
    modelName: 'StateSpaceHybridArchitectures Spec Model v17.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 26.0,
    attentionHeads: 33,
    hiddenDimension: 2560,
    layersCount: 41,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-018',
    modelName: 'StateSpaceHybridArchitectures Spec Model v18.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 27.5,
    attentionHeads: 34,
    hiddenDimension: 3072,
    layersCount: 42,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-019',
    modelName: 'StateSpaceHybridArchitectures Spec Model v19.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 29.0,
    attentionHeads: 35,
    hiddenDimension: 3584,
    layersCount: 43,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-020',
    modelName: 'StateSpaceHybridArchitectures Spec Model v20.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 30.5,
    attentionHeads: 36,
    hiddenDimension: 4096,
    layersCount: 44,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-021',
    modelName: 'StateSpaceHybridArchitectures Spec Model v21.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 32.0,
    attentionHeads: 37,
    hiddenDimension: 4608,
    layersCount: 45,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-022',
    modelName: 'StateSpaceHybridArchitectures Spec Model v22.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 33.5,
    attentionHeads: 38,
    hiddenDimension: 5120,
    layersCount: 46,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-023',
    modelName: 'StateSpaceHybridArchitectures Spec Model v23.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 35.0,
    attentionHeads: 39,
    hiddenDimension: 5632,
    layersCount: 47,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-024',
    modelName: 'StateSpaceHybridArchitectures Spec Model v24.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 36.5,
    attentionHeads: 40,
    hiddenDimension: 6144,
    layersCount: 48,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-025',
    modelName: 'StateSpaceHybridArchitectures Spec Model v25.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 38.0,
    attentionHeads: 41,
    hiddenDimension: 6656,
    layersCount: 49,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-026',
    modelName: 'StateSpaceHybridArchitectures Spec Model v26.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 39.5,
    attentionHeads: 42,
    hiddenDimension: 7168,
    layersCount: 50,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-027',
    modelName: 'StateSpaceHybridArchitectures Spec Model v27.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 41.0,
    attentionHeads: 43,
    hiddenDimension: 7680,
    layersCount: 51,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-028',
    modelName: 'StateSpaceHybridArchitectures Spec Model v28.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 42.5,
    attentionHeads: 44,
    hiddenDimension: 8192,
    layersCount: 52,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-029',
    modelName: 'StateSpaceHybridArchitectures Spec Model v29.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 44.0,
    attentionHeads: 45,
    hiddenDimension: 8704,
    layersCount: 53,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-030',
    modelName: 'StateSpaceHybridArchitectures Spec Model v30.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 45.5,
    attentionHeads: 46,
    hiddenDimension: 9216,
    layersCount: 54,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-031',
    modelName: 'StateSpaceHybridArchitectures Spec Model v31.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 47.0,
    attentionHeads: 47,
    hiddenDimension: 9728,
    layersCount: 55,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-032',
    modelName: 'StateSpaceHybridArchitectures Spec Model v32.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 48.5,
    attentionHeads: 48,
    hiddenDimension: 2048,
    layersCount: 56,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-033',
    modelName: 'StateSpaceHybridArchitectures Spec Model v33.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 50.0,
    attentionHeads: 49,
    hiddenDimension: 2560,
    layersCount: 57,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-034',
    modelName: 'StateSpaceHybridArchitectures Spec Model v34.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 51.5,
    attentionHeads: 50,
    hiddenDimension: 3072,
    layersCount: 58,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-035',
    modelName: 'StateSpaceHybridArchitectures Spec Model v35.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 53.0,
    attentionHeads: 51,
    hiddenDimension: 3584,
    layersCount: 59,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-036',
    modelName: 'StateSpaceHybridArchitectures Spec Model v36.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 54.5,
    attentionHeads: 52,
    hiddenDimension: 4096,
    layersCount: 60,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-037',
    modelName: 'StateSpaceHybridArchitectures Spec Model v37.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 56.0,
    attentionHeads: 53,
    hiddenDimension: 4608,
    layersCount: 61,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-038',
    modelName: 'StateSpaceHybridArchitectures Spec Model v38.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 57.5,
    attentionHeads: 54,
    hiddenDimension: 5120,
    layersCount: 62,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-039',
    modelName: 'StateSpaceHybridArchitectures Spec Model v39.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 59.0,
    attentionHeads: 55,
    hiddenDimension: 5632,
    layersCount: 63,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-040',
    modelName: 'StateSpaceHybridArchitectures Spec Model v40.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 60.5,
    attentionHeads: 56,
    hiddenDimension: 6144,
    layersCount: 64,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-041',
    modelName: 'StateSpaceHybridArchitectures Spec Model v41.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 62.0,
    attentionHeads: 57,
    hiddenDimension: 6656,
    layersCount: 65,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-042',
    modelName: 'StateSpaceHybridArchitectures Spec Model v42.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 63.5,
    attentionHeads: 58,
    hiddenDimension: 7168,
    layersCount: 66,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-043',
    modelName: 'StateSpaceHybridArchitectures Spec Model v43.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 65.0,
    attentionHeads: 59,
    hiddenDimension: 7680,
    layersCount: 67,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-044',
    modelName: 'StateSpaceHybridArchitectures Spec Model v44.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 66.5,
    attentionHeads: 60,
    hiddenDimension: 8192,
    layersCount: 68,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-045',
    modelName: 'StateSpaceHybridArchitectures Spec Model v45.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 68.0,
    attentionHeads: 61,
    hiddenDimension: 8704,
    layersCount: 69,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-046',
    modelName: 'StateSpaceHybridArchitectures Spec Model v46.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 69.5,
    attentionHeads: 62,
    hiddenDimension: 9216,
    layersCount: 70,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-047',
    modelName: 'StateSpaceHybridArchitectures Spec Model v47.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 71.0,
    attentionHeads: 63,
    hiddenDimension: 9728,
    layersCount: 71,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-048',
    modelName: 'StateSpaceHybridArchitectures Spec Model v48.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 72.5,
    attentionHeads: 64,
    hiddenDimension: 2048,
    layersCount: 72,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-049',
    modelName: 'StateSpaceHybridArchitectures Spec Model v49.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 74.0,
    attentionHeads: 65,
    hiddenDimension: 2560,
    layersCount: 73,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-050',
    modelName: 'StateSpaceHybridArchitectures Spec Model v50.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 75.5,
    attentionHeads: 66,
    hiddenDimension: 3072,
    layersCount: 74,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-051',
    modelName: 'StateSpaceHybridArchitectures Spec Model v51.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 77.0,
    attentionHeads: 67,
    hiddenDimension: 3584,
    layersCount: 75,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-052',
    modelName: 'StateSpaceHybridArchitectures Spec Model v52.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 78.5,
    attentionHeads: 68,
    hiddenDimension: 4096,
    layersCount: 76,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-053',
    modelName: 'StateSpaceHybridArchitectures Spec Model v53.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 80.0,
    attentionHeads: 69,
    hiddenDimension: 4608,
    layersCount: 77,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-054',
    modelName: 'StateSpaceHybridArchitectures Spec Model v54.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 81.5,
    attentionHeads: 70,
    hiddenDimension: 5120,
    layersCount: 78,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-055',
    modelName: 'StateSpaceHybridArchitectures Spec Model v55.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 83.0,
    attentionHeads: 71,
    hiddenDimension: 5632,
    layersCount: 79,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-056',
    modelName: 'StateSpaceHybridArchitectures Spec Model v56.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 84.5,
    attentionHeads: 72,
    hiddenDimension: 6144,
    layersCount: 80,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-057',
    modelName: 'StateSpaceHybridArchitectures Spec Model v57.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 86.0,
    attentionHeads: 73,
    hiddenDimension: 6656,
    layersCount: 81,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-058',
    modelName: 'StateSpaceHybridArchitectures Spec Model v58.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 87.5,
    attentionHeads: 74,
    hiddenDimension: 7168,
    layersCount: 82,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-059',
    modelName: 'StateSpaceHybridArchitectures Spec Model v59.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 89.0,
    attentionHeads: 75,
    hiddenDimension: 7680,
    layersCount: 83,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-060',
    modelName: 'StateSpaceHybridArchitectures Spec Model v60.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 90.5,
    attentionHeads: 76,
    hiddenDimension: 8192,
    layersCount: 24,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-061',
    modelName: 'StateSpaceHybridArchitectures Spec Model v61.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 92.0,
    attentionHeads: 77,
    hiddenDimension: 8704,
    layersCount: 25,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-062',
    modelName: 'StateSpaceHybridArchitectures Spec Model v62.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 93.5,
    attentionHeads: 78,
    hiddenDimension: 9216,
    layersCount: 26,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-063',
    modelName: 'StateSpaceHybridArchitectures Spec Model v63.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 95.0,
    attentionHeads: 79,
    hiddenDimension: 9728,
    layersCount: 27,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-064',
    modelName: 'StateSpaceHybridArchitectures Spec Model v64.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 96.5,
    attentionHeads: 16,
    hiddenDimension: 2048,
    layersCount: 28,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-065',
    modelName: 'StateSpaceHybridArchitectures Spec Model v65.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 98.0,
    attentionHeads: 17,
    hiddenDimension: 2560,
    layersCount: 29,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-066',
    modelName: 'StateSpaceHybridArchitectures Spec Model v66.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 99.5,
    attentionHeads: 18,
    hiddenDimension: 3072,
    layersCount: 30,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-067',
    modelName: 'StateSpaceHybridArchitectures Spec Model v67.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 101.0,
    attentionHeads: 19,
    hiddenDimension: 3584,
    layersCount: 31,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-068',
    modelName: 'StateSpaceHybridArchitectures Spec Model v68.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 102.5,
    attentionHeads: 20,
    hiddenDimension: 4096,
    layersCount: 32,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-069',
    modelName: 'StateSpaceHybridArchitectures Spec Model v69.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 104.0,
    attentionHeads: 21,
    hiddenDimension: 4608,
    layersCount: 33,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-070',
    modelName: 'StateSpaceHybridArchitectures Spec Model v70.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 0.5,
    attentionHeads: 22,
    hiddenDimension: 5120,
    layersCount: 34,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-071',
    modelName: 'StateSpaceHybridArchitectures Spec Model v71.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 2.0,
    attentionHeads: 23,
    hiddenDimension: 5632,
    layersCount: 35,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-072',
    modelName: 'StateSpaceHybridArchitectures Spec Model v72.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 3.5,
    attentionHeads: 24,
    hiddenDimension: 6144,
    layersCount: 36,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-073',
    modelName: 'StateSpaceHybridArchitectures Spec Model v73.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 5.0,
    attentionHeads: 25,
    hiddenDimension: 6656,
    layersCount: 37,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-074',
    modelName: 'StateSpaceHybridArchitectures Spec Model v74.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 6.5,
    attentionHeads: 26,
    hiddenDimension: 7168,
    layersCount: 38,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-075',
    modelName: 'StateSpaceHybridArchitectures Spec Model v75.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 8.0,
    attentionHeads: 27,
    hiddenDimension: 7680,
    layersCount: 39,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-076',
    modelName: 'StateSpaceHybridArchitectures Spec Model v76.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 9.5,
    attentionHeads: 28,
    hiddenDimension: 8192,
    layersCount: 40,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-077',
    modelName: 'StateSpaceHybridArchitectures Spec Model v77.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 11.0,
    attentionHeads: 29,
    hiddenDimension: 8704,
    layersCount: 41,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-078',
    modelName: 'StateSpaceHybridArchitectures Spec Model v78.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 12.5,
    attentionHeads: 30,
    hiddenDimension: 9216,
    layersCount: 42,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-079',
    modelName: 'StateSpaceHybridArchitectures Spec Model v79.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 14.0,
    attentionHeads: 31,
    hiddenDimension: 9728,
    layersCount: 43,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-080',
    modelName: 'StateSpaceHybridArchitectures Spec Model v80.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 15.5,
    attentionHeads: 32,
    hiddenDimension: 2048,
    layersCount: 44,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-081',
    modelName: 'StateSpaceHybridArchitectures Spec Model v81.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 17.0,
    attentionHeads: 33,
    hiddenDimension: 2560,
    layersCount: 45,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-082',
    modelName: 'StateSpaceHybridArchitectures Spec Model v82.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 18.5,
    attentionHeads: 34,
    hiddenDimension: 3072,
    layersCount: 46,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-083',
    modelName: 'StateSpaceHybridArchitectures Spec Model v83.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 20.0,
    attentionHeads: 35,
    hiddenDimension: 3584,
    layersCount: 47,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-084',
    modelName: 'StateSpaceHybridArchitectures Spec Model v84.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 21.5,
    attentionHeads: 36,
    hiddenDimension: 4096,
    layersCount: 48,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-085',
    modelName: 'StateSpaceHybridArchitectures Spec Model v85.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 23.0,
    attentionHeads: 37,
    hiddenDimension: 4608,
    layersCount: 49,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-086',
    modelName: 'StateSpaceHybridArchitectures Spec Model v86.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 24.5,
    attentionHeads: 38,
    hiddenDimension: 5120,
    layersCount: 50,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-087',
    modelName: 'StateSpaceHybridArchitectures Spec Model v87.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 26.0,
    attentionHeads: 39,
    hiddenDimension: 5632,
    layersCount: 51,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-088',
    modelName: 'StateSpaceHybridArchitectures Spec Model v88.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 27.5,
    attentionHeads: 40,
    hiddenDimension: 6144,
    layersCount: 52,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-089',
    modelName: 'StateSpaceHybridArchitectures Spec Model v89.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 29.0,
    attentionHeads: 41,
    hiddenDimension: 6656,
    layersCount: 53,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-090',
    modelName: 'StateSpaceHybridArchitectures Spec Model v90.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 30.5,
    attentionHeads: 42,
    hiddenDimension: 7168,
    layersCount: 54,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-091',
    modelName: 'StateSpaceHybridArchitectures Spec Model v91.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 32.0,
    attentionHeads: 43,
    hiddenDimension: 7680,
    layersCount: 55,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-092',
    modelName: 'StateSpaceHybridArchitectures Spec Model v92.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 33.5,
    attentionHeads: 44,
    hiddenDimension: 8192,
    layersCount: 56,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-093',
    modelName: 'StateSpaceHybridArchitectures Spec Model v93.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 35.0,
    attentionHeads: 45,
    hiddenDimension: 8704,
    layersCount: 57,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-094',
    modelName: 'StateSpaceHybridArchitectures Spec Model v94.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 36.5,
    attentionHeads: 46,
    hiddenDimension: 9216,
    layersCount: 58,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-095',
    modelName: 'StateSpaceHybridArchitectures Spec Model v95.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 38.0,
    attentionHeads: 47,
    hiddenDimension: 9728,
    layersCount: 59,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-096',
    modelName: 'StateSpaceHybridArchitectures Spec Model v96.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 39.5,
    attentionHeads: 48,
    hiddenDimension: 2048,
    layersCount: 60,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-097',
    modelName: 'StateSpaceHybridArchitectures Spec Model v97.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 41.0,
    attentionHeads: 49,
    hiddenDimension: 2560,
    layersCount: 61,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-098',
    modelName: 'StateSpaceHybridArchitectures Spec Model v98.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 42.5,
    attentionHeads: 50,
    hiddenDimension: 3072,
    layersCount: 62,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-099',
    modelName: 'StateSpaceHybridArchitectures Spec Model v99.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 44.0,
    attentionHeads: 51,
    hiddenDimension: 3584,
    layersCount: 63,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-100',
    modelName: 'StateSpaceHybridArchitectures Spec Model v100.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 45.5,
    attentionHeads: 52,
    hiddenDimension: 4096,
    layersCount: 64,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-101',
    modelName: 'StateSpaceHybridArchitectures Spec Model v101.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 47.0,
    attentionHeads: 53,
    hiddenDimension: 4608,
    layersCount: 65,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-102',
    modelName: 'StateSpaceHybridArchitectures Spec Model v102.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 48.5,
    attentionHeads: 54,
    hiddenDimension: 5120,
    layersCount: 66,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-103',
    modelName: 'StateSpaceHybridArchitectures Spec Model v103.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 50.0,
    attentionHeads: 55,
    hiddenDimension: 5632,
    layersCount: 67,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-104',
    modelName: 'StateSpaceHybridArchitectures Spec Model v104.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 51.5,
    attentionHeads: 56,
    hiddenDimension: 6144,
    layersCount: 68,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-105',
    modelName: 'StateSpaceHybridArchitectures Spec Model v105.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 53.0,
    attentionHeads: 57,
    hiddenDimension: 6656,
    layersCount: 69,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-106',
    modelName: 'StateSpaceHybridArchitectures Spec Model v106.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 54.5,
    attentionHeads: 58,
    hiddenDimension: 7168,
    layersCount: 70,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-107',
    modelName: 'StateSpaceHybridArchitectures Spec Model v107.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 56.0,
    attentionHeads: 59,
    hiddenDimension: 7680,
    layersCount: 71,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-108',
    modelName: 'StateSpaceHybridArchitectures Spec Model v108.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 57.5,
    attentionHeads: 60,
    hiddenDimension: 8192,
    layersCount: 72,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-109',
    modelName: 'StateSpaceHybridArchitectures Spec Model v109.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 59.0,
    attentionHeads: 61,
    hiddenDimension: 8704,
    layersCount: 73,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-110',
    modelName: 'StateSpaceHybridArchitectures Spec Model v110.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 60.5,
    attentionHeads: 62,
    hiddenDimension: 9216,
    layersCount: 74,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-111',
    modelName: 'StateSpaceHybridArchitectures Spec Model v111.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 62.0,
    attentionHeads: 63,
    hiddenDimension: 9728,
    layersCount: 75,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-112',
    modelName: 'StateSpaceHybridArchitectures Spec Model v112.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 63.5,
    attentionHeads: 64,
    hiddenDimension: 2048,
    layersCount: 76,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-113',
    modelName: 'StateSpaceHybridArchitectures Spec Model v113.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 65.0,
    attentionHeads: 65,
    hiddenDimension: 2560,
    layersCount: 77,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-114',
    modelName: 'StateSpaceHybridArchitectures Spec Model v114.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 66.5,
    attentionHeads: 66,
    hiddenDimension: 3072,
    layersCount: 78,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-115',
    modelName: 'StateSpaceHybridArchitectures Spec Model v115.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 68.0,
    attentionHeads: 67,
    hiddenDimension: 3584,
    layersCount: 79,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-116',
    modelName: 'StateSpaceHybridArchitectures Spec Model v116.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 69.5,
    attentionHeads: 68,
    hiddenDimension: 4096,
    layersCount: 80,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-117',
    modelName: 'StateSpaceHybridArchitectures Spec Model v117.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 71.0,
    attentionHeads: 69,
    hiddenDimension: 4608,
    layersCount: 81,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-118',
    modelName: 'StateSpaceHybridArchitectures Spec Model v118.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 72.5,
    attentionHeads: 70,
    hiddenDimension: 5120,
    layersCount: 82,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-119',
    modelName: 'StateSpaceHybridArchitectures Spec Model v119.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 74.0,
    attentionHeads: 71,
    hiddenDimension: 5632,
    layersCount: 83,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-120',
    modelName: 'StateSpaceHybridArchitectures Spec Model v120.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 75.5,
    attentionHeads: 72,
    hiddenDimension: 6144,
    layersCount: 24,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-121',
    modelName: 'StateSpaceHybridArchitectures Spec Model v121.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 77.0,
    attentionHeads: 73,
    hiddenDimension: 6656,
    layersCount: 25,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-122',
    modelName: 'StateSpaceHybridArchitectures Spec Model v122.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 78.5,
    attentionHeads: 74,
    hiddenDimension: 7168,
    layersCount: 26,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-123',
    modelName: 'StateSpaceHybridArchitectures Spec Model v123.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 80.0,
    attentionHeads: 75,
    hiddenDimension: 7680,
    layersCount: 27,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-124',
    modelName: 'StateSpaceHybridArchitectures Spec Model v124.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 81.5,
    attentionHeads: 76,
    hiddenDimension: 8192,
    layersCount: 28,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-125',
    modelName: 'StateSpaceHybridArchitectures Spec Model v125.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 83.0,
    attentionHeads: 77,
    hiddenDimension: 8704,
    layersCount: 29,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-126',
    modelName: 'StateSpaceHybridArchitectures Spec Model v126.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 84.5,
    attentionHeads: 78,
    hiddenDimension: 9216,
    layersCount: 30,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-127',
    modelName: 'StateSpaceHybridArchitectures Spec Model v127.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 86.0,
    attentionHeads: 79,
    hiddenDimension: 9728,
    layersCount: 31,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-128',
    modelName: 'StateSpaceHybridArchitectures Spec Model v128.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 87.5,
    attentionHeads: 16,
    hiddenDimension: 2048,
    layersCount: 32,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-129',
    modelName: 'StateSpaceHybridArchitectures Spec Model v129.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 89.0,
    attentionHeads: 17,
    hiddenDimension: 2560,
    layersCount: 33,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-130',
    modelName: 'StateSpaceHybridArchitectures Spec Model v130.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 90.5,
    attentionHeads: 18,
    hiddenDimension: 3072,
    layersCount: 34,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-131',
    modelName: 'StateSpaceHybridArchitectures Spec Model v131.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 92.0,
    attentionHeads: 19,
    hiddenDimension: 3584,
    layersCount: 35,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-132',
    modelName: 'StateSpaceHybridArchitectures Spec Model v132.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 93.5,
    attentionHeads: 20,
    hiddenDimension: 4096,
    layersCount: 36,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-133',
    modelName: 'StateSpaceHybridArchitectures Spec Model v133.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 95.0,
    attentionHeads: 21,
    hiddenDimension: 4608,
    layersCount: 37,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-134',
    modelName: 'StateSpaceHybridArchitectures Spec Model v134.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 96.5,
    attentionHeads: 22,
    hiddenDimension: 5120,
    layersCount: 38,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-135',
    modelName: 'StateSpaceHybridArchitectures Spec Model v135.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 98.0,
    attentionHeads: 23,
    hiddenDimension: 5632,
    layersCount: 39,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-136',
    modelName: 'StateSpaceHybridArchitectures Spec Model v136.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 99.5,
    attentionHeads: 24,
    hiddenDimension: 6144,
    layersCount: 40,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-137',
    modelName: 'StateSpaceHybridArchitectures Spec Model v137.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 101.0,
    attentionHeads: 25,
    hiddenDimension: 6656,
    layersCount: 41,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-138',
    modelName: 'StateSpaceHybridArchitectures Spec Model v138.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 102.5,
    attentionHeads: 26,
    hiddenDimension: 7168,
    layersCount: 42,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-139',
    modelName: 'StateSpaceHybridArchitectures Spec Model v139.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 104.0,
    attentionHeads: 27,
    hiddenDimension: 7680,
    layersCount: 43,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-140',
    modelName: 'StateSpaceHybridArchitectures Spec Model v140.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 0.5,
    attentionHeads: 28,
    hiddenDimension: 8192,
    layersCount: 44,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-141',
    modelName: 'StateSpaceHybridArchitectures Spec Model v141.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 2.0,
    attentionHeads: 29,
    hiddenDimension: 8704,
    layersCount: 45,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-142',
    modelName: 'StateSpaceHybridArchitectures Spec Model v142.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 3.5,
    attentionHeads: 30,
    hiddenDimension: 9216,
    layersCount: 46,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-143',
    modelName: 'StateSpaceHybridArchitectures Spec Model v143.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 5.0,
    attentionHeads: 31,
    hiddenDimension: 9728,
    layersCount: 47,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-144',
    modelName: 'StateSpaceHybridArchitectures Spec Model v144.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 6.5,
    attentionHeads: 32,
    hiddenDimension: 2048,
    layersCount: 48,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-145',
    modelName: 'StateSpaceHybridArchitectures Spec Model v145.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 8.0,
    attentionHeads: 33,
    hiddenDimension: 2560,
    layersCount: 49,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-146',
    modelName: 'StateSpaceHybridArchitectures Spec Model v146.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 9.5,
    attentionHeads: 34,
    hiddenDimension: 3072,
    layersCount: 50,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-147',
    modelName: 'StateSpaceHybridArchitectures Spec Model v147.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 11.0,
    attentionHeads: 35,
    hiddenDimension: 3584,
    layersCount: 51,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-148',
    modelName: 'StateSpaceHybridArchitectures Spec Model v148.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 12.5,
    attentionHeads: 36,
    hiddenDimension: 4096,
    layersCount: 52,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-149',
    modelName: 'StateSpaceHybridArchitectures Spec Model v149.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 14.0,
    attentionHeads: 37,
    hiddenDimension: 4608,
    layersCount: 53,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-150',
    modelName: 'StateSpaceHybridArchitectures Spec Model v150.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 15.5,
    attentionHeads: 38,
    hiddenDimension: 5120,
    layersCount: 54,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-151',
    modelName: 'StateSpaceHybridArchitectures Spec Model v151.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 17.0,
    attentionHeads: 39,
    hiddenDimension: 5632,
    layersCount: 55,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-152',
    modelName: 'StateSpaceHybridArchitectures Spec Model v152.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 18.5,
    attentionHeads: 40,
    hiddenDimension: 6144,
    layersCount: 56,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-153',
    modelName: 'StateSpaceHybridArchitectures Spec Model v153.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 20.0,
    attentionHeads: 41,
    hiddenDimension: 6656,
    layersCount: 57,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-154',
    modelName: 'StateSpaceHybridArchitectures Spec Model v154.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 21.5,
    attentionHeads: 42,
    hiddenDimension: 7168,
    layersCount: 58,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-155',
    modelName: 'StateSpaceHybridArchitectures Spec Model v155.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 23.0,
    attentionHeads: 43,
    hiddenDimension: 7680,
    layersCount: 59,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-156',
    modelName: 'StateSpaceHybridArchitectures Spec Model v156.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 24.5,
    attentionHeads: 44,
    hiddenDimension: 8192,
    layersCount: 60,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-157',
    modelName: 'StateSpaceHybridArchitectures Spec Model v157.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 26.0,
    attentionHeads: 45,
    hiddenDimension: 8704,
    layersCount: 61,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-158',
    modelName: 'StateSpaceHybridArchitectures Spec Model v158.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 27.5,
    attentionHeads: 46,
    hiddenDimension: 9216,
    layersCount: 62,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-159',
    modelName: 'StateSpaceHybridArchitectures Spec Model v159.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 29.0,
    attentionHeads: 47,
    hiddenDimension: 9728,
    layersCount: 63,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-160',
    modelName: 'StateSpaceHybridArchitectures Spec Model v160.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 30.5,
    attentionHeads: 48,
    hiddenDimension: 2048,
    layersCount: 64,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-161',
    modelName: 'StateSpaceHybridArchitectures Spec Model v161.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 32.0,
    attentionHeads: 49,
    hiddenDimension: 2560,
    layersCount: 65,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-162',
    modelName: 'StateSpaceHybridArchitectures Spec Model v162.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 33.5,
    attentionHeads: 50,
    hiddenDimension: 3072,
    layersCount: 66,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-163',
    modelName: 'StateSpaceHybridArchitectures Spec Model v163.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 35.0,
    attentionHeads: 51,
    hiddenDimension: 3584,
    layersCount: 67,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-164',
    modelName: 'StateSpaceHybridArchitectures Spec Model v164.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 36.5,
    attentionHeads: 52,
    hiddenDimension: 4096,
    layersCount: 68,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-165',
    modelName: 'StateSpaceHybridArchitectures Spec Model v165.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 38.0,
    attentionHeads: 53,
    hiddenDimension: 4608,
    layersCount: 69,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-166',
    modelName: 'StateSpaceHybridArchitectures Spec Model v166.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 39.5,
    attentionHeads: 54,
    hiddenDimension: 5120,
    layersCount: 70,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-167',
    modelName: 'StateSpaceHybridArchitectures Spec Model v167.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 41.0,
    attentionHeads: 55,
    hiddenDimension: 5632,
    layersCount: 71,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-168',
    modelName: 'StateSpaceHybridArchitectures Spec Model v168.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 42.5,
    attentionHeads: 56,
    hiddenDimension: 6144,
    layersCount: 72,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-169',
    modelName: 'StateSpaceHybridArchitectures Spec Model v169.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 44.0,
    attentionHeads: 57,
    hiddenDimension: 6656,
    layersCount: 73,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-170',
    modelName: 'StateSpaceHybridArchitectures Spec Model v170.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 45.5,
    attentionHeads: 58,
    hiddenDimension: 7168,
    layersCount: 74,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-171',
    modelName: 'StateSpaceHybridArchitectures Spec Model v171.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 47.0,
    attentionHeads: 59,
    hiddenDimension: 7680,
    layersCount: 75,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-172',
    modelName: 'StateSpaceHybridArchitectures Spec Model v172.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 48.5,
    attentionHeads: 60,
    hiddenDimension: 8192,
    layersCount: 76,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-173',
    modelName: 'StateSpaceHybridArchitectures Spec Model v173.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 50.0,
    attentionHeads: 61,
    hiddenDimension: 8704,
    layersCount: 77,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-174',
    modelName: 'StateSpaceHybridArchitectures Spec Model v174.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 51.5,
    attentionHeads: 62,
    hiddenDimension: 9216,
    layersCount: 78,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-175',
    modelName: 'StateSpaceHybridArchitectures Spec Model v175.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 53.0,
    attentionHeads: 63,
    hiddenDimension: 9728,
    layersCount: 79,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-176',
    modelName: 'StateSpaceHybridArchitectures Spec Model v176.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 54.5,
    attentionHeads: 64,
    hiddenDimension: 2048,
    layersCount: 80,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-177',
    modelName: 'StateSpaceHybridArchitectures Spec Model v177.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 56.0,
    attentionHeads: 65,
    hiddenDimension: 2560,
    layersCount: 81,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-178',
    modelName: 'StateSpaceHybridArchitectures Spec Model v178.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 57.5,
    attentionHeads: 66,
    hiddenDimension: 3072,
    layersCount: 82,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-179',
    modelName: 'StateSpaceHybridArchitectures Spec Model v179.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 59.0,
    attentionHeads: 67,
    hiddenDimension: 3584,
    layersCount: 83,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-180',
    modelName: 'StateSpaceHybridArchitectures Spec Model v180.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 60.5,
    attentionHeads: 68,
    hiddenDimension: 4096,
    layersCount: 24,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-181',
    modelName: 'StateSpaceHybridArchitectures Spec Model v181.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 62.0,
    attentionHeads: 69,
    hiddenDimension: 4608,
    layersCount: 25,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-182',
    modelName: 'StateSpaceHybridArchitectures Spec Model v182.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 63.5,
    attentionHeads: 70,
    hiddenDimension: 5120,
    layersCount: 26,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-183',
    modelName: 'StateSpaceHybridArchitectures Spec Model v183.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 65.0,
    attentionHeads: 71,
    hiddenDimension: 5632,
    layersCount: 27,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-184',
    modelName: 'StateSpaceHybridArchitectures Spec Model v184.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 66.5,
    attentionHeads: 72,
    hiddenDimension: 6144,
    layersCount: 28,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-185',
    modelName: 'StateSpaceHybridArchitectures Spec Model v185.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 68.0,
    attentionHeads: 73,
    hiddenDimension: 6656,
    layersCount: 29,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-186',
    modelName: 'StateSpaceHybridArchitectures Spec Model v186.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 69.5,
    attentionHeads: 74,
    hiddenDimension: 7168,
    layersCount: 30,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-187',
    modelName: 'StateSpaceHybridArchitectures Spec Model v187.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 71.0,
    attentionHeads: 75,
    hiddenDimension: 7680,
    layersCount: 31,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-188',
    modelName: 'StateSpaceHybridArchitectures Spec Model v188.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 72.5,
    attentionHeads: 76,
    hiddenDimension: 8192,
    layersCount: 32,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-189',
    modelName: 'StateSpaceHybridArchitectures Spec Model v189.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 74.0,
    attentionHeads: 77,
    hiddenDimension: 8704,
    layersCount: 33,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-190',
    modelName: 'StateSpaceHybridArchitectures Spec Model v190.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 75.5,
    attentionHeads: 78,
    hiddenDimension: 9216,
    layersCount: 34,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-191',
    modelName: 'StateSpaceHybridArchitectures Spec Model v191.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 77.0,
    attentionHeads: 79,
    hiddenDimension: 9728,
    layersCount: 35,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-192',
    modelName: 'StateSpaceHybridArchitectures Spec Model v192.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 78.5,
    attentionHeads: 16,
    hiddenDimension: 2048,
    layersCount: 36,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-193',
    modelName: 'StateSpaceHybridArchitectures Spec Model v193.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 80.0,
    attentionHeads: 17,
    hiddenDimension: 2560,
    layersCount: 37,
    contextWindowTokens: 65536,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-194',
    modelName: 'StateSpaceHybridArchitectures Spec Model v194.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 81.5,
    attentionHeads: 18,
    hiddenDimension: 3072,
    layersCount: 38,
    contextWindowTokens: 98304,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-195',
    modelName: 'StateSpaceHybridArchitectures Spec Model v195.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 83.0,
    attentionHeads: 19,
    hiddenDimension: 3584,
    layersCount: 39,
    contextWindowTokens: 131072,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-196',
    modelName: 'StateSpaceHybridArchitectures Spec Model v196.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 84.5,
    attentionHeads: 20,
    hiddenDimension: 4096,
    layersCount: 40,
    contextWindowTokens: 163840,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-197',
    modelName: 'StateSpaceHybridArchitectures Spec Model v197.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 86.0,
    attentionHeads: 21,
    hiddenDimension: 4608,
    layersCount: 41,
    contextWindowTokens: 196608,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-198',
    modelName: 'StateSpaceHybridArchitectures Spec Model v198.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 87.5,
    attentionHeads: 22,
    hiddenDimension: 5120,
    layersCount: 42,
    contextWindowTokens: 229376,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 2,
    pipelineParallelDegree: 1,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-199',
    modelName: 'StateSpaceHybridArchitectures Spec Model v199.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 89.0,
    attentionHeads: 23,
    hiddenDimension: 5632,
    layersCount: 43,
    contextWindowTokens: 262144,
    kvCacheQuantization: 'INT4',
    tensorParallelDegree: 4,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  },
  {
    architectureId: 'ARCH-SSM-200',
    modelName: 'StateSpaceHybridArchitectures Spec Model v200.0',
    family: 'StateSpaceHybridArchitectures',
    parametersBillion: 90.5,
    attentionHeads: 24,
    hiddenDimension: 6144,
    layersCount: 44,
    contextWindowTokens: 32768,
    kvCacheQuantization: 'FP8',
    tensorParallelDegree: 1,
    pipelineParallelDegree: 2,
    supportedServingFrameworks: ['vLLM', 'Triton Inference Server', 'TensorRT-LLM', 'Ollama Engine'],
    deploymentGuidelines: [
      'Pin GPU memory allocations to prevent dynamic paging bottlenecks',
      'Enable chunked prefill to maximize multi-tenant concurrency',
      'Deploy behind CortexAI Smart Fallback and Semantic Cache Gateway'
    ]
  }
];
