/** JSON is not ObjectLiteral. 
 *  In JSON property names have to be wrapped in quotes. 
 */
 

var objectLiteral = {
    firstName: 'Fayadh', 
    isAProgrammer: true
}

console.log(objectLiteral);
// taking a js Object and stringify-ing it so it becomes valid JSON syntax
console.log(JSON.stringify(objectLiteral));


// JSON
// taking a string, and converting to json
var jsonValue = JSON.parse('{ "firstName": "Mary", "isAProgrammer" : true }');
    
    
console.log(jsonValue);

// so json is a subset of js object literaly syntax, so anything thats json valid
// is also valid js object literal syntax
// but NOT ALL object literal syntax is VALID JSON syntax. 

// Json is more strict, so not the exact same as js objectLiteral syntax. 
