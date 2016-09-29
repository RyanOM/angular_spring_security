angular.module('hello', [])
    .controller('home', function($scope, $http) {
        var self = $scope;
        $http.get('/resource/').then(function(response) {
            self.greeting = response.data;
        })
    });