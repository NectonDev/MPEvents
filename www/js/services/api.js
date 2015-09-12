angular.module('mpevents.api', [])

    .factory('API', function() {

        return {
            jsonEvents : function (data) {
                var listEventsJson = new Object();
                var monthsWithEvents = $(data).find("span.titulo_blanco");
                monthsWithEvents.each(function (index, value) {
                    var month = $(value).text();
                    var info = functions.getEventsByMonth(data, month);
                    listEventsJson[month] = info;
                });
                return listEventsJson;
            },
            jsonDetailedEvent : function (data, eventId) {
                var DetailedEventJson = functions.getDetailedEvent(data, eventId);
                return DetailedEventJson;
            },
            jsonMyEvents : function(data){
                var listMyEventsJson = functions.getMyEvents(data);
                return listMyEventsJson;
            }
        };
    });