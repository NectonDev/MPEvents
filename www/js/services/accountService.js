angular.module('mpevents.accountService', [])

    .factory('Account', function($http) {

        return {
            all: function() {
                return account;
            },
        };
    });
