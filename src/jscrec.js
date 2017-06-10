var jscrec = jscrec || {};

(function (jss) {
    'use strict';
    var Tuple2 = new function(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    };
    
    jss.Tuple2 = Tuple2;
    
	jss.fitAndTransform = function(adj) {
        var mapper = {};
        for(var person in adj) {
            var friends = adj[person];
            for(var i = 0; i < friends.length; ++i){
                var p1 = friends[i];
                var p2 = person;
                if(p1 < p2) {
                    mapper[p1+"_" +p2] = null;
                } else {
                    mapper[p2+"_" +p1] = null;  
                }
            }
            for(var i=0; i < friends.length; ++i) {
                for(var j = i+1; j < friends.length; ++j) {
                    var p1 = friends[i];
                    var p2 = friends[j];
                    
                    var key = p1 + "_" + p2;
                    if(p1 > p2) {
                        key = p2 + "_" + p1;
                    }
                    if(key in mapper){
                        if(mapper[key] == null) {
                            continue;
                        } else {
                            mapper[key].push(person);
                        }
                    } else {
                        mapper[key] = [ person ];
                    }
                }
            }
        }
        
        return mapper;
    };
    
})(jscrec);

var module = module || {};
if(module) {
	module.exports = jscrec;
}