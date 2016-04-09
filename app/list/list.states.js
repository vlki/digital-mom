(function() {
    angular.module('app.list').config(setupStates);

    setupStates.$inject = ['$stateProvider'];

    function setupStates($stateProvider) {
        $stateProvider
            .state('list', {
                url: '/?gender&birthday',
                parent: 'layout',
                controller: 'ListController',
                controllerAs: 'vm',
                templateUrl: 'app/list/list.html'
            })
            .state('detail', {
                url: '/detail?id',
                parent: 'layout',
                controller: 'DetailController',
                controllerAs: 'vm',
                templateUrl: 'app/list/detail.html'
            })
            .state('planned', {
                url: '/planned?id',
                parent: 'layout',
                controller: 'PlannedController',
                controllerAs: 'vm',
                templateUrl: 'app/list/planned.html'
            });
    }
})();
