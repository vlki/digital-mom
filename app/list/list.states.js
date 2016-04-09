(function() {
    angular.module('app.list').config(setupStates);

    setupStates.$inject = ['$stateProvider'];

    function setupStates($stateProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                controller: 'ListController',
                controllerAs: 'vm',
                templateUrl: 'app/list/list.html'
            })
    }
})();
