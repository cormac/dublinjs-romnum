var RomNum = require('./RomNum').RomNum;


describe ("Roman Numeral Kata testing", function() {
  it ("should return I for number 1", function() {
    var one = new Number(1);
    expect(one.toRoman()).toEqual('I');
  });

  it ("should return III for 3", function () {
    var two = new Number(3);
    expect(two.toRoman()).toEqual('III');
  });
	
	it ("should return IV for 4", function () {
    var four = new Number(4);
    expect(four.toRoman()).toEqual('IV');
  });

	it ("should return V for 5", function () {
    var five = new Number(5);
    expect(five.toRoman()).toEqual('V');
  });

	
});
