describe('Mock', () => {
  it('uso basico - Mock', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);
    expect(fakeAdd(1, 1)).toBe(5);
  });
});

export {};
