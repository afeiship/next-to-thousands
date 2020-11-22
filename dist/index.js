/*!
 * name: @jswork/next-to-thousands
 * description: To thousands for number.
 * homepage: https://github.com/afeiship/next-to-thousands
 * version: 1.0.0
 * date: 2020-11-22 17:10:49
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var THOUSANDS_RE = /\d{1,3}(?=(\d{3})+$)/g;
  var POINT_RE = /^(\d+)((\.\d+)?)$/;

  nx.toThousands = function (inString, inSpeparator) {
    var replaceStr = '$&' + (inSpeparator || ',');
    var numberVal = inString * 1;
    var string = numberVal >= 0 ? String(inString) : String(inString).slice(1);
    var value = string.replace(POINT_RE, function (str, s1, s2) {
      return s1.replace(THOUSANDS_RE, replaceStr) + s2;
    });
    return numberVal >= 0 ? value : '-' + value;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toThousands;
  }
})();
