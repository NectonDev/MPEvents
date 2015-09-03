angular.module('mpevents.eventsService', [])

.factory('Events', function($http, API) {

  return {
    all: function() {
      return events;
    },
    getJsonDetailsEvents: function(month, eventId){
      var htmlEvents = functions.getHtmlEvents($http);
      var jsonEvents = htmlEvents.then(function(data){
        var listJsonEvents = API.jsonEvents(data.data);
        return listJsonEvents[month][eventId];
      });
      return jsonEvents;
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
