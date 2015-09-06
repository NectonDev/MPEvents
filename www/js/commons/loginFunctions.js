var loginFunctions = (function () {
    var loginFunctions = {};
    var urlLogin = commons.urlLogin();
    var urlLogout = commons.urlLogout();
    var urlPrivateArea = commons.urlPrivateArea();
    var privateAreaPHP = commons.privateAreaPHP();

    checkIsLogged = function (data) {
        return data.data.indexOf(privateAreaPHP) > -1;
    };

    loginFunctions.checkLogin = function ($http, data) {
        if (data == undefined) {
            var checkLogin = $http.get(urlPrivateArea);
            return checkLogin.then(function (data) {
                return checkIsLogged(data);
            });
        } else {
            return checkIsLogged(data);
        }
    };

    loginFunctions.doLogin = function ($http, username, password) {
        return $http({
            url: urlLogin,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {usuario: username, clave: password},
            transformRequest: function(obj) {
                var str = [];
                for (var key in obj) {
                    if (obj[key] instanceof Array) {
                        for(var idx in obj[key]){
                            var subObj = obj[key][idx];
                            for(var subKey in subObj){
                                str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
                            }
                        }
                    }
                    else {
                        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
                    }
                }
                return str.join("&");
            }
        });
    }

    loginFunctions.doLogout = function ($http) {
        return $http.get(urlLogout);
    };

    return loginFunctions;
})();