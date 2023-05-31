describe('Compare number', () => {
  it('uso basico - compare', () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 1).toBeGreaterThanOrEqual(1);
    expect(1 + 1).toBeLessThan(3);
    expect(1 + 1).toBeLessThanOrEqual(2);
  });
});

export {};
