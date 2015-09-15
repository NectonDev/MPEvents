angular.module('mpevents.homeController', [])

    .controller('HomeCtrl', function($rootScope, $scope, $http, $state, Login, Events) {
        var isLogged = Login.checkIsLogged();
        isLogged.then(function (data) {
            if (data == true){
                $rootScope.logged = true;
                var loginConf = {
                    iconOn : 'ion-outlet',
                    iconOff : 'ion-outlet',
                    title: 'Tu cuenta'
                };
            }else{
                $rootScope.logged = false;
                var loginConf = {
                    iconOn : 'ion-log-in',
                    iconOff : 'ion-log-in',
                    title: 'Login'
                };
            }
            $rootScope.loginConf = loginConf;
        });
        $scope.isLogged = function(){
            return $rootScope.logged;
        }
        if ($scope.isLogged() == true){
            var jsonMyEvents = Events.getMyEvents();
            jsonMyEvents.then(function (data) {
                $scope.myevents = data;
            });
        }else{
            $scope.myevents = {};
        }
    })