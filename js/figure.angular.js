/*global angular:false, $:false, console:false*/

(function () {
    'use strict';
    
    var identity = {
            hello: 'Fgr Web App'
        },
        app = angular.module('fgrWebApp', []);

    app.controller('FgrWebApp', ['$http', '$scope', function ($http, $scope, $window) {
        this.identity = identity;
    }]);
    
    app.directive('dynamicTemplate', function ($window) {
        return {
            restrict: 'A',
            replace: true,
            template: '<div><div ng-include="tmpl" class="template"></div></div>',
            controller: function ($scope) {
                $scope.tmpl = 'includes/employees.html';
                $scope.change = function (where) {
                    $scope.tmpl = where;
                };
            }
        };
    });


}());
