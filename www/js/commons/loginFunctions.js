var loginFunctions = (function () {
    var loginFunctions = {};
    var urlLogin = commons.urlLogin();
    var urlPrivateArea = commons.urlPrivateArea();
    var privateAreaPHP = commons.privateAreaPHP();

    checkIsLogged = function (data) {
        return data.data.indexOf(privateAreaPHP) > -1;
    };

    checkLogin = function ($http, data) {
        if (data == undefined) {
            var checkLogin = $http.get(urlPrivateArea);
            return checkLogin.then(function (data) {
                return checkIsLogged(data);
            });
        } else {
            return checkIsLogged(data);
        }
    };

    loginFunctions.doLogin = function ($http, user, password) {
        var postLogin = $http({
            url: urlLogin,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {usuario: user, clave: password},
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
        postLogin.then(function(data){
            console.log(checkLogin($http, data));
        });
    }

    return loginFunctions;
})();