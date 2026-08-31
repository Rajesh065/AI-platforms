import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('CortexAI API Gateway & Health', () => {
  it('should return system health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should retrieve model registry', async () => {
    const res = await request(app).get('/api/v1/models');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});
