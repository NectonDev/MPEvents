var functions = (function () {
    var functions = {};
    var madridpatinaDomain = commons.madridpatinaDomain();
    var urlEvents = commons.urlEvents();
    var urlDetailedEvent = commons.urlDetailedEvent();
    var urlMyEvents = commons.urlMyEvents();

    functions.getEventsByMonth = function (data, month) {
        var monthTrimmed = "\\b" + month.replace(" ", "\\b \\b") + "\\b";
        var events = [];
        var eventsOfTheMonth = $(data).find(".tit > .tit_rojo").parent().parent().parent();
        eventsOfTheMonth.each(function (index, value) {
            if ($(value).html().search(monthTrimmed.toLowerCase()) > -1) {
                events.push(functions.getInfoOfTheEvent($(value),month));
            }
        });
        return events;
    },
    functions.getDetailedEvent = function(dataOfTheEvent, id){
        var detailsOfEvent = new Object();
        var dataOfTheEventJQuery = $(dataOfTheEvent);
        var data = dataOfTheEventJQuery.find(".parrafoclaro");
        detailsOfEvent.id = id;
        detailsOfEvent.title = dataOfTheEventJQuery.find(".tit_evento").text().trim();
        detailsOfEvent.desc = $(data[0]).text().trim();
        return detailsOfEvent;
    },
    functions.getInfoOfTheEvent = function (infoOfTheEvent, month) {
        var event = new Object();
        infoOfTheEvent.children("tr").each(function (index, value) {
            $(value).children("td").each(function (index, value) {
                var srcImgRuta = $(value).find("img").attr("src");
                var titleRuta = $(value).find(".tit_evento_listado").text();
                var dateRuta = $($(value).find(".tit_rojo")[0]).text();
                var totalPlazasOcupadas = $($(value).find(".tit_rojo")[1]).text();
                var totalPlazasLibres = $($(value).find(".tit_rojo")[2]).text();
                var parrafoRuta = $(value).hasClass("parrafoclaro");
                event.numberOfMonth = commons.getNumberOfMonth(month);
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
                    if (isNaN(totalPlazasLibres)){
                        event.totalPlazasLibres = "Sin limite";
                    }else{
                        event.totalPlazasLibres = parseInt(totalPlazasLibres, 10);
                    }
                    if (isNaN(totalPlazasOcupadas)) {
                        event.totalPlazasOcupadas = 0;
                    } else {
                        event.totalPlazasOcupadas = parseInt(totalPlazasOcupadas, 10);
                    }
                    if (isNaN(totalPlazasLibres)){
                        event.totalPlazas = "Sin limite"
                    }else{
                        event.totalPlazas = event.totalPlazasLibres + event.totalPlazasOcupadas;
                    }
                }
                if (parrafoRuta) {
                    event.desc = $(value).find("div").text().trim();
                }
            });
        });
        return event;
    },

    functions.getMyEvents = function(dataOfMyEvents){
        var myEvents = new Object();
        var arrayEvents = $(dataOfMyEvents).find(".parrafo > ul > li > a");
        $(arrayEvents).each(function(index, value){
            var event = new Object();
            event.urlOfTheEvent = madridpatinaDomain + "/" + $(value).attr('href');
            event.idOfTheEvent = parseInt($(value).attr('href').split("=")[1]);
            event.title = $(value).text().trim();
            myEvents[index] = event;
        });
        return myEvents;
    },

    functions.getHtmlEvents = function($http) {
        var htmlEvents = $http.get(urlEvents,{
            dataType: 'html'
        });
        htmlEvents.then(function(data){
            return data;
        });
        return htmlEvents;
    },

    functions.getHtmlDetailedEvent = function($http, id) {
        var htmlDetailedEvent = $http.get(urlDetailedEvent,{
            dataType: 'html',
            params: {id: id}
        });
        htmlDetailedEvent.then(function(data){
            return data;
        });
        return htmlDetailedEvent;
    },

    functions.getHtmlMyEvents = function($http){
        var htmlMyEvents = $http.get(urlMyEvents,{
            dataType: 'html'
        });
        htmlMyEvents.then(function(data){
            return data;
        });
        return htmlMyEvents;
    },

    functions.goToEvent = function ($http, id, ionicLoading, showAlert) {
        var src_iframe = urlDetailedEvent+"?id="+id;
        ionicLoading.show({
            template: 'Apuntandote al evento'
        });
        if($('#iframe_gotoevent').length == 0){
            $('body').append('<iframe sandbox="allow-forms" id="iframe_gotoevent" src="'+ src_iframe +'" >');
        }else{
            $('#iframe_gotoevent').attr('src',src_iframe);
        }

        $('#iframe_gotoevent').on('load',function (){
            $('#iframe_gotoevent').contents().find('form').submit();
            ionicLoading.hide();
            $('#iframe_gotoevent').off('load');
            if (functions.checkOkGoToEvent(id) == true){
                showAlert.apply();
            }
        });
    },

    functions.checkOkGoToEvent = function(id) {
        console.log(id);
    }

    return functions;
})();