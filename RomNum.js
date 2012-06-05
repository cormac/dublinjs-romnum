var RomNum = {

  output: '',
  map: {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  },

  convert: function(input) {
    var Inumeral= "I";
    var Vnumeral= "V";
    this.input = input;
    return this.converterLogic(Vnumeral, Inumeral);
  },

    

  
}

exports.RomNum = RomNum;
