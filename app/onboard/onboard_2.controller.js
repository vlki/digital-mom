(function() {
    angular.module('app.auth').controller('Onboard2Controller', Onboard2Controller);

    Onboard2Controller.$inject = ['$http', '$state'];

    function Onboard2Controller($http, $state) {
        var vm = this;

        vm.email = '';
        vm.password = '';

        vm.signUp = signUp;

        vm.issues;

        activate();

        ////////

        function activate() {
            // $http
        }

        function signUp() {
            $http({
                method: 'POST',
                url: '/api/v1/users/signup/user',
                data: {
                    first: 'Foo',
                    last: 'Bar',
                    email: vm.email,
                    password: vm.password
                }
            }).then(function signedUpCallback(response) {
                // User is signed here as the response had Set-Cookie header
                $state.go('list');
            }).catch(function errorCallback(response) {
                console.error(response);
                alert('Something went terribly wrong!');
            });
        }
    }
})();
