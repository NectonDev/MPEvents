Aplicacion hibrida realizada en Ionic 1.1 (http://ionicframework.com/)

Para desplegar la App según se baja el repo:

bower install

Requerimientos: AngularJS 1.4
Nodejs y NPM instalados
Bower instalado como paquete global
GIT instalado

A tener en cuenta al desplegar que la directiva AngularJS order-object-by.js dentro de www/lib/angular-order-object-by/src hay que modificarla para que funcione correctamente.

El foreach tiene que ser asi
```javascript
angular.forEach(items, function(item, key) {
  item.objectID = key;
  filtered.push(item);
});
```