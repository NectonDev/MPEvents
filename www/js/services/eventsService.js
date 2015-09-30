angular.module('mpevents.eventsService', [])

.factory('Events', function($http, API) {

  return {
    getJsonDetailsEvents: function(eventId){
      var htmlDetailedEvent = functions.getHtmlDetailedEvent($http, eventId);
      var jsonDetailedEvent = htmlDetailedEvent.then(function(data){
        var listJsonDetailedEvent = API.jsonDetailedEvent(data.data, eventId);
        return listJsonDetailedEvent;
      });
      return jsonDetailedEvent;
    },
    getJsonEvents: function(){
      var htmlEvents = functions.getHtmlEvents($http);
      var jsonEvents = htmlEvents.then(function(data){
        var listJsonEvents = API.jsonEvents(data.data)
        return listJsonEvents;
      });
      return jsonEvents;
    },

    goToEvent: function(eventId, $ionicLoading, $scope){
      functions.goToEvent($http, eventId, $ionicLoading);
      var htmlMyEvents = functions.getHtmlMyEvents($http);
      htmlMyEvents.then(function(data){
        var listJsonMyEvents = API.jsonMyEvents(data.data);
        if (functions.checkOkGoToEvent(eventId,listJsonMyEvents) == true){
          $scope.showAlert();
        }
      });
    },
    getMyEvents: function(){
      var htmlMyEvents = functions.getHtmlMyEvents($http);
      var jsonMyEvents = htmlMyEvents.then(function(data){
        var listJsonMyEvents = API.jsonMyEvents(data.data);
        return listJsonMyEvents;
      });
      return jsonMyEvents;
    }
  };
});
