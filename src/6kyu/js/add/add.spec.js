function add(...args) {
  return args.reduce((sum, current) => sum += current, 0);
}

describe('Add', function () {
  it('should add two number', () => {
    expect(add(1,2)).toEqual(3);
  })
});
