//adapter pattern example
function List () {
    this.length = 0; 
    this.objList = {}; 
}
List.prototype.add = function(key, value){
    
    this.length++; 
    this.objList[key] = value;
    return true; 
}
/*
List.prototype.add = function(value) {
    this.length++; 
    this.objList[this.count] = value;
    
    return true; 
}
*/
List.prototype.get = function(key) {
    return this.objList[key]; 
}

List.prototype.findByVal = function(val, callback) {
    for(var key in this.objList) {
        if (val == this.objList[key]) {
            if (callback !== undefined) {
                return callback(key, this.list[key]); 
            } else{
                return {'key': key,
                    'value': objList[key] }; 
            }
        } 
    }
    
    return null; 
}

List.prototype.count = function() {
    return this.length; 
}


module.exports = List; 

/*
var lst = new List();
lst.add('test', 234);
lst.add('test1', 22355);

for(var i = 0; i <= lst.count(); i ++){
    console.log(lst.getLast()); 
}
*/