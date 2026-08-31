/**
 * Autonomous Agent Workflow Graph Specification: CyberThreatDetectionGraph
 * Workflow Domain: SIEM log correlation, anomalous query detection, and automated mitigation rule dispatch
 */

export interface AgentGraphNode {
  nodeId: string;
  nodeName: string;
  agentRole: string;
  evaluationMetric: string;
  retryPolicy: { maxAttempts: number; backoffFactor: number };
  fallbackNodeId: string;
  requiresHumanReview: boolean;
}

export const GRAPH_CTG_NODES: AgentGraphNode[] = [
  {
    nodeId: 'NODE-CTG-001',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #1',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-001',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-002',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #2',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-001',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-003',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #3',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-002',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-004',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #4',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-003',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-005',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #5',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-004',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-006',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #6',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-005',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-007',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #7',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-006',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-008',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #8',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-007',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-009',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #9',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-008',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-010',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #10',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-009',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-011',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #11',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-010',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-012',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #12',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-011',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-013',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #13',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-012',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-014',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #14',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-013',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-015',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #15',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-014',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-016',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #16',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-015',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-017',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #17',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-016',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-018',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #18',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-017',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-019',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #19',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-018',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-020',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #20',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-019',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-021',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #21',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-020',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-022',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #22',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-021',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-023',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #23',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-022',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-024',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #24',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-023',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-025',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #25',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-024',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-026',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #26',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-025',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-027',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #27',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-026',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-028',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #28',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-027',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-029',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #29',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-028',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-030',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #30',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-029',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-031',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #31',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-030',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-032',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #32',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-031',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-033',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #33',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-032',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-034',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #34',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-033',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-035',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #35',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-034',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-036',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #36',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-035',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-037',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #37',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-036',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-038',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #38',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-037',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-039',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #39',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-038',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-040',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #40',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-039',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-041',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #41',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-040',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-042',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #42',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-041',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-043',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #43',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-042',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-044',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #44',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-043',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-045',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #45',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-044',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-046',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #46',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-045',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-047',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #47',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-046',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-048',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #48',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-047',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-049',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #49',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-048',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-050',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #50',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-049',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-051',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #51',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-050',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-052',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #52',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-051',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-053',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #53',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-052',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-054',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #54',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-053',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-055',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #55',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-054',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-056',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #56',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-055',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-057',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #57',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-056',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-058',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #58',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-057',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-059',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #59',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-058',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-060',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #60',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-059',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-061',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #61',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-060',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-062',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #62',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-061',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-063',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #63',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-062',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-064',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #64',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-063',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-065',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #65',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-064',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-066',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #66',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-065',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-067',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #67',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-066',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-068',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #68',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-067',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-069',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #69',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-068',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-070',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #70',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-069',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-071',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #71',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-070',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-072',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #72',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-071',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-073',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #73',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-072',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-074',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #74',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-073',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-075',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #75',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-074',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-076',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #76',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-075',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-077',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #77',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-076',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-078',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #78',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-077',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-079',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #79',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-078',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-080',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #80',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-079',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-081',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #81',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-080',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-082',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #82',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-081',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-083',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #83',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-082',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-084',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #84',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-083',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-085',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #85',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-084',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-086',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #86',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-085',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-087',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #87',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-086',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-088',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #88',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-087',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-089',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #89',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-088',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-090',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #90',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-089',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-091',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #91',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-090',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-092',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #92',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-091',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-093',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #93',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-092',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-094',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #94',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-093',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-095',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #95',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-094',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-096',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #96',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-095',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-097',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #97',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-096',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-098',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #98',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-097',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-099',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #99',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-098',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-100',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #100',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-099',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-101',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #101',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-100',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-102',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #102',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-101',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-103',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #103',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-102',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-104',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #104',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-103',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-105',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #105',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-104',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-106',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #106',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-105',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-107',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #107',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-106',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-108',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #108',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-107',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-109',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #109',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-108',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-110',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #110',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-109',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-111',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #111',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-110',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-112',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #112',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-111',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-113',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #113',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-112',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-114',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #114',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-113',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-115',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #115',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-114',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-116',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #116',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-115',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-117',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #117',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-116',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-118',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #118',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-117',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-119',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #119',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-118',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-120',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #120',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-119',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-121',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #121',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-120',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-122',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #122',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-121',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-123',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #123',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-122',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-124',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #124',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-123',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-125',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #125',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-124',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-126',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #126',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-125',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-127',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #127',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-126',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-128',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #128',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-127',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-129',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #129',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-128',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-130',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #130',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-129',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-131',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #131',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-130',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-132',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #132',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-131',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-133',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #133',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-132',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-134',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #134',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-133',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-135',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #135',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-134',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-136',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #136',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-135',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-137',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #137',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-136',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-138',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #138',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-137',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-139',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #139',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-138',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-140',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #140',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-139',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-141',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #141',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-140',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-142',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #142',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-141',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-143',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #143',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-142',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-144',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #144',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-143',
    requiresHumanReview: true
  },
  {
    nodeId: 'NODE-CTG-145',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #145',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-144',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-146',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #146',
    agentRole: 'CODER',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-145',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-147',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #147',
    agentRole: 'RESEARCHER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-146',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-148',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #148',
    agentRole: 'CRITIC',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-147',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-149',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #149',
    agentRole: 'CODER',
    evaluationMetric: 'Deterministic Schema Compliance',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-148',
    requiresHumanReview: false
  },
  {
    nodeId: 'NODE-CTG-150',
    nodeName: 'CyberThreatDetectionGraph Task Execution Step #150',
    agentRole: 'SUPERVISOR',
    evaluationMetric: 'Hallucination Rate < 1%',
    retryPolicy: { maxAttempts: 3, backoffFactor: 1.5 },
    fallbackNodeId: 'NODE-CTG-149',
    requiresHumanReview: false
  }
];
