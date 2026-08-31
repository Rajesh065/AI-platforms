/**
 * AI Model Architecture Registry: VisionLanguageMultimodalArchitectures
 * Description: Cross-attention visual encoders with patch projection and spatial token grounding
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

export const ARCHITECTURE_VLM_DATASET: ModelArchitectureSpec[] = [
  {
    architectureId: 'ARCH-VLM-001',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v1.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-002',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v2.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-003',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v3.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-004',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v4.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-005',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v5.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-006',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v6.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-007',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v7.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-008',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v8.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-009',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v9.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-010',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v10.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-011',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v11.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-012',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v12.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-013',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v13.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-014',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v14.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-015',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v15.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-016',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v16.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-017',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v17.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-018',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v18.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-019',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v19.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-020',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v20.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-021',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v21.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-022',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v22.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-023',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v23.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-024',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v24.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-025',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v25.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-026',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v26.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-027',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v27.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-028',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v28.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-029',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v29.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-030',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v30.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-031',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v31.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-032',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v32.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-033',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v33.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-034',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v34.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-035',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v35.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-036',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v36.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-037',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v37.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-038',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v38.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-039',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v39.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-040',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v40.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-041',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v41.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-042',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v42.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-043',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v43.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-044',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v44.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-045',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v45.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-046',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v46.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-047',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v47.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-048',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v48.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-049',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v49.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-050',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v50.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-051',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v51.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-052',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v52.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-053',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v53.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-054',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v54.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-055',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v55.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-056',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v56.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-057',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v57.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-058',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v58.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-059',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v59.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-060',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v60.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-061',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v61.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-062',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v62.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-063',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v63.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-064',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v64.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-065',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v65.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-066',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v66.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-067',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v67.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-068',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v68.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-069',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v69.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-070',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v70.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-071',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v71.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-072',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v72.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-073',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v73.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-074',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v74.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-075',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v75.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-076',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v76.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-077',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v77.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-078',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v78.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-079',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v79.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-080',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v80.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-081',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v81.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-082',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v82.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-083',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v83.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-084',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v84.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-085',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v85.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-086',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v86.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-087',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v87.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-088',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v88.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-089',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v89.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-090',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v90.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-091',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v91.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-092',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v92.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-093',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v93.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-094',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v94.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-095',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v95.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-096',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v96.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-097',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v97.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-098',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v98.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-099',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v99.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-100',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v100.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-101',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v101.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-102',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v102.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-103',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v103.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-104',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v104.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-105',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v105.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-106',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v106.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-107',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v107.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-108',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v108.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-109',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v109.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-110',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v110.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-111',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v111.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-112',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v112.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-113',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v113.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-114',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v114.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-115',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v115.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-116',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v116.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-117',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v117.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-118',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v118.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-119',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v119.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-120',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v120.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-121',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v121.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-122',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v122.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-123',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v123.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-124',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v124.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-125',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v125.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-126',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v126.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-127',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v127.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-128',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v128.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-129',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v129.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-130',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v130.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-131',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v131.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-132',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v132.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-133',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v133.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-134',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v134.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-135',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v135.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-136',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v136.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-137',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v137.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-138',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v138.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-139',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v139.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-140',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v140.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-141',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v141.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-142',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v142.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-143',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v143.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-144',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v144.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-145',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v145.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-146',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v146.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-147',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v147.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-148',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v148.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-149',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v149.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-150',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v150.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-151',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v151.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-152',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v152.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-153',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v153.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-154',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v154.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-155',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v155.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-156',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v156.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-157',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v157.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-158',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v158.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-159',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v159.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-160',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v160.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-161',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v161.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-162',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v162.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-163',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v163.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-164',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v164.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-165',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v165.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-166',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v166.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-167',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v167.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-168',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v168.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-169',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v169.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-170',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v170.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-171',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v171.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-172',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v172.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-173',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v173.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-174',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v174.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-175',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v175.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-176',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v176.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-177',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v177.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-178',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v178.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-179',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v179.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-180',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v180.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-181',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v181.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-182',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v182.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-183',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v183.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-184',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v184.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-185',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v185.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-186',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v186.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-187',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v187.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-188',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v188.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-189',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v189.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-190',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v190.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-191',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v191.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-192',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v192.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-193',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v193.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-194',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v194.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-195',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v195.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-196',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v196.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-197',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v197.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-198',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v198.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-199',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v199.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
    architectureId: 'ARCH-VLM-200',
    modelName: 'VisionLanguageMultimodalArchitectures Spec Model v200.0',
    family: 'VisionLanguageMultimodalArchitectures',
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
