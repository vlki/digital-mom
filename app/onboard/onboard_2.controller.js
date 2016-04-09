(function() {
    angular.module('app.auth').controller('Onboard2Controller', Onboard2Controller);

    Onboard2Controller.$inject = ['$http', '$state'];

    function Onboard2Controller($http, $state) {
        var vm = this;

        vm.email = '';
        vm.password = '';

        vm.signUp = signUp;
        vm.signingUp = false;

        vm.issues;
        vm.issuesGrouped;

        vm.issuesPreventive;
        vm.issuesScreening;

        activate();

        ////////

        function activate() {
            $http({
                method: 'GET',
                url: '/api/v1/issues'
            }).then(function successCallback(response) {
                var issues = response.data.issues;

                issues = _filterByAgeAndGender(issues);

                vm.issues = issues.slice(0, 3);

                vm.issuesGrouped = _.groupBy(issues, 'group');
                vm.issuesPreventive = vm.issuesGrouped['Preventive'] || [];
                vm.issuesScreening = vm.issuesGrouped['Screening'] || [];
            }).catch(function errorCallback(response) {
                console.error(response);
                alert('Something went terribly wrong here :(');
            });
        }

        function signUp() {
            vm.signingUp = true;

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
                $state.go('list', { birthday: $state.params.birthday, gender: $state.params.gender });
            }).catch(function errorCallback(response) {
                console.error(response);
                alert('Something went terribly wrong here :(');
            });
        }

        function _filterByAgeAndGender(issues) {
            var age = _getAgeFromBirthday($state.params.birthday);
            var gender = _getGenderNumber($state.params.gender);

            return _(issues)
                .filter(function(issue) {
                    return issue.startAge <= age && issue.endAge >= age;
                })
                .filter(function(issue) {
                    return (issue.gender === 0 || gender === 0) ? true : issue.gender === gender;
                })
                .value();
        }

        function _getGenderNumber(gender) {
            return (gender === 'male')
                ? 1
                : (gender === 'female')
                    ? 2
                    : 0;
        }

        function _getAgeFromBirthday(birthday) {
            return moment().diff(birthday, 'years');
        }
    }
})();
