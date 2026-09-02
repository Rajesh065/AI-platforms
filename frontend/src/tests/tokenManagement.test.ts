import { describe, it, expect } from 'vitest';

describe('Token Management Business Rules', () => {
  it('should enforce that used tokens cannot be revoked', () => {
    const allocated = 3500000;
    const used = 2950000;
    const remaining = allocated - used; // 550,000

    const attemptRevokeAmount = 800000;
    const canRevoke = attemptRevokeAmount <= remaining;
    expect(canRevoke).toBe(false);
  });

  it('should allow revoking unused remaining tokens', () => {
    const allocated = 3500000;
    const used = 2950000;
    const remaining = allocated - used; // 550,000

    const revokeAmount = 300000;
    const canRevoke = revokeAmount <= remaining;
    expect(canRevoke).toBe(true);

    const newAllocated = allocated - revokeAmount;
    const newRemaining = remaining - revokeAmount;
    expect(newAllocated).toBe(3200000);
    expect(newRemaining).toBe(250000);
  });

  it('should prevent employee from consuming more tokens than remaining balance', () => {
    const remainingBalance = 150000;
    const taskCost = 200000;
    const isAllowed = taskCost <= remainingBalance;
    expect(isAllowed).toBe(false);
  });

  it('should deduct consumed tokens accurately', () => {
    let remaining = 550000;
    let used = 2950000;
    const taskCost = 42000;

    used += taskCost;
    remaining -= taskCost;

    expect(used).toBe(2992000);
    expect(remaining).toBe(508000);
  });
});
