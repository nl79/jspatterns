//adapter pattern example
function List () {
    this.list = new Array(); 
}
List.prototype.add = function(key, value){
    this.list[key] = value; 
}
List.prototype.add = function(value) {
    this.list.push(value); 
}
List.prototype.get = function(key) {
    return this.list[key]; 
}

List.prototype.findByVal = function(val, callback) {
    for(var key in this.list) {
        if (val == this.list[key]) {
            if (callback !== undefined) {
                return callback(key, this.list[key]); 
            } else{
                return {'key': key,
                    'value': list[key] }; 
            }
        } 
    }
    
    return null; 
}

List.prototype.count = function() {
    return this.list.length; 
}

List.prototype.getLast = function () {
    return this.list.pop(); 
}


var lst = new List();
lst.add('test', 234);
lst.add('test1', 22355);

for(var i = 0; i <= lst.count(); i ++){
    console.log(lst.getLast()); 
}