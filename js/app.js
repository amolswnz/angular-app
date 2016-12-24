(function() {
    var app = angular.module("mainApp", []);

    var MainController = function($scope, github, $interval, $log) {
        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onError = function(error) {
            $scope.error = "Problem occured - " + error.statusText;
        };

        var onRepos = function(data) {
            console.log(data);
            $scope.repos = data;
        }

        var decrementCountdown = function() {
            $scope.countdown--;
            if($scope.countdown < 1) 
                $scope.searchUser($scope.userName);
        }

        var startCountdown = function() {
            countdownInterval = $interval(decrementCountdown, 1000, 5);
            // arguments of $interval - Function to execute, interval, how many ticks
        }

        $scope.searchUser = function(userName) {
            $log.info("Searching for " + userName);
            github.getUser(userName)
                .then(onUserComplete, onError);
            if(countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
        }

        $scope.userName = "angular";
        $scope.countdown = 5;

        startCountdown();

        app.controller("MainController", MainController);
    };

    app.controller("MainController", MainController);
}());