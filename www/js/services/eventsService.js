angular.module('mpevents.eventsService', [])

.factory('Events', function($http, API) {

  return {
    all: function() {
      return events;
    },
    getJsonDetailsEvents: function(month, eventId){
      var htmlEvents = functions.getHtmlEvents($http);
      var jsonEvents = htmlEvents.then(function(data){
        var listJsonEvents = API.jsonEvents(data.data)
        for (var i = 0; i < listJsonEvents.length; i++){
          if (listJsonEvents[i].month === month){
            return listJsonEvents[i].info[eventId];
          }
        }
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
