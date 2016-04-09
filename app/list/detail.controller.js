(function() {
    angular.module('app.list').controller('DetailController', DetailController);

    DetailController.$inject = ['$state', '$http', '$cookies'];

    function DetailController($state, $http, $cookies) {
        var vm = this;

        vm.issue;

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

                var issue = _.find(issues, function(issue) {
                    return issue._id === $state.params.id;
                });

                if (!issue) {
                    alert('Something went terribly wrong here :(');
                    return;
                }

                vm.issue = issue;
            }).catch(function errorCallback(response) {
                console.error(response);
                alert('Something went terribly wrong here :(');
            });
        }
    }
})();
