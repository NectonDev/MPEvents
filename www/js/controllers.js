angular.module('mpevents.controllers', [])

.controller('HomeCtrl', function($scope, $http) {})

.controller('EventsCtrl', function($scope, $http, $ionicLoading, Events) {
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
    jsonEvents.then(function(data){
        $scope.events = data;
        $ionicLoading.hide();
    });
    $scope.doRefresh = function(){
        var jsonEventsRefreshed = Events.getJsonEvents();
        jsonEventsRefreshed.then(function(data){
            $scope.events = data;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.getJsonDetailsEvents($stateParams.month, $stateParams.eventId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
