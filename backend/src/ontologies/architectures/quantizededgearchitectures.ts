/**
 * AI Model Architecture Registry: QuantizedEdgeArchitectures
 * Description: AWQ, GPTQ, and FP4/FP8 quantized model architectures for sub-millisecond on-device inference
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

export const ARCHITECTURE_QNT_DATASET: ModelArchitectureSpec[] = [
  {
    architectureId: 'ARCH-QNT-001',
    modelName: 'QuantizedEdgeArchitectures Spec Model v1.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-002',
    modelName: 'QuantizedEdgeArchitectures Spec Model v2.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-003',
    modelName: 'QuantizedEdgeArchitectures Spec Model v3.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-004',
    modelName: 'QuantizedEdgeArchitectures Spec Model v4.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-005',
    modelName: 'QuantizedEdgeArchitectures Spec Model v5.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-006',
    modelName: 'QuantizedEdgeArchitectures Spec Model v6.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-007',
    modelName: 'QuantizedEdgeArchitectures Spec Model v7.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-008',
    modelName: 'QuantizedEdgeArchitectures Spec Model v8.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-009',
    modelName: 'QuantizedEdgeArchitectures Spec Model v9.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-010',
    modelName: 'QuantizedEdgeArchitectures Spec Model v10.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-011',
    modelName: 'QuantizedEdgeArchitectures Spec Model v11.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-012',
    modelName: 'QuantizedEdgeArchitectures Spec Model v12.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-013',
    modelName: 'QuantizedEdgeArchitectures Spec Model v13.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-014',
    modelName: 'QuantizedEdgeArchitectures Spec Model v14.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-015',
    modelName: 'QuantizedEdgeArchitectures Spec Model v15.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-016',
    modelName: 'QuantizedEdgeArchitectures Spec Model v16.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-017',
    modelName: 'QuantizedEdgeArchitectures Spec Model v17.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-018',
    modelName: 'QuantizedEdgeArchitectures Spec Model v18.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-019',
    modelName: 'QuantizedEdgeArchitectures Spec Model v19.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-020',
    modelName: 'QuantizedEdgeArchitectures Spec Model v20.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-021',
    modelName: 'QuantizedEdgeArchitectures Spec Model v21.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-022',
    modelName: 'QuantizedEdgeArchitectures Spec Model v22.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-023',
    modelName: 'QuantizedEdgeArchitectures Spec Model v23.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-024',
    modelName: 'QuantizedEdgeArchitectures Spec Model v24.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-025',
    modelName: 'QuantizedEdgeArchitectures Spec Model v25.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-026',
    modelName: 'QuantizedEdgeArchitectures Spec Model v26.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-027',
    modelName: 'QuantizedEdgeArchitectures Spec Model v27.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-028',
    modelName: 'QuantizedEdgeArchitectures Spec Model v28.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-029',
    modelName: 'QuantizedEdgeArchitectures Spec Model v29.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-030',
    modelName: 'QuantizedEdgeArchitectures Spec Model v30.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-031',
    modelName: 'QuantizedEdgeArchitectures Spec Model v31.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-032',
    modelName: 'QuantizedEdgeArchitectures Spec Model v32.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-033',
    modelName: 'QuantizedEdgeArchitectures Spec Model v33.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-034',
    modelName: 'QuantizedEdgeArchitectures Spec Model v34.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-035',
    modelName: 'QuantizedEdgeArchitectures Spec Model v35.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-036',
    modelName: 'QuantizedEdgeArchitectures Spec Model v36.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-037',
    modelName: 'QuantizedEdgeArchitectures Spec Model v37.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-038',
    modelName: 'QuantizedEdgeArchitectures Spec Model v38.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-039',
    modelName: 'QuantizedEdgeArchitectures Spec Model v39.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-040',
    modelName: 'QuantizedEdgeArchitectures Spec Model v40.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-041',
    modelName: 'QuantizedEdgeArchitectures Spec Model v41.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-042',
    modelName: 'QuantizedEdgeArchitectures Spec Model v42.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-043',
    modelName: 'QuantizedEdgeArchitectures Spec Model v43.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-044',
    modelName: 'QuantizedEdgeArchitectures Spec Model v44.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-045',
    modelName: 'QuantizedEdgeArchitectures Spec Model v45.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-046',
    modelName: 'QuantizedEdgeArchitectures Spec Model v46.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-047',
    modelName: 'QuantizedEdgeArchitectures Spec Model v47.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-048',
    modelName: 'QuantizedEdgeArchitectures Spec Model v48.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-049',
    modelName: 'QuantizedEdgeArchitectures Spec Model v49.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-050',
    modelName: 'QuantizedEdgeArchitectures Spec Model v50.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-051',
    modelName: 'QuantizedEdgeArchitectures Spec Model v51.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-052',
    modelName: 'QuantizedEdgeArchitectures Spec Model v52.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-053',
    modelName: 'QuantizedEdgeArchitectures Spec Model v53.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-054',
    modelName: 'QuantizedEdgeArchitectures Spec Model v54.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-055',
    modelName: 'QuantizedEdgeArchitectures Spec Model v55.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-056',
    modelName: 'QuantizedEdgeArchitectures Spec Model v56.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-057',
    modelName: 'QuantizedEdgeArchitectures Spec Model v57.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-058',
    modelName: 'QuantizedEdgeArchitectures Spec Model v58.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-059',
    modelName: 'QuantizedEdgeArchitectures Spec Model v59.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-060',
    modelName: 'QuantizedEdgeArchitectures Spec Model v60.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-061',
    modelName: 'QuantizedEdgeArchitectures Spec Model v61.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-062',
    modelName: 'QuantizedEdgeArchitectures Spec Model v62.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-063',
    modelName: 'QuantizedEdgeArchitectures Spec Model v63.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-064',
    modelName: 'QuantizedEdgeArchitectures Spec Model v64.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-065',
    modelName: 'QuantizedEdgeArchitectures Spec Model v65.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-066',
    modelName: 'QuantizedEdgeArchitectures Spec Model v66.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-067',
    modelName: 'QuantizedEdgeArchitectures Spec Model v67.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-068',
    modelName: 'QuantizedEdgeArchitectures Spec Model v68.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-069',
    modelName: 'QuantizedEdgeArchitectures Spec Model v69.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-070',
    modelName: 'QuantizedEdgeArchitectures Spec Model v70.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-071',
    modelName: 'QuantizedEdgeArchitectures Spec Model v71.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-072',
    modelName: 'QuantizedEdgeArchitectures Spec Model v72.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-073',
    modelName: 'QuantizedEdgeArchitectures Spec Model v73.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-074',
    modelName: 'QuantizedEdgeArchitectures Spec Model v74.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-075',
    modelName: 'QuantizedEdgeArchitectures Spec Model v75.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-076',
    modelName: 'QuantizedEdgeArchitectures Spec Model v76.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-077',
    modelName: 'QuantizedEdgeArchitectures Spec Model v77.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-078',
    modelName: 'QuantizedEdgeArchitectures Spec Model v78.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-079',
    modelName: 'QuantizedEdgeArchitectures Spec Model v79.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-080',
    modelName: 'QuantizedEdgeArchitectures Spec Model v80.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-081',
    modelName: 'QuantizedEdgeArchitectures Spec Model v81.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-082',
    modelName: 'QuantizedEdgeArchitectures Spec Model v82.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-083',
    modelName: 'QuantizedEdgeArchitectures Spec Model v83.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-084',
    modelName: 'QuantizedEdgeArchitectures Spec Model v84.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-085',
    modelName: 'QuantizedEdgeArchitectures Spec Model v85.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-086',
    modelName: 'QuantizedEdgeArchitectures Spec Model v86.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-087',
    modelName: 'QuantizedEdgeArchitectures Spec Model v87.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-088',
    modelName: 'QuantizedEdgeArchitectures Spec Model v88.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-089',
    modelName: 'QuantizedEdgeArchitectures Spec Model v89.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-090',
    modelName: 'QuantizedEdgeArchitectures Spec Model v90.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-091',
    modelName: 'QuantizedEdgeArchitectures Spec Model v91.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-092',
    modelName: 'QuantizedEdgeArchitectures Spec Model v92.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-093',
    modelName: 'QuantizedEdgeArchitectures Spec Model v93.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-094',
    modelName: 'QuantizedEdgeArchitectures Spec Model v94.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-095',
    modelName: 'QuantizedEdgeArchitectures Spec Model v95.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-096',
    modelName: 'QuantizedEdgeArchitectures Spec Model v96.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-097',
    modelName: 'QuantizedEdgeArchitectures Spec Model v97.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-098',
    modelName: 'QuantizedEdgeArchitectures Spec Model v98.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-099',
    modelName: 'QuantizedEdgeArchitectures Spec Model v99.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-100',
    modelName: 'QuantizedEdgeArchitectures Spec Model v100.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-101',
    modelName: 'QuantizedEdgeArchitectures Spec Model v101.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-102',
    modelName: 'QuantizedEdgeArchitectures Spec Model v102.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-103',
    modelName: 'QuantizedEdgeArchitectures Spec Model v103.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-104',
    modelName: 'QuantizedEdgeArchitectures Spec Model v104.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-105',
    modelName: 'QuantizedEdgeArchitectures Spec Model v105.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-106',
    modelName: 'QuantizedEdgeArchitectures Spec Model v106.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-107',
    modelName: 'QuantizedEdgeArchitectures Spec Model v107.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-108',
    modelName: 'QuantizedEdgeArchitectures Spec Model v108.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-109',
    modelName: 'QuantizedEdgeArchitectures Spec Model v109.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-110',
    modelName: 'QuantizedEdgeArchitectures Spec Model v110.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-111',
    modelName: 'QuantizedEdgeArchitectures Spec Model v111.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-112',
    modelName: 'QuantizedEdgeArchitectures Spec Model v112.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-113',
    modelName: 'QuantizedEdgeArchitectures Spec Model v113.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-114',
    modelName: 'QuantizedEdgeArchitectures Spec Model v114.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-115',
    modelName: 'QuantizedEdgeArchitectures Spec Model v115.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-116',
    modelName: 'QuantizedEdgeArchitectures Spec Model v116.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-117',
    modelName: 'QuantizedEdgeArchitectures Spec Model v117.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-118',
    modelName: 'QuantizedEdgeArchitectures Spec Model v118.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-119',
    modelName: 'QuantizedEdgeArchitectures Spec Model v119.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-120',
    modelName: 'QuantizedEdgeArchitectures Spec Model v120.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-121',
    modelName: 'QuantizedEdgeArchitectures Spec Model v121.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-122',
    modelName: 'QuantizedEdgeArchitectures Spec Model v122.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-123',
    modelName: 'QuantizedEdgeArchitectures Spec Model v123.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-124',
    modelName: 'QuantizedEdgeArchitectures Spec Model v124.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-125',
    modelName: 'QuantizedEdgeArchitectures Spec Model v125.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-126',
    modelName: 'QuantizedEdgeArchitectures Spec Model v126.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-127',
    modelName: 'QuantizedEdgeArchitectures Spec Model v127.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-128',
    modelName: 'QuantizedEdgeArchitectures Spec Model v128.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-129',
    modelName: 'QuantizedEdgeArchitectures Spec Model v129.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-130',
    modelName: 'QuantizedEdgeArchitectures Spec Model v130.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-131',
    modelName: 'QuantizedEdgeArchitectures Spec Model v131.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-132',
    modelName: 'QuantizedEdgeArchitectures Spec Model v132.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-133',
    modelName: 'QuantizedEdgeArchitectures Spec Model v133.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-134',
    modelName: 'QuantizedEdgeArchitectures Spec Model v134.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-135',
    modelName: 'QuantizedEdgeArchitectures Spec Model v135.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-136',
    modelName: 'QuantizedEdgeArchitectures Spec Model v136.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-137',
    modelName: 'QuantizedEdgeArchitectures Spec Model v137.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-138',
    modelName: 'QuantizedEdgeArchitectures Spec Model v138.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-139',
    modelName: 'QuantizedEdgeArchitectures Spec Model v139.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-140',
    modelName: 'QuantizedEdgeArchitectures Spec Model v140.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-141',
    modelName: 'QuantizedEdgeArchitectures Spec Model v141.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-142',
    modelName: 'QuantizedEdgeArchitectures Spec Model v142.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-143',
    modelName: 'QuantizedEdgeArchitectures Spec Model v143.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-144',
    modelName: 'QuantizedEdgeArchitectures Spec Model v144.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-145',
    modelName: 'QuantizedEdgeArchitectures Spec Model v145.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-146',
    modelName: 'QuantizedEdgeArchitectures Spec Model v146.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-147',
    modelName: 'QuantizedEdgeArchitectures Spec Model v147.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-148',
    modelName: 'QuantizedEdgeArchitectures Spec Model v148.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-149',
    modelName: 'QuantizedEdgeArchitectures Spec Model v149.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-150',
    modelName: 'QuantizedEdgeArchitectures Spec Model v150.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-151',
    modelName: 'QuantizedEdgeArchitectures Spec Model v151.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-152',
    modelName: 'QuantizedEdgeArchitectures Spec Model v152.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-153',
    modelName: 'QuantizedEdgeArchitectures Spec Model v153.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-154',
    modelName: 'QuantizedEdgeArchitectures Spec Model v154.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-155',
    modelName: 'QuantizedEdgeArchitectures Spec Model v155.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-156',
    modelName: 'QuantizedEdgeArchitectures Spec Model v156.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-157',
    modelName: 'QuantizedEdgeArchitectures Spec Model v157.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-158',
    modelName: 'QuantizedEdgeArchitectures Spec Model v158.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-159',
    modelName: 'QuantizedEdgeArchitectures Spec Model v159.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-160',
    modelName: 'QuantizedEdgeArchitectures Spec Model v160.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-161',
    modelName: 'QuantizedEdgeArchitectures Spec Model v161.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-162',
    modelName: 'QuantizedEdgeArchitectures Spec Model v162.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-163',
    modelName: 'QuantizedEdgeArchitectures Spec Model v163.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-164',
    modelName: 'QuantizedEdgeArchitectures Spec Model v164.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-165',
    modelName: 'QuantizedEdgeArchitectures Spec Model v165.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-166',
    modelName: 'QuantizedEdgeArchitectures Spec Model v166.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-167',
    modelName: 'QuantizedEdgeArchitectures Spec Model v167.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-168',
    modelName: 'QuantizedEdgeArchitectures Spec Model v168.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-169',
    modelName: 'QuantizedEdgeArchitectures Spec Model v169.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-170',
    modelName: 'QuantizedEdgeArchitectures Spec Model v170.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-171',
    modelName: 'QuantizedEdgeArchitectures Spec Model v171.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-172',
    modelName: 'QuantizedEdgeArchitectures Spec Model v172.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-173',
    modelName: 'QuantizedEdgeArchitectures Spec Model v173.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-174',
    modelName: 'QuantizedEdgeArchitectures Spec Model v174.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-175',
    modelName: 'QuantizedEdgeArchitectures Spec Model v175.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-176',
    modelName: 'QuantizedEdgeArchitectures Spec Model v176.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-177',
    modelName: 'QuantizedEdgeArchitectures Spec Model v177.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-178',
    modelName: 'QuantizedEdgeArchitectures Spec Model v178.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-179',
    modelName: 'QuantizedEdgeArchitectures Spec Model v179.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-180',
    modelName: 'QuantizedEdgeArchitectures Spec Model v180.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-181',
    modelName: 'QuantizedEdgeArchitectures Spec Model v181.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-182',
    modelName: 'QuantizedEdgeArchitectures Spec Model v182.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-183',
    modelName: 'QuantizedEdgeArchitectures Spec Model v183.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-184',
    modelName: 'QuantizedEdgeArchitectures Spec Model v184.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-185',
    modelName: 'QuantizedEdgeArchitectures Spec Model v185.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-186',
    modelName: 'QuantizedEdgeArchitectures Spec Model v186.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-187',
    modelName: 'QuantizedEdgeArchitectures Spec Model v187.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-188',
    modelName: 'QuantizedEdgeArchitectures Spec Model v188.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-189',
    modelName: 'QuantizedEdgeArchitectures Spec Model v189.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-190',
    modelName: 'QuantizedEdgeArchitectures Spec Model v190.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-191',
    modelName: 'QuantizedEdgeArchitectures Spec Model v191.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-192',
    modelName: 'QuantizedEdgeArchitectures Spec Model v192.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-193',
    modelName: 'QuantizedEdgeArchitectures Spec Model v193.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-194',
    modelName: 'QuantizedEdgeArchitectures Spec Model v194.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-195',
    modelName: 'QuantizedEdgeArchitectures Spec Model v195.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-196',
    modelName: 'QuantizedEdgeArchitectures Spec Model v196.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-197',
    modelName: 'QuantizedEdgeArchitectures Spec Model v197.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-198',
    modelName: 'QuantizedEdgeArchitectures Spec Model v198.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-199',
    modelName: 'QuantizedEdgeArchitectures Spec Model v199.0',
    family: 'QuantizedEdgeArchitectures',
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
    architectureId: 'ARCH-QNT-200',
    modelName: 'QuantizedEdgeArchitectures Spec Model v200.0',
    family: 'QuantizedEdgeArchitectures',
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
