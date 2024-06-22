
// 1 calculateArea
function calculateArea(lengh , width){
    return lengh*width;

}
var area = calculateArea(5, 4)
console.log(area)




// 2 Handling Null and Undefined

function checkValue(a){
    return  a    
}
console.log("value is "  + checkValue(null))
console.log("value is " + checkValue())



// 3 Utilizing Template Literals 

function generateEmail(name, domain){
       const convert = name.toLowerCase().replace(" ","")
       return convert+"@"+domain

}
var email = generateEmail("John Doe" , "example.com")
console.log(email)



// 4 Type Checker Function 

function CheckType(input){
    if(Array.isArray(input)){
        return "Array"
    }else if(input == null){
        return null
    }else if(input === undefined){
        return "undefined"
    }else if(typeof input === 'object' ){
        return "object"
    }else{
        return typeof input
    }
}
console.log(CheckType([1, 3, 4, 5, 6]))
console.log(CheckType())
console.log(CheckType(null))
console.log(CheckType("masaischool"))
console.log(CheckType(123456))
console.log(CheckType(true))
console.log(CheckType(function() {}))
console.log(CheckType({key: "value"}))


// 5 Template Literal Function

function composeMessage(name , age , city){
    const message = `Hello ${name}, you are ${age} years old and live in ${city}.`
    return message
}

const message = composeMessage("john", 25 , "New York")

console.log(message)