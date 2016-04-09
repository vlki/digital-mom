(function() {
    angular.module('app.auth').controller('Onboard1Controller', Onboard1Controller);

    Onboard1Controller.$inject = ['$http', '$state'];

    function Onboard1Controller($http, $state) {
        var vm = this;

        vm.age = 30;
        vm.sex = 'male';

        vm.cont = cont;

        ////////

        function cont() {
            $state.go('onboard-2', { age: vm.age, sex: vm.sex });

            // $http({
            //     method: 'POST',
            //     url: '/api/v1/users/signup/user',
            //     data: {
            //         first: vm.firstName,
            //         last: vm.lastName,
            //         email: vm.email,
            //         password: vm.password
            //     }
            // }).then(function successCallback(response) {
            //     debugger;
            //     // this callback will be called asynchronously
            //     // when the response is available
            // }, function errorCallback(response) {
            //     debugger;
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            // });
        }
    }
})();
