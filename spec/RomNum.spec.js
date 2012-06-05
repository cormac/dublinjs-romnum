var RomNum = require('../RomNum').RomNum;


describe ("Roman Numeral Kata testing", function() {
  it ("should return I for number 1", function() {
    expect(RomNum.convert(1)).toEqual('I');
  });

  it ("should return III for 3", function () {
    expect(RomNum.convert(3)).toEqual('III');
  });
	
	it ("should return IV for 4", function () {
    expect(RomNum.convert(4)).toEqual('IV');
  });

	it ("should return V for 5", function () {
    expect(RomNum.convert(5)).toEqual('V');
  });

  it ("should return VI for 6", function() {
    expect(RomNum.convert(6)).toEqual('VI');
  });
	
});
