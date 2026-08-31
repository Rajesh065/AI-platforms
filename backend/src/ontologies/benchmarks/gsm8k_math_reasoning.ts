/**
 * Evaluation Benchmark Suite: GSM8K_Math_Reasoning
 * Benchmark Description: Grade school math multi-step reasoning problems and chain-of-thought solutions
 */

export interface BenchmarkTestCase {
  benchmarkId: string;
  suiteName: string;
  difficultyLevel: 'EASY' | 'MEDIUM' | 'HARD';
  inputPrompt: string;
  groundTruthReference: string;
  evaluationCriteria: string[];
  weight: number;
}

export const BENCHMARK_GSM_DATASET: BenchmarkTestCase[] = [
  {
    benchmarkId: 'BENCH-GSM-001',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #1 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #1 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-002',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #2 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #2 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-003',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #3 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #3 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-004',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #4 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #4 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-005',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #5 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #5 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-006',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #6 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #6 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-007',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #7 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #7 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-008',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #8 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #8 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-009',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #9 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #9 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-010',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #10 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #10 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-011',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #11 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #11 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-012',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #12 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #12 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-013',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #13 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #13 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-014',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #14 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #14 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-015',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #15 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #15 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-016',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #16 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #16 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-017',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #17 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #17 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-018',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #18 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #18 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-019',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #19 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #19 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-020',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #20 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #20 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-021',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #21 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #21 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-022',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #22 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #22 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-023',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #23 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #23 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-024',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #24 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #24 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-025',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #25 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #25 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-026',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #26 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #26 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-027',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #27 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #27 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-028',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #28 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #28 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-029',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #29 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #29 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-030',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #30 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #30 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-031',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #31 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #31 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-032',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #32 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #32 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-033',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #33 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #33 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-034',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #34 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #34 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-035',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #35 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #35 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-036',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #36 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #36 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-037',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #37 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #37 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-038',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #38 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #38 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-039',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #39 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #39 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-040',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #40 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #40 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-041',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #41 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #41 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-042',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #42 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #42 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-043',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #43 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #43 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-044',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #44 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #44 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-045',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #45 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #45 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-046',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #46 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #46 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-047',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #47 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #47 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-048',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #48 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #48 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-049',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #49 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #49 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-050',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #50 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #50 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-051',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #51 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #51 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-052',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #52 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #52 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-053',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #53 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #53 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-054',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #54 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #54 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-055',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #55 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #55 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-056',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #56 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #56 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-057',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #57 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #57 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-058',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #58 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #58 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-059',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #59 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #59 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-060',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #60 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #60 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-061',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #61 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #61 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-062',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #62 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #62 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-063',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #63 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #63 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-064',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #64 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #64 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-065',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #65 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #65 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-066',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #66 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #66 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-067',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #67 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #67 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-068',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #68 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #68 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-069',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #69 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #69 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-070',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #70 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #70 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-071',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #71 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #71 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-072',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #72 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #72 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-073',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #73 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #73 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-074',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #74 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #74 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-075',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #75 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #75 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-076',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #76 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #76 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-077',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #77 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #77 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-078',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #78 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #78 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-079',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #79 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #79 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-080',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #80 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #80 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-081',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #81 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #81 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-082',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #82 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #82 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-083',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #83 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #83 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-084',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #84 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #84 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-085',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #85 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #85 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-086',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #86 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #86 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-087',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #87 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #87 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-088',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #88 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #88 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-089',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #89 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #89 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-090',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #90 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #90 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-091',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #91 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #91 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-092',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #92 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #92 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-093',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #93 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #93 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-094',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #94 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #94 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-095',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #95 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #95 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-096',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #96 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #96 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-097',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #97 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #97 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-098',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #98 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #98 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-099',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #99 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #99 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-100',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #100 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #100 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-101',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #101 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #101 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-102',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #102 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #102 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-103',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #103 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #103 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-104',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #104 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #104 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-105',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #105 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #105 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-106',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #106 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #106 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-107',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #107 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #107 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-108',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #108 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #108 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-109',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #109 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #109 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-110',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #110 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #110 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-111',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #111 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #111 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-112',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #112 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #112 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-113',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #113 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #113 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-114',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #114 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #114 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-115',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #115 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #115 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-116',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #116 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #116 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-117',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #117 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #117 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-118',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #118 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #118 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-119',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #119 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #119 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-120',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #120 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #120 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-121',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #121 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #121 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-122',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #122 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #122 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-123',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #123 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #123 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-124',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #124 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #124 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-125',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #125 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #125 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-126',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #126 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #126 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-127',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #127 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #127 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-128',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #128 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #128 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-129',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #129 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #129 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-130',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #130 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #130 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-131',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #131 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #131 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-132',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #132 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #132 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-133',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #133 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #133 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-134',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #134 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #134 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-135',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #135 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #135 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-136',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #136 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #136 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-137',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #137 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #137 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-138',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #138 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #138 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-139',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #139 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #139 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-140',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #140 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #140 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-141',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #141 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #141 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-142',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #142 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #142 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-143',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #143 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #143 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-144',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #144 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #144 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-145',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #145 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #145 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-GSM-146',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #146 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #146 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-GSM-147',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #147 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #147 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-GSM-148',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #148 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #148 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-GSM-149',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #149 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #149 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-GSM-150',
    suiteName: 'GSM8K_Math_Reasoning',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #150 targeting Grade school math multi-step reasoning problems and chain-of-thought solutions',
    groundTruthReference: 'Expected golden output verification signature #150 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  }
];
