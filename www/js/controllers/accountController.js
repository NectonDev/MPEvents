angular.module('mpevents.accountController', [])

    .controller('AccountCtrl', function ($scope, Login, Events) {
        var jsonMyEvents = Events.getMyEvents();
        jsonMyEvents.then(function (data) {
            $scope.myevents = data;
        });
        $scope.Logout = function() {
            Login.doLogout();
        }
    });
