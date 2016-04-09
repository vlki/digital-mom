(function() {
    angular.module('app').config(setupStates);

    setupStates.$inject = ['$stateProvider'];

    function setupStates($stateProvider) {
        $stateProvider
            .state('layout', {
                abstract: true,
                templateUrl: 'app/layout.html'
            })
            .state('law', {
                url: '/law',
                templateUrl: 'app/law.html',
                parent: 'layout'
            })
    }
})();
