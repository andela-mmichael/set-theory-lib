function Set(){        
    this.element = arguments[0] || [];

    //add elements
    this.addElement = function(arr){
        for(var i = 0; i < arr.length; i++){
            this.element.push(arr[i]);
        }       
        return this.element;
    };

    //removes element
    this.removeElement = function(arr){
       for(var i = 0; i < this.element.length; i++){
            if(this.element[i] === arr){
                var ind = this.element.indexOf(arr);
                this.element.splice(ind,1);
                return this.element;
            }            
        }
        return "Not an Element";
    };

    //find the cardinality of a set
    this.cardinality = function(){
        return this.element.length;
    };

    //gets member of a set
    this.isMemberOf = function(m) {
        for (var i = 0; i < this.element.length; i++) {
            if(this.element[i] === m){
                return true;
            }
        }
        return false;
    };

    //check for subset
    this.isSubsetOf = function(newset) {
        var i, j;
        for (i = 0; i < this.element.length; i++) {
            for(j = 0; j < newset.element.length; j++){
                if(this.element[i] === newset.element[j]){
                    break;
                }
            }
            if(j === newset.element.length){
                return false;
            }
        }
        return true;
    };
   
    this.powerSet = function(){
        var ps = [[]]; var i, j;
        for (i = 0; i < this.element.length; i++) {
            for (j = 0, len = ps.length; j < len; j++) {
                ps.push(ps[j].concat(this.element.slice(i,i+1)));
            }
        }
        return ps;
    };
}
Set.prototype.union = function(newset) {
    if(!(newset instanceof Set)){
        newset = new Set(newset);
    }
    var c = this.element.concat(newset.element);
    var d = c.filter(function (item, pos) {
        return c.indexOf(item) == pos;
    });
    return d.sort();
};
Set.prototype.intersection = function(newset) {
   if(!(newset instanceof Set)){
        newset = new Set(newset);
    }
    var intersect = this.element.filter(function(n) {
        return newset.element.indexOf(n) != -1;
    });
    return intersect.sort();
};

 
Set.prototype.difference = function(newset){
    if(!(newset instanceof Set)){
        newset = new Set(newset);
    }
    var diff = this.element.filter(function(n) {
        return newset.element.indexOf(n) === -1;
    });
    return diff;
};


Set.prototype.symmetricDifference = function(newset){
    if(!(newset instanceof Set)){
        newset = new Set(newset);
    }
    var x = this.difference(newset);
    var y = newset.difference(this);
    var z = x.concat(y);
    return z;
};


Set.prototype.cartesianProduct = function(newset) {
    if(!(newset instanceof Set)){
        newset = new Set(newset);
    }
    var q = []; var i, j;
    for(i = 0; i < this.element.length; i++){
        for(j = 0; j < newset.element.length; j++){
            var p = []; 
            p.push(this.element[i]);
            p.push(newset.element[j]);
            q.push(p);
        }
    } 
    return q;
};
