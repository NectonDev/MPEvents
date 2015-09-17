angular.module('mpevents.accountController', [])

    .controller('AccountCtrl', function ($scope, Login) {
        $scope.data = {};
        $scope.Login = function() {
            Login.doLogin($scope);
        }
        $scope.Logout = function() {
            Login.doLogout();
        }
    });
