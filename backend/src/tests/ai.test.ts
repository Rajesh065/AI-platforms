import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('CortexAI API Gateway', () => {
  it('should return system health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should list available AI models', async () => {
    const res = await request(app).get('/api/v1/models');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('should execute prompt generation', async () => {
    const res = await request(app).post('/api/v1/playground/run').send({ modelId: 'gpt-4o', prompt: 'Explain Transformers' });
    expect(res.status).toBe(200);
    expect(res.body.data.response).toBeDefined();
  });
});
