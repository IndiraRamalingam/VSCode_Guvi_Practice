 //Example1 - sayHello is a callback function
    //because the function sayHello is passed as an argument to another function setTimeout
        // function sayHello()
        // {
        //     console.log('hello')
        // }
        // setTimeout(sayHello,3000);

    //Example 2 - Nested Functions

    function function1(callback){
        setTimeout(function(){
            console.log('Function 1')
            callback();
        },1000)
    }
    
    function function2(callback){
        setTimeout(function(){
            console.log('Function 2')
            callback();
        },2000)
    }
    
    function function3(callback){
        setTimeout(function(){
            console.log('Function 3')
            callback();
        },3000)
    }
    function1(function()
    {
        function2(function()
        {
            function3(function()
            {
                console.log("All Functions Completed")
            })
        })
    })