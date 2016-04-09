(function() {
    angular.module('app.auth').controller('Onboard2Controller', Onboard2Controller);

    Onboard2Controller.$inject = ['$http', '$state'];

    function Onboard2Controller($http, $state) {
        var vm = this;

        vm.email = '';
        vm.password = '';
        vm.firstName = '';
        vm.lastName = '';

        vm.signUp = signUp;

        ////////

        function signUp() {
            $http({
                method: 'POST',
                url: '/api/v1/users/signup/user',
                data: {
                    first: vm.firstName,
                    last: vm.lastName,
                    email: vm.email,
                    password: vm.password
                }
            }).then(function successCallback(response) {
                debugger;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                debugger;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    }
})();
