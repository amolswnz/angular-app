(function() {
    var app = angular.module("mainApp", []);

    var MainController = function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
        };

        var onError = function(error) {
            $scope.error = "Could not fetch the user" + error;
            console.log(error);
        };

        $http.get("https://api.github.com/users/amolswnz")
            .then(onUserComplete, onError);

        $scope.message = "Hello, Angular!";
        app.controller("MainController", MainController);
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
}());