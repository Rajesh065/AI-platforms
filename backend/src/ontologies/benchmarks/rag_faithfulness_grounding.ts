/**
 * Evaluation Benchmark Suite: RAG_Faithfulness_Grounding
 * Benchmark Description: Context retrieval faithfulness, hallucination metrics, and evidence grounding tests
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

export const BENCHMARK_FTH_DATASET: BenchmarkTestCase[] = [
  {
    benchmarkId: 'BENCH-FTH-001',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #1 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #1 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-002',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #2 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #2 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-003',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #3 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #3 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-004',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #4 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #4 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-005',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #5 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #5 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-006',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #6 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #6 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-007',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #7 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #7 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-008',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #8 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #8 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-009',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #9 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #9 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-010',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #10 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #10 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-011',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #11 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #11 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-012',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #12 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #12 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-013',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #13 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #13 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-014',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #14 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #14 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-015',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #15 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #15 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-016',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #16 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #16 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-017',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #17 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #17 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-018',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #18 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #18 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-019',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #19 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #19 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-020',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #20 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #20 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-021',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #21 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #21 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-022',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #22 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #22 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-023',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #23 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #23 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-024',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #24 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #24 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-025',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #25 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #25 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-026',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #26 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #26 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-027',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #27 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #27 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-028',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #28 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #28 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-029',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #29 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #29 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-030',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #30 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #30 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-031',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #31 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #31 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-032',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #32 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #32 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-033',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #33 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #33 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-034',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #34 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #34 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-035',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #35 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #35 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-036',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #36 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #36 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-037',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #37 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #37 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-038',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #38 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #38 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-039',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #39 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #39 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-040',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #40 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #40 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-041',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #41 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #41 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-042',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #42 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #42 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-043',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #43 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #43 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-044',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #44 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #44 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-045',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #45 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #45 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-046',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #46 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #46 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-047',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #47 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #47 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-048',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #48 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #48 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-049',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #49 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #49 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-050',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #50 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #50 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-051',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #51 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #51 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-052',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #52 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #52 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-053',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #53 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #53 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-054',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #54 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #54 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-055',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #55 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #55 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-056',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #56 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #56 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-057',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #57 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #57 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-058',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #58 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #58 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-059',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #59 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #59 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-060',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #60 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #60 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-061',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #61 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #61 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-062',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #62 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #62 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-063',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #63 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #63 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-064',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #64 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #64 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-065',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #65 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #65 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-066',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #66 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #66 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-067',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #67 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #67 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-068',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #68 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #68 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-069',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #69 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #69 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-070',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #70 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #70 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-071',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #71 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #71 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-072',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #72 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #72 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-073',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #73 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #73 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-074',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #74 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #74 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-075',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #75 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #75 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-076',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #76 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #76 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-077',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #77 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #77 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-078',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #78 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #78 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-079',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #79 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #79 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-080',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #80 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #80 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-081',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #81 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #81 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-082',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #82 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #82 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-083',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #83 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #83 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-084',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #84 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #84 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-085',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #85 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #85 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-086',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #86 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #86 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-087',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #87 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #87 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-088',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #88 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #88 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-089',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #89 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #89 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-090',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #90 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #90 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-091',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #91 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #91 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-092',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #92 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #92 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-093',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #93 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #93 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-094',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #94 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #94 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-095',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #95 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #95 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-096',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #96 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #96 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-097',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #97 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #97 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-098',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #98 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #98 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-099',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #99 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #99 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-100',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #100 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #100 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-101',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #101 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #101 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-102',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #102 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #102 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-103',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #103 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #103 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-104',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #104 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #104 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-105',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #105 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #105 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-106',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #106 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #106 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-107',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #107 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #107 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-108',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #108 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #108 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-109',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #109 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #109 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-110',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #110 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #110 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-111',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #111 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #111 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-112',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #112 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #112 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-113',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #113 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #113 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-114',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #114 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #114 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-115',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #115 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #115 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-116',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #116 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #116 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-117',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #117 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #117 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-118',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #118 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #118 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-119',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #119 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #119 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-120',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #120 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #120 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-121',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #121 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #121 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-122',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #122 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #122 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-123',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #123 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #123 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-124',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #124 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #124 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-125',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #125 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #125 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-126',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #126 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #126 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-127',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #127 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #127 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-128',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #128 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #128 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-129',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #129 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #129 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-130',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #130 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #130 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-131',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #131 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #131 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-132',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #132 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #132 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-133',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #133 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #133 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-134',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #134 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #134 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-135',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #135 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #135 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-136',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #136 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #136 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-137',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #137 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #137 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-138',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #138 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #138 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-139',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #139 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #139 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-140',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #140 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #140 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-141',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #141 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #141 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-142',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #142 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #142 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-143',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #143 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #143 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-144',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #144 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #144 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-145',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #145 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #145 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  },
  {
    benchmarkId: 'BENCH-FTH-146',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #146 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #146 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.25
  },
  {
    benchmarkId: 'BENCH-FTH-147',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #147 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #147 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.5
  },
  {
    benchmarkId: 'BENCH-FTH-148',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'MEDIUM',
    inputPrompt: 'Enterprise test prompt scenario #148 targeting hallucination metrics',
    groundTruthReference: 'Expected golden output verification signature #148 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.75
  },
  {
    benchmarkId: 'BENCH-FTH-149',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'EASY',
    inputPrompt: 'Enterprise test prompt scenario #149 targeting and evidence grounding tests',
    groundTruthReference: 'Expected golden output verification signature #149 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 2.0
  },
  {
    benchmarkId: 'BENCH-FTH-150',
    suiteName: 'RAG_Faithfulness_Grounding',
    difficultyLevel: 'HARD',
    inputPrompt: 'Enterprise test prompt scenario #150 targeting Context retrieval faithfulness',
    groundTruthReference: 'Expected golden output verification signature #150 aligned with enterprise benchmarks',
    evaluationCriteria: ['Semantic correctness', 'Factuality grounding', 'Token efficiency', 'Deterministic reproducibility'],
    weight: 1.0
  }
];
