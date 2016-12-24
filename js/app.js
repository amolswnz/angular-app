(function() {
    var app = angular.module("mainApp", []);

    var MainController = function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos, onError);
        };

        var onError = function(error) {
            $scope.error = "Problem occured - " + error.statusText;
            // console.log(error);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
        }

        $scope.searchUser = function(userName) {
            $http.get("https://api.github.com/users/" + userName)
                .then(onUserComplete, onError);
        }

        $scope.userName = "angular";
        app.controller("MainController", MainController);
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
}());