angular.module('mpevents.loginService', [])

    .factory('Login', function($http, $state, $rootScope) {

        return {
            doLogin: function($scope) {
                var doLogin = loginFunctions.doLogin($http, $scope.data.username, $scope.data.password);
                doLogin.then(function(data){
                    if (loginFunctions.checkLogin($http, data)){
                        $rootScope.logged = true;
                        $state.go('tab.account');
                    }else{
                        $rootScope.logged = false;
                    }
                });
            },
            doLogout: function() {
                var doLogout = loginFunctions.doLogout($http);
                doLogout.then(function(data){
                    var checkLogin = loginFunctions.checkLogin($http, data);
                    if (checkLogin == false){
                        $rootScope.logged = false;
                    }
                });
            },
            checkIsLogged: function(){
                var isLogged = loginFunctions.checkLogin($http);
                return isLogged;
            }
        };
    });
