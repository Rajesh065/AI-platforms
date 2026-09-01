/**
 * AI System Specification: AiGovernanceAndModelCards
 * Domain Focus: EU AI Act high-risk classifications, carbon emissions tracking, and SHA-256 weight provenance
 * Architecture: CortexAI OS Neural Gateway
 */

export interface AiSystemSpec {
  specId: string;
  title: string;
  category: string;
  hyperparameterMatrix: {
    learningRate: number;
    contextLimitTokens: number;
    attentionDropout: number;
    temperatureBaseline: number;
  };
  benchmarkScorePct: number;
  isProductionVerified: boolean;
}

export const SPEC_GOV_DATASET: AiSystemSpec[] = [
  {
    specId: 'SPEC-GOV-001',
    title: 'AiGovernanceAndModelCards Configuration #1',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-002',
    title: 'AiGovernanceAndModelCards Configuration #2',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-003',
    title: 'AiGovernanceAndModelCards Configuration #3',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-004',
    title: 'AiGovernanceAndModelCards Configuration #4',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-005',
    title: 'AiGovernanceAndModelCards Configuration #5',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-006',
    title: 'AiGovernanceAndModelCards Configuration #6',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-007',
    title: 'AiGovernanceAndModelCards Configuration #7',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-008',
    title: 'AiGovernanceAndModelCards Configuration #8',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-009',
    title: 'AiGovernanceAndModelCards Configuration #9',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-010',
    title: 'AiGovernanceAndModelCards Configuration #10',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-011',
    title: 'AiGovernanceAndModelCards Configuration #11',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-012',
    title: 'AiGovernanceAndModelCards Configuration #12',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-013',
    title: 'AiGovernanceAndModelCards Configuration #13',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-014',
    title: 'AiGovernanceAndModelCards Configuration #14',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-015',
    title: 'AiGovernanceAndModelCards Configuration #15',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-016',
    title: 'AiGovernanceAndModelCards Configuration #16',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-017',
    title: 'AiGovernanceAndModelCards Configuration #17',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-018',
    title: 'AiGovernanceAndModelCards Configuration #18',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-019',
    title: 'AiGovernanceAndModelCards Configuration #19',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-020',
    title: 'AiGovernanceAndModelCards Configuration #20',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-021',
    title: 'AiGovernanceAndModelCards Configuration #21',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-022',
    title: 'AiGovernanceAndModelCards Configuration #22',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-023',
    title: 'AiGovernanceAndModelCards Configuration #23',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-024',
    title: 'AiGovernanceAndModelCards Configuration #24',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-025',
    title: 'AiGovernanceAndModelCards Configuration #25',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-026',
    title: 'AiGovernanceAndModelCards Configuration #26',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-027',
    title: 'AiGovernanceAndModelCards Configuration #27',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-028',
    title: 'AiGovernanceAndModelCards Configuration #28',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-029',
    title: 'AiGovernanceAndModelCards Configuration #29',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-030',
    title: 'AiGovernanceAndModelCards Configuration #30',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-031',
    title: 'AiGovernanceAndModelCards Configuration #31',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-032',
    title: 'AiGovernanceAndModelCards Configuration #32',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-033',
    title: 'AiGovernanceAndModelCards Configuration #33',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-034',
    title: 'AiGovernanceAndModelCards Configuration #34',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-035',
    title: 'AiGovernanceAndModelCards Configuration #35',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-036',
    title: 'AiGovernanceAndModelCards Configuration #36',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-037',
    title: 'AiGovernanceAndModelCards Configuration #37',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-038',
    title: 'AiGovernanceAndModelCards Configuration #38',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-039',
    title: 'AiGovernanceAndModelCards Configuration #39',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-040',
    title: 'AiGovernanceAndModelCards Configuration #40',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-041',
    title: 'AiGovernanceAndModelCards Configuration #41',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-042',
    title: 'AiGovernanceAndModelCards Configuration #42',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-043',
    title: 'AiGovernanceAndModelCards Configuration #43',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-044',
    title: 'AiGovernanceAndModelCards Configuration #44',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-045',
    title: 'AiGovernanceAndModelCards Configuration #45',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-046',
    title: 'AiGovernanceAndModelCards Configuration #46',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-047',
    title: 'AiGovernanceAndModelCards Configuration #47',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-048',
    title: 'AiGovernanceAndModelCards Configuration #48',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-049',
    title: 'AiGovernanceAndModelCards Configuration #49',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-050',
    title: 'AiGovernanceAndModelCards Configuration #50',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-051',
    title: 'AiGovernanceAndModelCards Configuration #51',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-052',
    title: 'AiGovernanceAndModelCards Configuration #52',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-053',
    title: 'AiGovernanceAndModelCards Configuration #53',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-054',
    title: 'AiGovernanceAndModelCards Configuration #54',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-055',
    title: 'AiGovernanceAndModelCards Configuration #55',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-056',
    title: 'AiGovernanceAndModelCards Configuration #56',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-057',
    title: 'AiGovernanceAndModelCards Configuration #57',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-058',
    title: 'AiGovernanceAndModelCards Configuration #58',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-059',
    title: 'AiGovernanceAndModelCards Configuration #59',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-060',
    title: 'AiGovernanceAndModelCards Configuration #60',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-061',
    title: 'AiGovernanceAndModelCards Configuration #61',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-062',
    title: 'AiGovernanceAndModelCards Configuration #62',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-063',
    title: 'AiGovernanceAndModelCards Configuration #63',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-064',
    title: 'AiGovernanceAndModelCards Configuration #64',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-065',
    title: 'AiGovernanceAndModelCards Configuration #65',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-066',
    title: 'AiGovernanceAndModelCards Configuration #66',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-067',
    title: 'AiGovernanceAndModelCards Configuration #67',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-068',
    title: 'AiGovernanceAndModelCards Configuration #68',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-069',
    title: 'AiGovernanceAndModelCards Configuration #69',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-070',
    title: 'AiGovernanceAndModelCards Configuration #70',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-071',
    title: 'AiGovernanceAndModelCards Configuration #71',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-072',
    title: 'AiGovernanceAndModelCards Configuration #72',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-073',
    title: 'AiGovernanceAndModelCards Configuration #73',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-074',
    title: 'AiGovernanceAndModelCards Configuration #74',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-075',
    title: 'AiGovernanceAndModelCards Configuration #75',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-076',
    title: 'AiGovernanceAndModelCards Configuration #76',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-077',
    title: 'AiGovernanceAndModelCards Configuration #77',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-078',
    title: 'AiGovernanceAndModelCards Configuration #78',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-079',
    title: 'AiGovernanceAndModelCards Configuration #79',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-080',
    title: 'AiGovernanceAndModelCards Configuration #80',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-081',
    title: 'AiGovernanceAndModelCards Configuration #81',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-082',
    title: 'AiGovernanceAndModelCards Configuration #82',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-083',
    title: 'AiGovernanceAndModelCards Configuration #83',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-084',
    title: 'AiGovernanceAndModelCards Configuration #84',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-085',
    title: 'AiGovernanceAndModelCards Configuration #85',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-086',
    title: 'AiGovernanceAndModelCards Configuration #86',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-087',
    title: 'AiGovernanceAndModelCards Configuration #87',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-088',
    title: 'AiGovernanceAndModelCards Configuration #88',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-089',
    title: 'AiGovernanceAndModelCards Configuration #89',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-090',
    title: 'AiGovernanceAndModelCards Configuration #90',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-091',
    title: 'AiGovernanceAndModelCards Configuration #91',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-092',
    title: 'AiGovernanceAndModelCards Configuration #92',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-093',
    title: 'AiGovernanceAndModelCards Configuration #93',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-094',
    title: 'AiGovernanceAndModelCards Configuration #94',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-095',
    title: 'AiGovernanceAndModelCards Configuration #95',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-096',
    title: 'AiGovernanceAndModelCards Configuration #96',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-097',
    title: 'AiGovernanceAndModelCards Configuration #97',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-098',
    title: 'AiGovernanceAndModelCards Configuration #98',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-099',
    title: 'AiGovernanceAndModelCards Configuration #99',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-100',
    title: 'AiGovernanceAndModelCards Configuration #100',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-101',
    title: 'AiGovernanceAndModelCards Configuration #101',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-102',
    title: 'AiGovernanceAndModelCards Configuration #102',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-103',
    title: 'AiGovernanceAndModelCards Configuration #103',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-104',
    title: 'AiGovernanceAndModelCards Configuration #104',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-105',
    title: 'AiGovernanceAndModelCards Configuration #105',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-106',
    title: 'AiGovernanceAndModelCards Configuration #106',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-107',
    title: 'AiGovernanceAndModelCards Configuration #107',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-108',
    title: 'AiGovernanceAndModelCards Configuration #108',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-109',
    title: 'AiGovernanceAndModelCards Configuration #109',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-110',
    title: 'AiGovernanceAndModelCards Configuration #110',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-111',
    title: 'AiGovernanceAndModelCards Configuration #111',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-112',
    title: 'AiGovernanceAndModelCards Configuration #112',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-113',
    title: 'AiGovernanceAndModelCards Configuration #113',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-114',
    title: 'AiGovernanceAndModelCards Configuration #114',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-115',
    title: 'AiGovernanceAndModelCards Configuration #115',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-116',
    title: 'AiGovernanceAndModelCards Configuration #116',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-117',
    title: 'AiGovernanceAndModelCards Configuration #117',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-118',
    title: 'AiGovernanceAndModelCards Configuration #118',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-119',
    title: 'AiGovernanceAndModelCards Configuration #119',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-120',
    title: 'AiGovernanceAndModelCards Configuration #120',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-121',
    title: 'AiGovernanceAndModelCards Configuration #121',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-122',
    title: 'AiGovernanceAndModelCards Configuration #122',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-123',
    title: 'AiGovernanceAndModelCards Configuration #123',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-124',
    title: 'AiGovernanceAndModelCards Configuration #124',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-125',
    title: 'AiGovernanceAndModelCards Configuration #125',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-126',
    title: 'AiGovernanceAndModelCards Configuration #126',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-127',
    title: 'AiGovernanceAndModelCards Configuration #127',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-128',
    title: 'AiGovernanceAndModelCards Configuration #128',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-129',
    title: 'AiGovernanceAndModelCards Configuration #129',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-130',
    title: 'AiGovernanceAndModelCards Configuration #130',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-131',
    title: 'AiGovernanceAndModelCards Configuration #131',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-132',
    title: 'AiGovernanceAndModelCards Configuration #132',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-133',
    title: 'AiGovernanceAndModelCards Configuration #133',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-134',
    title: 'AiGovernanceAndModelCards Configuration #134',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-135',
    title: 'AiGovernanceAndModelCards Configuration #135',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-136',
    title: 'AiGovernanceAndModelCards Configuration #136',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-137',
    title: 'AiGovernanceAndModelCards Configuration #137',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-138',
    title: 'AiGovernanceAndModelCards Configuration #138',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-139',
    title: 'AiGovernanceAndModelCards Configuration #139',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-140',
    title: 'AiGovernanceAndModelCards Configuration #140',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-141',
    title: 'AiGovernanceAndModelCards Configuration #141',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-142',
    title: 'AiGovernanceAndModelCards Configuration #142',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-143',
    title: 'AiGovernanceAndModelCards Configuration #143',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-144',
    title: 'AiGovernanceAndModelCards Configuration #144',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-145',
    title: 'AiGovernanceAndModelCards Configuration #145',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-146',
    title: 'AiGovernanceAndModelCards Configuration #146',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-147',
    title: 'AiGovernanceAndModelCards Configuration #147',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-148',
    title: 'AiGovernanceAndModelCards Configuration #148',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-149',
    title: 'AiGovernanceAndModelCards Configuration #149',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-150',
    title: 'AiGovernanceAndModelCards Configuration #150',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-151',
    title: 'AiGovernanceAndModelCards Configuration #151',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-152',
    title: 'AiGovernanceAndModelCards Configuration #152',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-153',
    title: 'AiGovernanceAndModelCards Configuration #153',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-154',
    title: 'AiGovernanceAndModelCards Configuration #154',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-155',
    title: 'AiGovernanceAndModelCards Configuration #155',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-156',
    title: 'AiGovernanceAndModelCards Configuration #156',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-157',
    title: 'AiGovernanceAndModelCards Configuration #157',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-158',
    title: 'AiGovernanceAndModelCards Configuration #158',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-159',
    title: 'AiGovernanceAndModelCards Configuration #159',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-160',
    title: 'AiGovernanceAndModelCards Configuration #160',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-161',
    title: 'AiGovernanceAndModelCards Configuration #161',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-162',
    title: 'AiGovernanceAndModelCards Configuration #162',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-163',
    title: 'AiGovernanceAndModelCards Configuration #163',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-164',
    title: 'AiGovernanceAndModelCards Configuration #164',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-165',
    title: 'AiGovernanceAndModelCards Configuration #165',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-166',
    title: 'AiGovernanceAndModelCards Configuration #166',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-167',
    title: 'AiGovernanceAndModelCards Configuration #167',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-168',
    title: 'AiGovernanceAndModelCards Configuration #168',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-169',
    title: 'AiGovernanceAndModelCards Configuration #169',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-170',
    title: 'AiGovernanceAndModelCards Configuration #170',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-171',
    title: 'AiGovernanceAndModelCards Configuration #171',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-172',
    title: 'AiGovernanceAndModelCards Configuration #172',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-173',
    title: 'AiGovernanceAndModelCards Configuration #173',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-174',
    title: 'AiGovernanceAndModelCards Configuration #174',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-175',
    title: 'AiGovernanceAndModelCards Configuration #175',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-176',
    title: 'AiGovernanceAndModelCards Configuration #176',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-177',
    title: 'AiGovernanceAndModelCards Configuration #177',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-178',
    title: 'AiGovernanceAndModelCards Configuration #178',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-179',
    title: 'AiGovernanceAndModelCards Configuration #179',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-180',
    title: 'AiGovernanceAndModelCards Configuration #180',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-181',
    title: 'AiGovernanceAndModelCards Configuration #181',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-182',
    title: 'AiGovernanceAndModelCards Configuration #182',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-183',
    title: 'AiGovernanceAndModelCards Configuration #183',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-184',
    title: 'AiGovernanceAndModelCards Configuration #184',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-185',
    title: 'AiGovernanceAndModelCards Configuration #185',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-186',
    title: 'AiGovernanceAndModelCards Configuration #186',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-187',
    title: 'AiGovernanceAndModelCards Configuration #187',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-188',
    title: 'AiGovernanceAndModelCards Configuration #188',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-189',
    title: 'AiGovernanceAndModelCards Configuration #189',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-190',
    title: 'AiGovernanceAndModelCards Configuration #190',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-191',
    title: 'AiGovernanceAndModelCards Configuration #191',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-192',
    title: 'AiGovernanceAndModelCards Configuration #192',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-193',
    title: 'AiGovernanceAndModelCards Configuration #193',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-194',
    title: 'AiGovernanceAndModelCards Configuration #194',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-195',
    title: 'AiGovernanceAndModelCards Configuration #195',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-196',
    title: 'AiGovernanceAndModelCards Configuration #196',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-197',
    title: 'AiGovernanceAndModelCards Configuration #197',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-198',
    title: 'AiGovernanceAndModelCards Configuration #198',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-199',
    title: 'AiGovernanceAndModelCards Configuration #199',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-200',
    title: 'AiGovernanceAndModelCards Configuration #200',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-201',
    title: 'AiGovernanceAndModelCards Configuration #201',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-202',
    title: 'AiGovernanceAndModelCards Configuration #202',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-203',
    title: 'AiGovernanceAndModelCards Configuration #203',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-204',
    title: 'AiGovernanceAndModelCards Configuration #204',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-205',
    title: 'AiGovernanceAndModelCards Configuration #205',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-206',
    title: 'AiGovernanceAndModelCards Configuration #206',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-207',
    title: 'AiGovernanceAndModelCards Configuration #207',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-208',
    title: 'AiGovernanceAndModelCards Configuration #208',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-209',
    title: 'AiGovernanceAndModelCards Configuration #209',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-210',
    title: 'AiGovernanceAndModelCards Configuration #210',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-211',
    title: 'AiGovernanceAndModelCards Configuration #211',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-212',
    title: 'AiGovernanceAndModelCards Configuration #212',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-213',
    title: 'AiGovernanceAndModelCards Configuration #213',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-214',
    title: 'AiGovernanceAndModelCards Configuration #214',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-215',
    title: 'AiGovernanceAndModelCards Configuration #215',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-216',
    title: 'AiGovernanceAndModelCards Configuration #216',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-217',
    title: 'AiGovernanceAndModelCards Configuration #217',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-218',
    title: 'AiGovernanceAndModelCards Configuration #218',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-219',
    title: 'AiGovernanceAndModelCards Configuration #219',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-220',
    title: 'AiGovernanceAndModelCards Configuration #220',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-221',
    title: 'AiGovernanceAndModelCards Configuration #221',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-222',
    title: 'AiGovernanceAndModelCards Configuration #222',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-223',
    title: 'AiGovernanceAndModelCards Configuration #223',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-224',
    title: 'AiGovernanceAndModelCards Configuration #224',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-225',
    title: 'AiGovernanceAndModelCards Configuration #225',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-226',
    title: 'AiGovernanceAndModelCards Configuration #226',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-227',
    title: 'AiGovernanceAndModelCards Configuration #227',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-228',
    title: 'AiGovernanceAndModelCards Configuration #228',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-229',
    title: 'AiGovernanceAndModelCards Configuration #229',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-230',
    title: 'AiGovernanceAndModelCards Configuration #230',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-231',
    title: 'AiGovernanceAndModelCards Configuration #231',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-232',
    title: 'AiGovernanceAndModelCards Configuration #232',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-233',
    title: 'AiGovernanceAndModelCards Configuration #233',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-234',
    title: 'AiGovernanceAndModelCards Configuration #234',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-235',
    title: 'AiGovernanceAndModelCards Configuration #235',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-236',
    title: 'AiGovernanceAndModelCards Configuration #236',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-237',
    title: 'AiGovernanceAndModelCards Configuration #237',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-238',
    title: 'AiGovernanceAndModelCards Configuration #238',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-239',
    title: 'AiGovernanceAndModelCards Configuration #239',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-240',
    title: 'AiGovernanceAndModelCards Configuration #240',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-241',
    title: 'AiGovernanceAndModelCards Configuration #241',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-242',
    title: 'AiGovernanceAndModelCards Configuration #242',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-243',
    title: 'AiGovernanceAndModelCards Configuration #243',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-244',
    title: 'AiGovernanceAndModelCards Configuration #244',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-245',
    title: 'AiGovernanceAndModelCards Configuration #245',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-246',
    title: 'AiGovernanceAndModelCards Configuration #246',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-247',
    title: 'AiGovernanceAndModelCards Configuration #247',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-248',
    title: 'AiGovernanceAndModelCards Configuration #248',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-249',
    title: 'AiGovernanceAndModelCards Configuration #249',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-250',
    title: 'AiGovernanceAndModelCards Configuration #250',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-251',
    title: 'AiGovernanceAndModelCards Configuration #251',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-252',
    title: 'AiGovernanceAndModelCards Configuration #252',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-253',
    title: 'AiGovernanceAndModelCards Configuration #253',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-254',
    title: 'AiGovernanceAndModelCards Configuration #254',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-255',
    title: 'AiGovernanceAndModelCards Configuration #255',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-256',
    title: 'AiGovernanceAndModelCards Configuration #256',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-257',
    title: 'AiGovernanceAndModelCards Configuration #257',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-258',
    title: 'AiGovernanceAndModelCards Configuration #258',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-259',
    title: 'AiGovernanceAndModelCards Configuration #259',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-260',
    title: 'AiGovernanceAndModelCards Configuration #260',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-261',
    title: 'AiGovernanceAndModelCards Configuration #261',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-262',
    title: 'AiGovernanceAndModelCards Configuration #262',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-263',
    title: 'AiGovernanceAndModelCards Configuration #263',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-264',
    title: 'AiGovernanceAndModelCards Configuration #264',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-265',
    title: 'AiGovernanceAndModelCards Configuration #265',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-266',
    title: 'AiGovernanceAndModelCards Configuration #266',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-267',
    title: 'AiGovernanceAndModelCards Configuration #267',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-268',
    title: 'AiGovernanceAndModelCards Configuration #268',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-269',
    title: 'AiGovernanceAndModelCards Configuration #269',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-270',
    title: 'AiGovernanceAndModelCards Configuration #270',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-271',
    title: 'AiGovernanceAndModelCards Configuration #271',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-272',
    title: 'AiGovernanceAndModelCards Configuration #272',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-273',
    title: 'AiGovernanceAndModelCards Configuration #273',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-274',
    title: 'AiGovernanceAndModelCards Configuration #274',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-275',
    title: 'AiGovernanceAndModelCards Configuration #275',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-276',
    title: 'AiGovernanceAndModelCards Configuration #276',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-277',
    title: 'AiGovernanceAndModelCards Configuration #277',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-278',
    title: 'AiGovernanceAndModelCards Configuration #278',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-279',
    title: 'AiGovernanceAndModelCards Configuration #279',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-280',
    title: 'AiGovernanceAndModelCards Configuration #280',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-281',
    title: 'AiGovernanceAndModelCards Configuration #281',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-282',
    title: 'AiGovernanceAndModelCards Configuration #282',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-283',
    title: 'AiGovernanceAndModelCards Configuration #283',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-284',
    title: 'AiGovernanceAndModelCards Configuration #284',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-285',
    title: 'AiGovernanceAndModelCards Configuration #285',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-286',
    title: 'AiGovernanceAndModelCards Configuration #286',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-287',
    title: 'AiGovernanceAndModelCards Configuration #287',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-288',
    title: 'AiGovernanceAndModelCards Configuration #288',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-289',
    title: 'AiGovernanceAndModelCards Configuration #289',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-290',
    title: 'AiGovernanceAndModelCards Configuration #290',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-291',
    title: 'AiGovernanceAndModelCards Configuration #291',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-292',
    title: 'AiGovernanceAndModelCards Configuration #292',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-293',
    title: 'AiGovernanceAndModelCards Configuration #293',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-294',
    title: 'AiGovernanceAndModelCards Configuration #294',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-295',
    title: 'AiGovernanceAndModelCards Configuration #295',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-296',
    title: 'AiGovernanceAndModelCards Configuration #296',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-297',
    title: 'AiGovernanceAndModelCards Configuration #297',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-298',
    title: 'AiGovernanceAndModelCards Configuration #298',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-299',
    title: 'AiGovernanceAndModelCards Configuration #299',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-300',
    title: 'AiGovernanceAndModelCards Configuration #300',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-301',
    title: 'AiGovernanceAndModelCards Configuration #301',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-302',
    title: 'AiGovernanceAndModelCards Configuration #302',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-303',
    title: 'AiGovernanceAndModelCards Configuration #303',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-304',
    title: 'AiGovernanceAndModelCards Configuration #304',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-305',
    title: 'AiGovernanceAndModelCards Configuration #305',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-306',
    title: 'AiGovernanceAndModelCards Configuration #306',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-307',
    title: 'AiGovernanceAndModelCards Configuration #307',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-308',
    title: 'AiGovernanceAndModelCards Configuration #308',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-309',
    title: 'AiGovernanceAndModelCards Configuration #309',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-310',
    title: 'AiGovernanceAndModelCards Configuration #310',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-311',
    title: 'AiGovernanceAndModelCards Configuration #311',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-312',
    title: 'AiGovernanceAndModelCards Configuration #312',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-313',
    title: 'AiGovernanceAndModelCards Configuration #313',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-314',
    title: 'AiGovernanceAndModelCards Configuration #314',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-315',
    title: 'AiGovernanceAndModelCards Configuration #315',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-316',
    title: 'AiGovernanceAndModelCards Configuration #316',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-317',
    title: 'AiGovernanceAndModelCards Configuration #317',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-318',
    title: 'AiGovernanceAndModelCards Configuration #318',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-319',
    title: 'AiGovernanceAndModelCards Configuration #319',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-320',
    title: 'AiGovernanceAndModelCards Configuration #320',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-321',
    title: 'AiGovernanceAndModelCards Configuration #321',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-322',
    title: 'AiGovernanceAndModelCards Configuration #322',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-323',
    title: 'AiGovernanceAndModelCards Configuration #323',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-324',
    title: 'AiGovernanceAndModelCards Configuration #324',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-325',
    title: 'AiGovernanceAndModelCards Configuration #325',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-326',
    title: 'AiGovernanceAndModelCards Configuration #326',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-327',
    title: 'AiGovernanceAndModelCards Configuration #327',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-328',
    title: 'AiGovernanceAndModelCards Configuration #328',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-329',
    title: 'AiGovernanceAndModelCards Configuration #329',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-330',
    title: 'AiGovernanceAndModelCards Configuration #330',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-331',
    title: 'AiGovernanceAndModelCards Configuration #331',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-332',
    title: 'AiGovernanceAndModelCards Configuration #332',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-333',
    title: 'AiGovernanceAndModelCards Configuration #333',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-334',
    title: 'AiGovernanceAndModelCards Configuration #334',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-335',
    title: 'AiGovernanceAndModelCards Configuration #335',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-336',
    title: 'AiGovernanceAndModelCards Configuration #336',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 90.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-337',
    title: 'AiGovernanceAndModelCards Configuration #337',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 91.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-338',
    title: 'AiGovernanceAndModelCards Configuration #338',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 92.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-339',
    title: 'AiGovernanceAndModelCards Configuration #339',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 93.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-340',
    title: 'AiGovernanceAndModelCards Configuration #340',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 94.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-341',
    title: 'AiGovernanceAndModelCards Configuration #341',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 95.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-342',
    title: 'AiGovernanceAndModelCards Configuration #342',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0001,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 96.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-343',
    title: 'AiGovernanceAndModelCards Configuration #343',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0002,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 97.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-344',
    title: 'AiGovernanceAndModelCards Configuration #344',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0003,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.3
    },
    benchmarkScorePct: 98.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-345',
    title: 'AiGovernanceAndModelCards Configuration #345',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0004,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.4
    },
    benchmarkScorePct: 84.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-346',
    title: 'AiGovernanceAndModelCards Configuration #346',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0005,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.5
    },
    benchmarkScorePct: 85.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-347',
    title: 'AiGovernanceAndModelCards Configuration #347',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0006,
      contextLimitTokens: 131072,
      attentionDropout: 0.05,
      temperatureBaseline: 0.6
    },
    benchmarkScorePct: 86.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-348',
    title: 'AiGovernanceAndModelCards Configuration #348',
    category: 'EU AI Act high-risk classifications',
    hyperparameterMatrix: {
      learningRate: 0.0007,
      contextLimitTokens: 32768,
      attentionDropout: 0.05,
      temperatureBaseline: 0.7
    },
    benchmarkScorePct: 87.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-349',
    title: 'AiGovernanceAndModelCards Configuration #349',
    category: 'carbon emissions tracking',
    hyperparameterMatrix: {
      learningRate: 0.0008,
      contextLimitTokens: 65536,
      attentionDropout: 0.05,
      temperatureBaseline: 0.8
    },
    benchmarkScorePct: 88.5,
    isProductionVerified: true
  },
  {
    specId: 'SPEC-GOV-350',
    title: 'AiGovernanceAndModelCards Configuration #350',
    category: 'and SHA-256 weight provenance',
    hyperparameterMatrix: {
      learningRate: 0.0009,
      contextLimitTokens: 98304,
      attentionDropout: 0.05,
      temperatureBaseline: 0.2
    },
    benchmarkScorePct: 89.5,
    isProductionVerified: true
  }
];

export class GOV_SpecCatalog {
  static search(query: string): AiSystemSpec[] {
    const q = query.toLowerCase().trim();
    if (!q) return SPEC_GOV_DATASET.slice(0, 20);
    return SPEC_GOV_DATASET.filter(p => p.title.toLowerCase().includes(q) || p.specId.toLowerCase().includes(q));
  }
}
