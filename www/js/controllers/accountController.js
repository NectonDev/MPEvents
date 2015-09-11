angular.module('mpevents.accountController', [])

    .controller('AccountCtrl', function ($scope, Login) {
        $scope.Logout = function() {
            Login.doLogout();
        }
    });
