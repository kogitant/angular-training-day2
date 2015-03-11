'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$log', function($scope, $log) {
        $scope.title='Funtodo';
        $scope.todos = [
            /*
             {description:'foo', done:false},
             {description:'nar', done:false}
             */
        ];

        $scope.remove = function(todo) {
            $log.log("Removing: " + angular.toJson(todo));
            var arrayLength = $scope.todos.length;
            var t;
            for (var i = 0; i < arrayLength; i++) {
                t =  $scope.todos[i];
                $log.log("Testing: " + angular.toJson(t));
                if(t.description===todo.description){
                    $scope.todos.splice(i,1);
                    break;
                }
            }
        }
    }])
    .controller('TodoFormController', ['$scope', '$log', function($scope, $log) {
        $scope.submit = function() {
            if ($scope.description) {
                //$scope.$parent.todos.push( {description:this.description});
                //$scope.description = '';
                $log.log($scope.description);
                $scope.$parent.todos.push({
                    description:$scope.description,
                    done:false
                    });
                $scope.description = '';
            }
        };

    }]);
