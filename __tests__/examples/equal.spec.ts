describe('Equality', () => {
  it('basic case - toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('developer').toEqual('developer');
    expect({name: 'developer'}).toEqual({name: 'developer'});
  });

  it('basic case - toBe', () => {
    expect(1 + 1).toBe(2);
    expect('developer').toBe('developer');
    // we can't use toBe to campare object
    // expect({name: 'developer'}).toBe({name: 'developer'});
  });
});

export {};
