#basic 10 - Start 24th 01:32    
    `https://app.pluralsight.com/library/courses/angularjs-get-started/table-of-contents`
#intermediate 25
#advanced 18
#Total 53 hours = 1 Week
#start date - 24th 01:32
#end date - 30th 23:59 (Max)

#IIFE
    Immediately invoked function expression - reduce the use of global variable
    Global variable are bad in other programming languges 
    Global varibles are EVIL in JavaScript

    (function() {
        
    }());

#https://code.angularjs.org/1.3.1/


#$http
    $http.get('url')
        .then(successFunction, errorFunction);

    var successFunction = function(response) {
        // do stuff
    }

    var errorFunction = function(error) {
        // do stuff
    }