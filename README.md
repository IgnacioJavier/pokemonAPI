# NasaApodAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## NOTAS:

El uso de la API está documentado en el siguiente repositorio de github: https://github.com/nasa/apod-api

El desarrollo de los servicios que consumen la API se ha realizado teniendo en cuenta los condicionantes
de la propia API. 

De este modo se ha creado un método para obtener un listado de imágenes que van desde la 
fecha pasada por parámetros hasta N días antes, siendo N un parámetro numérico que resta esos N días a la 
fecha introducida como primer parámetro (el componente al suscribirse al observable se encarga de seleccionar 
la fecha del día actual).

El otro método del servicio peticiona una imagen dada una fecha. Si bien proporciona la misma respuesta, y podría
haberse implementado algún mecanismo para no peticionar el detalle a la API nuevamente, sino traerlo directamente
desde la respuesta del listado previa, pero se ha considerado que es un comportamiento poco común, ya que normalmente
las APIS suelen traer diferente información a la hora de pedir detalles que a la hora de traer listados, y se ha optado
por realizar una nueva petición GET, por ser lo más habitual como se ha comentado antes.

Como la API puede devolver tanto imágenes como vídeos, en la documentación de la misma se indica el uso opcional
de un parámetro 'thumbs' booleano, el cual, informado a true, trae un dato adicional en la respuesta, 'thumbnail_url'
el cual trae una url de una imagen (thumb) representativa del vídeo. En ambos métodos para consumir la API se 
ha informado dicho parámetro con el valor true para obtenerlo y usarlo.

Se ha optado por no hacer uso de las imágenes en hd por su elevado tamaño y consumo de datos, sobre todo en 
dispositivos móviles.

Bajo el paraguas de el media-type: video, a veces vienen ficheros multimedia ejecutables, por lo que se ha optado por 
insertar un iframe con un pipe de seguridad para evitar bloqueos CORB).

Para poder obtener una buena variabilidad de las respuestas se han peticionado las ultimas del año completo y se
ha observado que algunos campos de thumbnails a veces vienen con la url vacía, o incluso lo anteriormente mencionado
de los videos que es como un "cajón desastre" donde se mete todo lo que no es imagen. Se ha tenido en cuenta todo
esto en el desarrollo para proveer imágenes en ausencia de las mismas, así como redirecciones a página de error cuando
se captura un error 404 del lado del servidor (pidiendo fechas anteriores a 1995-06-16 o superiores a la actual, o poniendo
datos sin coherencia, como 2022-06-36, el cual devuelve un mensaje de error diferente desde el back, teniendo muy controlado
el tipo de error que produce).

Se facilitan las siguientes fechas para archivos que no son imágenes para su testeo:
2021-07-13 , 2021-07-14 , 2021-08-02 , 2021-08-25 , 2021-09-05 , 2022-06-19 (esta última no trae thumb)

Para poder realizar un correcto tipado de las respuestas se ha creado un modelo representativo de la respuesta 
proporcionada por la API, el cual ha sido generado usando la siguiente web app: https://app.quicktype.io/

En cuanto al scaffolding del proyecto, se ha creado un directorio de componentes aislados reutilizables, otro
de modelos que almacenan las interfaces necesarias para el mapeo de las respuestas de la API, uno de páginas que
contiene la página dashboard y la página de detalle y un directorio shared que contiene todos los recursos compartidos
susceptibles de ser utilizados por cualquier componente de la app (services, pipes...).

Los estilos de la app se han realizado usando la libreria de angular-material. Se ha procurado realizar un diseño responsive en la medida de lo posible.

El routing del proyecto se ha desarrollado teniendo en cuenta que dashboard y detail son páginas diferentes, no 
quedando la segunda anidada dentro de la primera y haciendo el cambio de una a otra al tocar la card correspondiente
del dashboard.

La página de detalle se referencia por la fecha de la imagen, la cual puede ser explotada para traer cualquier imagen de cualquier fecha que se indique en la url 
y que incluso, a futuro, podría implementarse un widget de calendario que permitiera explotar esta funcionalidad, la cual no se pide, por lo tanto no se desarrolla.

La API sólo dispone de imágenes desde 1995, y una fecha inferior produciría un error que habría que manejar (al igual
que una fecha superior a la actual). Se ha tenido en cuenta esto en el desarrollo y se controla redirigiendo a una 
página de error.

Se ha procurado ilustrar múltiples funcionalidades de Angular para el desarrollo de la prueba. Si bien muchas se pueden resolver de diferentes maneras, no he querido 
dejar de ilustrar el uso de pipes personalizados, comunicación nativa entre componentes relacionados padre/hijo mediante el uso de decoradores @input y @output donde 
ha sido posible, comunicación entre componentes no relacionados haciendo uso de servicios y Observables en lugar de Promises en la medida de lo posible.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
