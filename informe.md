## Link
https://raquelbayas.github.io/frontend_pec5/


## Lighthouse

El informe generado por lighthouse nos muestra información acerca de las siguientes métricas: 
- Performance
- Accesibilidad
- Buenas prácticas
- SEO
- PWA

| Performance | Accessibility | Best Practices | SEO |
|-------------|---------------|----------------|-----|
| 97          | 90            | 100            | 100 |  



Tanto Best Practices como SEO nos muestra una puntuación perfecta, mientras Performance y Accessibility guardan un margen de mejora. Así mismo, se puede comprobar que el sitio web cumple con los requisitos de una PWA optimizada.

Cuenta con un service worker y un fichero manifest que permiten configurar la aplicación como una app independiente y compatible en otros dispositivos como móviles y tablets.

A continuación se analizan de manera resumida las siguientes métricas relacionadas con el Performance:

| First Contentful Paint | Total Blocking Time | Speed Index | Largest Contentful Paint | Cumulative Layout Shift | 
|------------------------|---------------------|-------------|--------------------------|-------------------------|
| 0.7s                   | 110 ms              | 0.8s        | 1.0s                     | 0.033                   |



### First Contentful Paint (FCP): 
Con un tiempo de 0.7 segundos, nos indica que el contenido de la página inicial se carga rápidamente.

### Total Blocking Time (TBT):
Esta métrica hace referencia al tiempo de bloqueo del sitio ante las interacciones del usuario, con 110ms podemos decir que el bloqueo es relativamente bajo por tanto el usuario no tiene que esperar mucho tiempo hasta poder interactúar con el contenido.

### Speed Index: 
Esta propiedad hace referencia a la velocidad de la carga. 0.8 segundos indica que la página se carga rápidamente.  

### Largest Contentful Paint (LCP):
El elemento principal de la página inicial tarda poco tiempo en cargarse (1 segundo).  

### Cumulative Layout Shift (CLS):
Los cambios en el diseño son mínimos con un valor de 0.033 podemos indicar que el diseño de la página es estable.  



