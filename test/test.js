var assert = require('assert');
var toThousands = require('../index');
describe('toThousands test main', function() {

  describe('+number <=3', function() {
    it("toThousands(10),'10'", function() {
      assert.equal( toThousands(10),'10');
    });
    it("toThousands(100),'100'", function() {
      assert.equal( toThousands(100),'100');
    });
  });


  describe('+number >3', function() {
    it("toThousands(1000),'1,000'", function() {
      assert.equal( toThousands(1000),'1,000');
    });
    it("toThousands(10000),'10,000'", function() {
      assert.equal( toThousands(10000),'10,000');
    });
  });

  describe('+number with float(point)', function() {
    it("toThousands(1000.123),'1,000.123'", function() {
      assert.equal( toThousands(1000.123),'1,000.123');
    });
    it("toThousands(10000.123),'10,000.123'", function() {
      assert.equal( toThousands(10000.123),'10,000.123');
    });
    it("toThousands(20000.00),'20,000.00'", function() {
      assert.equal( toThousands(20000.00),'20,000');
    });
  });


  describe('-number with float(point) <=3', function() {
    it("toThousands(-100.123),'-100.123'", function() {
      assert.equal( toThousands(-100.123),'-100.123');
    });
    it("toThousands(-100.123),'-100.123'", function() {
      assert.equal( toThousands(-1000.123),'-1,000.123');
    });
  });


  describe('-number with float(point) >3', function() {
    it("toThousands(-12341400.123),'-12,341,400.123'", function() {
      assert.equal( toThousands(-12341400.123),'-12,341,400.123');
    });
  });

});
