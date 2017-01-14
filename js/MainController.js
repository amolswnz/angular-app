(function() {
    var app = angular.module("mainApp");

    var MainController = function($scope, $interval, $location) {

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
            if(countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + userName);
        }

        $scope.userName = "angular";
        $scope.countdown = 5;
        startCountdown();
    };

    app.controller("MainController", MainController);
}());