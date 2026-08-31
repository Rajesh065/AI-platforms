/**
 * Evaluation Benchmark Suite: HumanEval_Coding_Benchmark
 * Benchmark Description: Python function specification, docstrings, edge cases, and automated unit test assertions
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

export const BENCHMARK_HEV_DATASET: BenchmarkTestCase[] = [
  {
    benchmarkId: 'BENCH-HEV-001',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #1 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #1 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-002',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #2 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #2 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-003',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #3 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #3 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-004',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #4 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #4 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-005',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #5 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #5 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-006',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #6 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #6 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-007',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #7 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #7 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-008',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #8 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #8 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-009',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #9 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #9 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-010',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #10 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #10 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-011',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #11 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #11 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-012',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #12 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #12 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-013',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #13 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #13 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-014',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #14 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #14 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-015',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #15 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #15 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-016',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #16 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #16 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-017',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #17 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #17 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-018',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #18 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #18 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-019',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #19 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #19 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-020',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #20 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #20 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-021',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #21 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #21 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-022',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #22 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #22 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-023',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #23 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #23 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-024',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #24 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #24 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-025',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #25 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #25 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-026',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #26 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #26 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-027',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #27 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #27 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-028',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #28 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #28 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-029',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #29 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #29 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-030',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #30 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #30 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-031',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #31 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #31 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-032',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #32 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #32 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-033',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #33 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #33 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-034',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #34 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #34 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-035',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #35 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #35 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-036',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #36 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #36 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-037',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #37 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #37 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-038',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #38 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #38 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-039',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #39 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #39 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-040',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #40 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #40 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-041',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #41 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #41 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-042',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #42 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #42 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-043',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #43 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #43 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-044',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #44 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #44 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-045',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #45 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #45 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-046',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #46 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #46 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-047',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #47 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #47 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-048',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #48 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #48 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-049',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #49 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #49 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-050',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #50 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #50 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-051',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #51 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #51 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-052',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #52 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #52 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-053',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #53 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #53 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-054',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #54 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #54 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-055',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #55 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #55 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-056',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #56 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #56 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-057',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #57 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #57 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-058',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #58 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #58 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-059',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #59 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #59 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-060',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #60 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #60 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-061',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #61 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #61 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-062',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #62 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #62 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-063',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #63 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #63 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-064',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #64 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #64 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-065',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #65 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #65 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-066',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #66 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #66 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-067',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #67 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #67 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-068',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #68 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #68 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-069',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #69 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #69 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-070',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #70 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #70 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-071',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #71 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #71 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-072',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #72 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #72 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-073',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #73 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #73 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-074',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #74 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #74 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-075',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #75 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #75 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-076',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #76 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #76 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-077',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #77 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #77 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-078',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #78 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #78 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-079',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #79 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #79 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-080',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #80 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #80 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-081',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #81 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #81 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-082',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #82 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #82 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-083',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #83 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #83 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-084',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #84 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #84 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-085',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #85 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #85 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-086',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #86 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #86 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-087',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #87 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #87 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-088',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #88 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #88 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-089',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #89 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #89 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-090',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #90 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #90 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-091',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #91 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #91 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-092',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #92 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #92 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-093',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #93 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #93 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-094',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #94 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #94 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-095',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #95 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #95 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-096',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #96 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #96 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-097',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #97 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #97 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-098',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #98 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #98 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-099',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #99 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #99 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-100',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #100 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #100 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-101',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #101 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #101 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-102',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #102 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #102 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-103',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #103 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #103 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-104',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #104 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #104 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-105',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #105 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #105 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-106',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #106 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #106 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-107',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #107 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #107 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-108',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #108 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #108 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-109',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #109 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #109 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-110',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #110 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #110 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-111',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #111 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #111 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-112',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #112 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #112 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-113',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #113 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #113 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-114',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #114 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #114 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-115',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #115 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #115 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-116',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #116 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #116 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-117',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #117 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #117 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-118',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #118 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #118 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-119',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #119 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #119 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-120',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #120 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #120 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-121',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #121 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #121 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-122',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #122 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #122 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-123',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #123 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #123 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-124',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #124 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #124 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-125',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #125 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #125 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-126',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #126 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #126 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-127',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #127 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #127 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-128',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #128 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #128 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-129',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #129 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #129 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-130',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #130 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #130 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-131',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #131 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #131 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-132',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #132 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #132 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-133',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #133 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #133 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-134',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #134 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #134 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-135',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #135 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #135 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-136',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #136 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #136 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-137',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #137 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #137 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-138',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #138 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #138 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-139',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #139 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #139 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-140',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #140 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #140 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-141',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #141 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #141 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-142',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #142 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #142 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-143',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #143 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #143 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-144',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #144 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #144 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-145',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #145 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #145 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-HEV-146',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #146 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #146 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-HEV-147',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #147 targeting and automated unit test assertions',
    groundTruthReference: 'Expected golden output verification signature #147 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-HEV-148',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #148 targeting Python function specification',
    groundTruthReference: 'Expected golden output verification signature #148 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-HEV-149',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #149 targeting docstrings',
    groundTruthReference: 'Expected golden output verification signature #149 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-HEV-150',
    suiteName: 'HumanEval_Coding_Benchmark',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #150 targeting edge cases',
    groundTruthReference: 'Expected golden output verification signature #150 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  }
];
