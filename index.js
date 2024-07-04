function receivesAFunction(callback) {
    callback();
}
const exampleCallback = () => {
    console.log("The callback func");
};
receivesAFunction(exampleCallback);



function returnsANamedFunction(){
    function namedFunction(){
        console.log("The named function");
    }
    return namedFunction;
}

const namedFunction = returnsANamedFunction();
namedFunction;


function returnsAnAnonymousFunction(){
    return function(){
        console.log("the Anonymous func")
    };
}

const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction;

