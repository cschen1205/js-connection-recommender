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
                if(p1 in mapper){
                    var p1_mapper = mapper[p1];
                    p1_mapper[p2] = null;
                } else {
                    var p1_mapper = {};
                    mapper[p1] = p1_mapper;
                    p1_mapper[p2] = null;
                }
                if(p2 in mapper) {
                    var p2_mapper = mapper[p2];
                    p2_mapper[p1] = null;
                } else {
                    var p2_mapper = {};
                    mapper[p2] = p2_mapper;
                    p2_mapper[p1] = null;
                }
            }
            for(var i=0; i < friends.length; ++i) {
                for(var j = i+1; j < friends.length; ++j) {
                    var p1 = friends[i];
                    var p2 = friends[j];
                    
                    if(p1 in mapper){
                        var p1_mapper = mapper[p1];
                        if(p2 in p1_mapper){
                            if(p1_mapper[p2] != null){
                                p1_mapper[p2].push(person);
                            }
                        } else {
                            p1_mapper[p2] = [ person ];
                        }
                        
                    } else {
                        var p1_mapper = {};
                        mapper[p1] = p1_mapper;
                        p1_mapper[p2] = [ person ];
                    }
                    if(p2 in mapper) {
                        var p2_mapper = mapper[p2];
                        if(p1 in p2_mapper){
                            if(p2_mapper[p1] != null){
                                p2_mapper[p1].push(person);
                            }
                        } else {
                            p2_mapper[p2] = [ person ];
                        }
                    } else {
                        var p2_mapper = {};
                        mapper[p2] = p2_mapper;
                        p2_mapper[p1] = [ person ];
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