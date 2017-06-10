var expect = require("chai").expect;
var jscrec = require("../src/jscrec");

describe("Connection Recommender", function(){
   it("should be able to recommend common connnection to connect two unknown persons", function(){
       var adj = {};
       adj["Alice"] = [ "Bob", "Carole" ];
       adj["Bob"] = ["Dave", "Jack"];
       var result = jscrec.fitAndTransform(adj);
       console.log(result);
   }) ;
});