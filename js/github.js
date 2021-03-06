(function() {

    var github = function($http) {
        var getUser = function(userName) {
            return $http.get("https://api.github.com/users/" + userName)
                .then(function(response) {
                    return response.data;
                });
        };

        var getRepos = function(reposUrl) {
            return $http.get(reposUrl)
                .then(function(response) {
                    return response.data;
                });
        };
        
        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module("mainApp"); // Getting only reference to mainApp
    module.factory("github", github);

}());