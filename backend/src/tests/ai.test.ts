import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('CortexAI Gateway & Swarms API', () => {
  it('should return system health and GPU cluster specs', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should list active LLM model endpoints', async () => {
    const res = await request(app).get('/api/v1/models');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0].id).toBeDefined();
  });

  it('should route inference requests', async () => {
    const res = await request(app).post('/api/v1/inference/route').send({ modelId: 'deepseek-v3-chat', prompt: 'Benchmark test' });
    expect(res.status).toBe(200);
    expect(res.body.data.success).toBe(true);
  });
});
