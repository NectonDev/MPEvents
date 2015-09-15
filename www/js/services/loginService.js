angular.module('mpevents.loginService', [])

    .factory('Login', function($http, $state, $rootScope) {

        return {
            doLogin: function($scope) {
                var doLogin = loginFunctions.doLogin($http, $scope.data.username, $scope.data.password);
                doLogin.then(function(data){
                    var isLogged = loginFunctions.checkLogin($http, data);
                    $rootScope.logged = isLogged;
                    if (isLogged){
                        var loginConf = {
                            iconOn : 'ion-outlet',
                            iconOff : 'ion-outlet',
                            title: 'Tu cuenta'
                        };
                    }else{
                        var loginConf = {
                            iconOn : 'ion-log-in',
                            iconOff : 'ion-log-in',
                            title: 'Login'
                        };
                    }
                    $rootScope.loginConf = loginConf;
                });
            },
            doLogout: function($scope) {
                var doLogout = loginFunctions.doLogout($http);
                doLogout.then(function(data){
                    $rootScope.logged = loginFunctions.checkLogin($http, data);
                    var loginConf = {
                        iconOn : 'ion-log-in',
                        iconOff : 'ion-log-in',
                        title: 'Login'
                    };
                    $rootScope.loginConf = loginConf;
                });
            },
            checkIsLogged: function(){
                return loginFunctions.checkLogin($http);
            }
        };
    });
