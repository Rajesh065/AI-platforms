/**
 * Evaluation Benchmark Suite: MMLU_Professional_Knowledge
 * Benchmark Description: Multi-discipline undergraduate and professional multiple choice knowledge benchmarks
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

export const BENCHMARK_MMLU_DATASET: BenchmarkTestCase[] = [
  {
    benchmarkId: 'BENCH-MMLU-001',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #1 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #1 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-002',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #2 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #2 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-003',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #3 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #3 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-004',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #4 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #4 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-005',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #5 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #5 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-006',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #6 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #6 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-007',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #7 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #7 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-008',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #8 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #8 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-009',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #9 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #9 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-010',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #10 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #10 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-011',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #11 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #11 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-012',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #12 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #12 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-013',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #13 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #13 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-014',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #14 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #14 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-015',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #15 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #15 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-016',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #16 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #16 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-017',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #17 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #17 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-018',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #18 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #18 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-019',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #19 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #19 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-020',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #20 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #20 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-021',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #21 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #21 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-022',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #22 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #22 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-023',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #23 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #23 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-024',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #24 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #24 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-025',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #25 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #25 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-026',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #26 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #26 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-027',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #27 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #27 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-028',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #28 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #28 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-029',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #29 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #29 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-030',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #30 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #30 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-031',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #31 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #31 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-032',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #32 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #32 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-033',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #33 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #33 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-034',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #34 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #34 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-035',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #35 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #35 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-036',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #36 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #36 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-037',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #37 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #37 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-038',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #38 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #38 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-039',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #39 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #39 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-040',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #40 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #40 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-041',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #41 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #41 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-042',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #42 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #42 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-043',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #43 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #43 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-044',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #44 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #44 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-045',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #45 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #45 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-046',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #46 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #46 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-047',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #47 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #47 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-048',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #48 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #48 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-049',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #49 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #49 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-050',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #50 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #50 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-051',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #51 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #51 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-052',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #52 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #52 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-053',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #53 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #53 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-054',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #54 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #54 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-055',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #55 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #55 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-056',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #56 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #56 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-057',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #57 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #57 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-058',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #58 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #58 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-059',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #59 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #59 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-060',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #60 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #60 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-061',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #61 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #61 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-062',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #62 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #62 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-063',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #63 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #63 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-064',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #64 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #64 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-065',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #65 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #65 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-066',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #66 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #66 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-067',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #67 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #67 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-068',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #68 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #68 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-069',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #69 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #69 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-070',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #70 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #70 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-071',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #71 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #71 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-072',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #72 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #72 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-073',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #73 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #73 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-074',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #74 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #74 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-075',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #75 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #75 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-076',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #76 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #76 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-077',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #77 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #77 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-078',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #78 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #78 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-079',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #79 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #79 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-080',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #80 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #80 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-081',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #81 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #81 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-082',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #82 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #82 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-083',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #83 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #83 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-084',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #84 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #84 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-085',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #85 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #85 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-086',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #86 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #86 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-087',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #87 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #87 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-088',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #88 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #88 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-089',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #89 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #89 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-090',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #90 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #90 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-091',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #91 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #91 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-092',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #92 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #92 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-093',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #93 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #93 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-094',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #94 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #94 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-095',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #95 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #95 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-096',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #96 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #96 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-097',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #97 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #97 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-098',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #98 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #98 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-099',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #99 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #99 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-100',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #100 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #100 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-101',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #101 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #101 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-102',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #102 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #102 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-103',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #103 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #103 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-104',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #104 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #104 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-105',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #105 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #105 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-106',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #106 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #106 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-107',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #107 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #107 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-108',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #108 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #108 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-109',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #109 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #109 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-110',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #110 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #110 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-111',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #111 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #111 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-112',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #112 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #112 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-113',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #113 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #113 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-114',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #114 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #114 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-115',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #115 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #115 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-116',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #116 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #116 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-117',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #117 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #117 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-118',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #118 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #118 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-119',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #119 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #119 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-120',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #120 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #120 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-121',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #121 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #121 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-122',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #122 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #122 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-123',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #123 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #123 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-124',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #124 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #124 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-125',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #125 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #125 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-126',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #126 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #126 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-127',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #127 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #127 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-128',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #128 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #128 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-129',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #129 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #129 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-130',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #130 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #130 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-131',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #131 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #131 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-132',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #132 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #132 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-133',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #133 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #133 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-134',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #134 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #134 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-135',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #135 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #135 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-136',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #136 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #136 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-137',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #137 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #137 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-138',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #138 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #138 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-139',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #139 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #139 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-140',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #140 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #140 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-141',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #141 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #141 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-142',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #142 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #142 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-143',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #143 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #143 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-144',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #144 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #144 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-145',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #145 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #145 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-MMLU-146',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #146 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #146 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-MMLU-147',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #147 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #147 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-MMLU-148',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #148 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #148 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-MMLU-149',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #149 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #149 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-MMLU-150',
    suiteName: 'MMLU_Professional_Knowledge',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #150 targeting Multi-discipline undergraduate and professional multiple choice knowledge benchmarks',
    groundTruthReference: 'Expected golden output verification signature #150 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  }
];
