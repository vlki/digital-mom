(function() {
    angular.module('app.list').controller('ListController', ListController);

    ListController.$inject = ['$state', '$cookies'];

    function ListController($state, $cookies) {
        var vm = this;

        activate();

        /////////

        function activate() {
            // Check if there is the right cookie!
            if (!$cookies.get('sessionKey')) {
                $state.go('onboard-1');
                return;
            }
        }
    }
})();
