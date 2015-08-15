angular.module('mpevents.api', [])

    .factory('API', function() {

        return {
            jsonEvents : function (data) {
                var listEventsJson = [];
                var monthsWithEvents = $(data).find("span.titulo_blanco");
                monthsWithEvents.each(function (index, value) {
                    var event = [];
                    var month = $(value).text();
                    var info = functions.getEventsByMonth(data, month);
                    event["month"] = month;
                    event["info"] = info;
                    listEventsJson.push(event);
                });
                return listEventsJson;
            }
        };
    });