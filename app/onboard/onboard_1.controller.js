(function() {
    angular.module('app.auth').controller('Onboard1Controller', Onboard1Controller);

    Onboard1Controller.$inject = ['$http', '$state'];

    function Onboard1Controller($http, $state) {
        var vm = this;

        vm.birthday = new Date('1986-01-01');
        vm.gender = 'male';

        vm.setGender = setGender;

        vm.cont = cont;

        ////////

        function cont() {
            $state.go('onboard-2', { birthday: vm.birthday.toDateString(), gender: vm.gender });
        }

        function setGender(gender) {
            vm.gender = gender;
        }
    }
})();
