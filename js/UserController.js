(function() {
    var app = angular.module("mainApp");

    var UserController = function($scope, github, $routeParams) {
        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onError = function(error) {
            $scope.error = "Problem occured - " + error.statusText;
        };

        var onRepos = function(data) {
            $scope.repos = data;
        }

        $scope.userName = $routeParams.userName;
        github.getUser($scope.userName)
            .then(onUserComplete, onError);
    };

    app.controller("UserController", UserController);
}());