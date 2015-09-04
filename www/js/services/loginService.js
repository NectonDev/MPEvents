angular.module('mpevents.loginService', [])

    .factory('Login', function($http) {

        return {
            doLogin: function(user, password) {
                loginFunctions.doLogin($http, user, password);
            }
        };
    });
