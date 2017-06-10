var expect = require("chai").expect;
var jscrec = require("../src/jscrec");

describe("Longest Repeated Substring", function(){
   it("should be able to isolate the longest repeated sub-seqeunce from text body", function(){
       var text = "ATCGATCGA$";
       expect(jscrec.lrs(text)).to.equal("ATCGA");
       console.log(jscrec.lrs(text));
   }) ;
});