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
                        $state.go('tab.login');
                    }
                });
            },
            doLogout: function() {
                var doLogout = loginFunctions.doLogout($http);
                doLogout.then(function(data){
                    $rootScope.logged = loginFunctions.checkLogin($http, data);
                    $state.go('tab.login');
                });
            },
            checkIsLogged: function(){
                return loginFunctions.checkLogin($http);
            }
        };
    });
