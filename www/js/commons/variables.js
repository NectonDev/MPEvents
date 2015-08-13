var commons = (function () {

    var madridpatinaDomain = "http://www.madridpatina.com/";
    var areaPrivadaPhp = "area_privada.php";
    var urlLogin = madridpatinaDomain + "00_acceso_socio.php";
    var urlEvents = madridpatinaDomain + "eventos.php";
    var urlAreaPrivada = madridpatinaDomain + areaPrivadaPhp;

    var commons = {};

    commons.madridpatinaDomain = function () {
        return madridpatinaDomain;
    };

    commons.urlEvents = function () {
        return urlEvents;
    };

    return commons;
})();