var functions = (function () {
    var functions = {};
    var urlEvents = commons.urlEvents();
    functions.getEventsByMonth = function (data, month) {
        var regExp = "\\b" + month.replace(" ", "\\b \\b") + "\\b";
        var events = [];
        var eventsOfTheMonth = $(data).find(".tit > .tit_rojo").parent().parent().parent();
        eventsOfTheMonth.each(function (index, value) {
            if ($(value).html().search(regExp.toLowerCase()) > -1) {
                events.push(functions.getInfoOfTheEvent($(value)));
            }
        });
        return events;
    },
    functions.getInfoOfTheEvent = function (data) {
        var event = [];
        data.children("tr").each(function (index, value) {
            $(value).children("td").each(function (index, value) {
                var srcImgRuta = $(value).find("img").attr("src");
                var titleRuta = $(value).find(".tit_evento_listado").text();
                var dateRuta = $($(value).find(".tit_rojo")[0]).text();
                var totalPlazasOcupadas = $($(value).find(".tit_rojo")[1]).text();
                var totalPlazas = $($(value).find(".tit_rojo")[2]).text();
                var parrafoRuta = $(value).hasClass("parrafoclaro");
                if (srcImgRuta != undefined) {
                    var imgSrcRutaTrimmed = srcImgRuta.trim();
                    event.img = commons.madridpatinaDomain()+imgSrcRutaTrimmed;
                    event.id = parseInt(imgSrcRutaTrimmed.slice(imgSrcRutaTrimmed.length-8, imgSrcRutaTrimmed.length).slice(0,4));
                }
                if (titleRuta != "") {
                    event.title = titleRuta.trim();
                }
                if (dateRuta != "") {
                    event.date = dateRuta.trim();
                    event.totalPlazas = parseInt(totalPlazas, 10);
                    if (isNaN(totalPlazasOcupadas)) {
                        event.totalPlazasOcupadas = 0;
                    } else {
                        event.totalPlazasOcupadas = parseInt(totalPlazasOcupadas, 10);
                    }
                    event.totalPlazasLibres = event.totalPlazas - event.totalPlazasOcupadas;
                }
                if (parrafoRuta) {
                    event.desc = $(value).find("div").text().trim();
                }

            });
        });
        return event;
    },
    functions.getHtmlEvents = function($http) {
        var htmlEvents = $http.get(urlEvents,{
            dataType: 'html'
        });
        htmlEvents.then(function(data){
            return data;
        });
        return htmlEvents;
    }

    return functions;
})();