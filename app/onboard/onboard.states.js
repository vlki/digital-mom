(function() {
    angular.module('app.auth').config(setupStates);

    setupStates.$inject = ['$stateProvider'];

    function setupStates($stateProvider) {
        $stateProvider
            .state('onboard-1', {
                url: '/start',
                parent: 'layout',
                controller: 'Onboard1Controller',
                controllerAs: 'vm',
                templateUrl: 'app/onboard/onboard_1.html'
            })
            .state('onboard-2', {
                url: '/sign-up?age&sex',
                parent: 'layout',
                controller: 'Onboard2Controller',
                controllerAs: 'vm',
                templateUrl: 'app/onboard/onboard_2.html'
            });
    }
})();
