(function() {
    angular.module('app.list').config(setupStates);

    setupStates.$inject = ['$stateProvider'];

    function setupStates($stateProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                parent: 'layout',
                controller: 'ListController',
                controllerAs: 'vm',
                templateUrl: 'app/list/list.html'
            })
    }
})();
