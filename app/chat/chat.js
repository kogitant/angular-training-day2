'use strict';

angular.module('myApp.chat', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/chat', {
            templateUrl: 'chat/chat.html',
            controller: 'ChatCtrl'
        });
    }])

    .controller('ChatCtrl', ['$scope', '$log', function($scope, $log) {
        $scope.title='Funchat';

    }]);
