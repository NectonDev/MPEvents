A tener en cuenta al desplegar que la directiva AngularJS order-object-by.js dentro de www/lib/angular-order-object-by/src hay que modificarla para que funcione correctamente.

El foreach tiene que ser asi
```javascript
angular.forEach(items, function(item, key) {
  item.objectID = key;
  filtered.push(item);
});
```