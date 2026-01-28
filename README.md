# Guía para personalizar la Página de Cumpleaños

¡Hola! He creado la estructura base para la página de tu hermana. Aquí tienes cómo personalizarla:

## 1. Cambiar las Fotos
Las fotos están en la carpeta `assets`.
- Simplemente coloca tus fotos en esa carpeta.
- Abre `index.html` y cambia los nombres de archivo en las etiquetas `<img>`:
  ```html
  <img src="assets/TU_FOTO.jpg" alt="...">
  ```

## 2. Personalizar el Mensaje
Abre `index.html` y busca el texto "¡Feliz Cumpleaños!" o el párrafo debajo para escribir tu propio mensaje emotivo.

## 3. Agregar más fotos
Para agregar más fotos al collage, simplemente copia y pega este bloque de código dentro de `<div class="gallery-grid">`:

```html
<div class="photo-card" onclick="openModal('assets/TU_NUEVA_FOTO.jpg')">
    <div class="image-wrapper">
        <img src="assets/TU_NUEVA_FOTO.jpg" alt="Descripción" loading="lazy">
    </div>
</div>
```

¡Espero que le guste mucho a tu hermana! 🎉
