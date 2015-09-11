angular.module('mpevents.homeController', [])

    .controller('HomeCtrl', function($rootScope, $http, $state, Login) {
        var isLogged = Login.checkIsLogged();
        isLogged.then(function (data) {
            if (data == true){
                $rootScope.logged = true;
            }else{
                $rootScope.logged = false;
            }
        });
    })

    .controller('TabsController', function($scope, $rootScope, Login) {
        var isLogged = Login.checkIsLogged();
        isLogged.then(function (data) {
            if (data == true){
                $rootScope.logged = true;
            }else{
                $rootScope.logged = false;
            }
        });
        $scope.hideLogin = function(){
            //console.log($rootScope.logged);
            return $rootScope.logged;
        }
    })