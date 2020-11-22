(function () {
  require('../src');

  describe('api.basic test', () => {
    test('1000 should return 1,000', function () {
      var res = nx.toThousands(1000);
      expect(res).toBe('1,000');
    });

    test('10000 should return 10,000', function () {
      var res = nx.toThousands(10000);
      expect(res).toBe('10,000');
    });
    test('1000000 should return 1,000,000', function () {
      var res = nx.toThousands(1000000);
      expect(res).toBe('1,000,000');
    });
  });
})();
