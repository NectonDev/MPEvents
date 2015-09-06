angular.module('mpevents.accountController', [])

    .controller('AccountCtrl', function ($scope, $state, Login) {
        $scope.Logout = function() {
            Login.doLogout($scope, $state);
        }
    });
