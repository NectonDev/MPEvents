angular.module('mpevents.controllers', [])

.controller('HomeCtrl', function($scope, $http) {})

.controller('EventsCtrl', function($scope, $http, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function() {});
  var jsonEvents = Events.getJsonEvents();
    jsonEvents.then(function(data){
        $scope.events = data;
        console.log($scope.events);
    });
})

.controller('EventDetailCtrl', function($scope, $stateParams, API) {
  //$scope.event = Events.get($stateParams.eventId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
