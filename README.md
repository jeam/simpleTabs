simpleTabs jQuery Plugin
==

Otro plugin que crea tabs.

Para usar: Incluye el plugin en tu proyecto, añade la clase `tab` a cada uno de los tabs y la clase `nav` al `ul` de la navegación.

### Uso:

Incluye `jquery.simpleTabs.js` en el header o footer (o en un archivo de plugins conjunto).

Si estas en versión de producción recomiendo ocupar `jquery.simpleTabs.min.js`.

#### HTML

```html
<div id="div">
  <ul class="nav">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
  </ul>
  <div class="tab" id="tab1">
    Tab 1
  </div>
  <div class="tab" id="tab2">
    Tab 2
  </div>
</div>
```

#### JavaScript

```js
$('#div').simpleTabs();
```

### Opciones:

Por ahora hay pocas opciones (solo una :P), dentro de un tiempo espero agregar más.

Acá están los valores por defecto

```js
$('#div').simpleTabs({
  // Usar select para seleccionar en que tab se desea comenzar
  select: 1
});
```