var thousandsRE = /(\d)(?=(\d{3})+$)/g;

module.exports = function(inString,inSpeparator){
  var replaceStr = '$1' + (inSpeparator || ',');
  return String(inString).replace(thousandsRE, replaceStr);
};
