var commons = (function () {

    var madridpatinaDomain = "http://www.madridpatina.com/";
    var urlLogin = madridpatinaDomain + "00_acceso_socio.php";
    var urlLogout = madridpatinaDomain + "00_cerrar_sesion.php";
    var urlEvents = madridpatinaDomain + "eventos.php";
    var urlDetailedEvent = madridpatinaDomain + "eventos_detalle.php";
    var privateAreaPHP =  "area_privada.php";
    var confirmEventPHP = "eventos_confirmar_alta.php";
    var unconfirmEventPHP = "eventos_confirmar_baja.php";
    var urlPrivateArea = madridpatinaDomain + privateAreaPHP;
    var urlGoToEvent = madridpatinaDomain + confirmEventPHP;
    var urlNotGoToEvent = madridpatinaDomain + unconfirmEventPHP;

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

    commons.urlLogin = function () {
        return urlLogin;
    };

    commons.urlLogout = function () {
        return urlLogout;
    };

    commons.urlEvents = function () {
        return urlEvents;
    };

    commons.urlDetailedEvent = function () {
        return urlDetailedEvent;
    };

    commons.privateAreaPHP = function(){
        return privateAreaPHP;
    };

    commons.confirmEventPHP = function(){
        return confirmEventPHP;
    };

    commons.unconfirmEventPHP = function(){
        return unconfirmEventPHP;
    };

    commons.urlPrivateArea = function(){
        return urlPrivateArea;
    };

    commons.urlGoToEvent = function(){
        return urlGoToEvent;
    };

    commons.urlNotGoToEvent = function(){
        return urlNotGoToEvent;
    };

    commons.getNumberOfMonth = function(month){
        return months[month];
    };

    return commons;
})();