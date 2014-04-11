//singleton exmaple
var SingletonTest = (function(){
    //object instance 
    var instance;
    
    //private 
    function SingletonTest() {
        var date = new Date()
        return date.getTime(); 
    }
    
    //return an object. 
    return {
        getInstance: function(){
            if (instance == null) {
                instance = SingletonTest();
                // Hide the constructor so the returned objected can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();

var singleton1 = SingletonTest.getInstance();
var singleton2 = SingletonTest.getInstance();

console.log(singleton1);
console.log(singleton2); 