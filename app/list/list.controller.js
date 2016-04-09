(function() {
    angular.module('app.list').controller('ListController', ListController);

    ListController.$inject = ['$state', '$http', '$cookies'];

    function ListController($state, $http, $cookies) {
        var vm = this;

        vm.issues;
        vm.issuesGrouped;

        vm.issuesPreventive;
        vm.issuesScreening;

        vm.goToDetail = goToDetail;

        activate();

        /////////

        function activate() {
            // Check if there is the right cookie!
            if (!$cookies.get('sessionKey')) {
                $state.go('onboard-1');
                return;
            }

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

        function goToDetail(issue) {
            $state.go('detail', { id: issue._id });
        }
    }
})();
