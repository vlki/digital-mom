(function() {
    var app = angular.module('app');

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/start');
    }]);
})();
