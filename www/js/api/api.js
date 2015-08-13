var madridpatinaAPI = (function () {

    var urlEvents = commons.urlEvents();

    var madridpatinaAPI = {};

    getInfoOfTheEvent = function (data) {
        var event = [];
        data.children("tr").each(function (index, value) {
            $(value).children("td").each(function (index, value) {
                var srcImgRuta = $(value).find("img").attr("src");
                var titleRuta = $(value).find(".tit_evento_listado").text();
                var dateRuta = $($(value).find(".tit_rojo")[0]).text();
                var totalPlazas = $($(value).find(".tit_rojo")[1]).text();
                var totalPlazasLibres = $($(value).find(".tit_rojo")[2]).text();
                var parrafoRuta = $(value).hasClass("parrafoclaro");
                if (srcImgRuta != undefined) {
                    event.img = srcImgRuta.trim();
                }
                if (titleRuta != "") {
                    event.title = titleRuta.trim();
                }
                if (dateRuta != "") {
                    event.date = dateRuta.trim();
                    event.totalPlazas = parseInt(totalPlazas, 10);
                    if (isNaN(totalPlazasLibres)) {
                        event.totalPlazasLibres = 0;
                    } else {
                        event.totalPlazasLibres = parseInt(totalPlazasLibres, 10);
                    }
                }
                if (parrafoRuta) {
                    event.desc = $(value).find("div").text().trim();
                }
            });
        });
        return event;
    };

    getEventsByMonth = function (data, month) {
        var regExp = "\\b" + month.replace(" ", "\\b \\b") + "\\b";
        var events = [];
        var eventsOfTheMonth = $(data).find(".tit > .tit_rojo").parent().parent().parent();
        eventsOfTheMonth.each(function (index, value) {
            if ($(value).html().search(regExp.toLowerCase()) > -1) {
                events.push(getInfoOfTheEvent($(value)));
            }
        });
        return events;
    };

    madridpatinaAPI.jsonEvents = function (data) {
        var listEventsJson = [];
        var monthsWithEvents = $(data).find("span.titulo_blanco");
        monthsWithEvents.each(function (index, value) {
            var event = [];
            var month = $(value).text();
            var info = getEventsByMonth(data, month);
            event["month"] = month;
            event["info"] = info;
            listEventsJson.push(event);
        });
        return listEventsJson;
    }

    madridpatinaAPI.getHtmlEvents = function () {
        var htmlEvents = $.ajax({
            type: "GET",
            url: urlEvents,
            dataType: 'html'
        });
        htmlEvents.done(function (data) {
            return data;
        });
        return htmlEvents;
    };

    return madridpatinaAPI;
})();