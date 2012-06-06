var RomNum = {};
(function(RomNum){
  var map = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };
  var keys = Object.keys(map);


  var convert = function(input) {
    var output = '';
    while (input > 0) {
      output = output + map[1];
      input = input - 1;
    }
    return output;

  };

  Number.prototype.toRoman = function() {
    return convert(this.valueOf());
  };

  exports.RomNum = RomNum;
  
})(RomNum);

