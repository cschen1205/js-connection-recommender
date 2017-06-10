var expect    = require("chai").expect;
var jscrec = require("../src/jscrec");

describe("Three Ways String Quick Sort", function() {
  it("should sort strings descendingly", function() {
      var a = [ "this", "is", "jim", "nice", "to", "meet", "you"];
      
      jscrec.threeWaysStringQuickSort(a);
      
      console.log(a);
    

  });
      
});