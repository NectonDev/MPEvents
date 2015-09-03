var commons = (function () {

    var madridpatinaDomain = "http://www.madridpatina.com/";
    var areaPrivadaPhp = "area_privada.php";
    var urlLogin = madridpatinaDomain + "00_acceso_socio.php";
    var urlEvents = madridpatinaDomain + "eventos.php";
    var urlAreaPrivada = madridpatinaDomain + areaPrivadaPhp;

    var months = new Array();
    months["ENERO"] = 0;
    months["FEBRERO"] = 1;
    months["MARZO"] = 2;
    months["ABRIL"] = 3;
    months["MAYO"] = 4;
    months["JUNIO"] = 5;
    months["JULIO"] = 6;
    months["AGOSTO"] = 7;
    months["SEPTIEMBRE"] = 8;
    months["OCTUBRE"] = 9;
    months["NOVIEMBRE"] = 10;
    months["DICIEMBRE"] = 11;

    var commons = {};

    commons.madridpatinaDomain = function () {
        return madridpatinaDomain;
    };

    commons.urlEvents = function () {
        return urlEvents;
    };

    commons.getNumberOfMonth = function(month){
        return months[month];
    };

    return commons;
})();