// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(string){
    if (string === true || string === false) {
        return "Hello, World!";
    }
    if (string === ""){
        return "Hello!";
    }
    return "Hello, " + string + "!";
    // **THIS IS THE HARD WAY**
    // if (string === "Jane") {
    //     return "Hello, Jane!";
    // }
    // else if (string === "Alex") {
    //     return "Hello, Alex!";
    // }
    //  else {
    //      return "Hello, Pat!";
    //  }
}

function isFive(x) {
    if (x == 5){
        return true
    }
    else{
        return false
    }
}