(function() {
    angular.module('app.auth').config(setupStates);

    setupStates.$inject = ['$stateProvider'];

    function setupStates($stateProvider) {
        // $stateProvider
        //     .state('signup', {
        //         url: '/',
        //         parent: 'layout',
        //         controller: 'SignupController',
        //         controllerAs: 'vm',
        //         templateUrl: 'app/auth/signup.html'
        //     })
    }
})();
