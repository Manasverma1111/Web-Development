const calculator = {
    add: function(a, b){
        return a+b;         
    },
    sub: function(a, b){
        return a-b;
    },
    prod: function(a, b){
        return a*b;
    },
    div: function(a, b){
        return a/b;
    },
    mod: function(a, b){
        return a%b;
    }
}

// second method
const calc = {
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    }
}