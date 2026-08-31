/**
 * Evaluation Benchmark Suite: Agent_Tool_Calling_Accuracy
 * Benchmark Description: Multi-turn tool selection precision, schema argument validity, and error recovery
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

export const BENCHMARK_TOL_DATASET: BenchmarkTestCase[] = [
  {
    benchmarkId: 'BENCH-TOL-001',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #1 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #1 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-002',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #2 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #2 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-003',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #3 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #3 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-004',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #4 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #4 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-005',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #5 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #5 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-006',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #6 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #6 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-007',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #7 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #7 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-008',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #8 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #8 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-009',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #9 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #9 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-010',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #10 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #10 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-011',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #11 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #11 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-012',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #12 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #12 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-013',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #13 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #13 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-014',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #14 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #14 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-015',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #15 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #15 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-016',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #16 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #16 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-017',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #17 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #17 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-018',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #18 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #18 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-019',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #19 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #19 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-020',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #20 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #20 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-021',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #21 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #21 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-022',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #22 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #22 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-023',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #23 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #23 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-024',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #24 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #24 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-025',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #25 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #25 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-026',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #26 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #26 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-027',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #27 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #27 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-028',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #28 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #28 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-029',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #29 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #29 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-030',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #30 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #30 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-031',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #31 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #31 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-032',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #32 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #32 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-033',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #33 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #33 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-034',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #34 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #34 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-035',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #35 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #35 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-036',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #36 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #36 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-037',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #37 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #37 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-038',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #38 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #38 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-039',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #39 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #39 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-040',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #40 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #40 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-041',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #41 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #41 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-042',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #42 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #42 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-043',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #43 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #43 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-044',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #44 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #44 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-045',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #45 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #45 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-046',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #46 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #46 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-047',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #47 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #47 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-048',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #48 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #48 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-049',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #49 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #49 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-050',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #50 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #50 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-051',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #51 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #51 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-052',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #52 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #52 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-053',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #53 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #53 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-054',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #54 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #54 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-055',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #55 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #55 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-056',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #56 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #56 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-057',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #57 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #57 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-058',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #58 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #58 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-059',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #59 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #59 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-060',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #60 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #60 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-061',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #61 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #61 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-062',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #62 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #62 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-063',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #63 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #63 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-064',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #64 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #64 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-065',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #65 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #65 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-066',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #66 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #66 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-067',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #67 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #67 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-068',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #68 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #68 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-069',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #69 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #69 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-070',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #70 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #70 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-071',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #71 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #71 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-072',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #72 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #72 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-073',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #73 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #73 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-074',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #74 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #74 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-075',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #75 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #75 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-076',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #76 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #76 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-077',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #77 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #77 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-078',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #78 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #78 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-079',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #79 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #79 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-080',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #80 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #80 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-081',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #81 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #81 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-082',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #82 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #82 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-083',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #83 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #83 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-084',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #84 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #84 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-085',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #85 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #85 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-086',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #86 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #86 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-087',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #87 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #87 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-088',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #88 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #88 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-089',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #89 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #89 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-090',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #90 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #90 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-091',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #91 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #91 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-092',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #92 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #92 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-093',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #93 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #93 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-094',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #94 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #94 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-095',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #95 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #95 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-096',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #96 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #96 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-097',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #97 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #97 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-098',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #98 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #98 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-099',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #99 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #99 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-100',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #100 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #100 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-101',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #101 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #101 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-102',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #102 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #102 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-103',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #103 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #103 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-104',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #104 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #104 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-105',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #105 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #105 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-106',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #106 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #106 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-107',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #107 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #107 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-108',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #108 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #108 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-109',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #109 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #109 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-110',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #110 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #110 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-111',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #111 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #111 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-112',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #112 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #112 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-113',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #113 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #113 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-114',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #114 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #114 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-115',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #115 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #115 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-116',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #116 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #116 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-117',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #117 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #117 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-118',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #118 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #118 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-119',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #119 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #119 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-120',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #120 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #120 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-121',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #121 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #121 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-122',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #122 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #122 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-123',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #123 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #123 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-124',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #124 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #124 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-125',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #125 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #125 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-126',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #126 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #126 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-127',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #127 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #127 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-128',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #128 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #128 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-129',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #129 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #129 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-130',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #130 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #130 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-131',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #131 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #131 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-132',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #132 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #132 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-133',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #133 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #133 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-134',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #134 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #134 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-135',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #135 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #135 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-136',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #136 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #136 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-137',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #137 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #137 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-138',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #138 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #138 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-139',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #139 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #139 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-140',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #140 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #140 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-141',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #141 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #141 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-142',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #142 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #142 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-143',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #143 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #143 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-144',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #144 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #144 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-145',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #145 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #145 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-TOL-146',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #146 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #146 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-TOL-147',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #147 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #147 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-TOL-148',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #148 targeting schema argument validity',
    groundTruthReference: 'Expected golden output verification signature #148 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-TOL-149',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #149 targeting and error recovery',
    groundTruthReference: 'Expected golden output verification signature #149 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-TOL-150',
    suiteName: 'Agent_Tool_Calling_Accuracy',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #150 targeting Multi-turn tool selection precision',
    groundTruthReference: 'Expected golden output verification signature #150 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  }
];
