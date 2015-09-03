angular.module('mpevents.eventsService', [])

.factory('Events', function($http, API) {

  return {
    all: function() {
      return events;
    },
    getJsonDetailsEvents: function(month, eventId){
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
    }
  };
});
