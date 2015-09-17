angular.module('mpevents.loginService', [])

    .factory('Login', function($http, $state, $rootScope) {

        return {
            doLogin: function($scope) {
                var doLogin = loginFunctions.doLogin($http, $scope.data.username, $scope.data.password);
                doLogin.then(function(data){
                    var isLogged = loginFunctions.checkLogin($http, data);
                    $rootScope.logged = isLogged;
                    if (isLogged){
                        $rootScope.loginConf = {
                            iconOn : 'ion-outlet',
                            iconOff : 'ion-outlet',
                            title: 'Tu cuenta'
                        };
                    }else{
                        $rootScope.loginConf = {
                            iconOn : 'ion-log-in',
                            iconOff : 'ion-log-in',
                            title: 'Login'
                        };
                    }
                });
            },
            doLogout: function() {
                var doLogout = loginFunctions.doLogout($http);
                doLogout.then(function(data){
                    $rootScope.logged = loginFunctions.checkLogin($http, data);
                    $rootScope.loginConf = {
                        iconOn : 'ion-log-in',
                        iconOff : 'ion-log-in',
                        title: 'Login'
                    };
                });
            },
            checkIsLogged: function(){
                return loginFunctions.checkLogin($http);
            }
        };
    });
