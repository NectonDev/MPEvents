angular.module('mpevents.eventsController', [])

    .controller('EventsCtrl', function ($scope, $http, $ionicLoading, Events) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function() {});
        var jsonEvents = Events.getJsonEvents();
        $ionicLoading.show({
            template: 'Cargando eventos :)'
        });
        jsonEvents.then(function (data) {
            $scope.events = data;
            $ionicLoading.hide();
        });
        $scope.doRefresh = function () {
            var jsonEventsRefreshed = Events.getJsonEvents();
            jsonEventsRefreshed.then(function (data) {
                $scope.events = data;
            })
                .finally(function () {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
    })

    .controller('EventDetailCtrl', function ($scope, $http, $ionicLoading, $stateParams, Events) {
        var jsonDetailEvent = Events.getJsonDetailsEvents($stateParams.month, $stateParams.eventId);
        $ionicLoading.show({
            template: 'Cargando detalles del evento'
        });
        jsonDetailEvent.then(function (data) {
            $scope.event = data;
            $ionicLoading.hide();
        });
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
