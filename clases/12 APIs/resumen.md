# API

Las APIs, tal como su nombre lo indica, son *Application Programming Interface*. Básicamente una interfaz de una aplicación que permite que otras puedan intereactuar con ella.

Actualmente están siendo bastante ocupadas, ya que la mayoría de los dispositivos, aplicaciones móviles, puntos de pago, televisores y otros; se conectan a una interfaz ya sea para consultar o para entregar información.

En general, los *request* a una API están formados por 3 elementos:

* *Scope*: Contexto donde se va a actuar
* Acción / Operación: Qué es lo que se realizará
* Datos: Sobre que información se realizará la operación

Y como se clasifican:

* En general todos usan HTTP
  * Un *envelope* en el *body* del request
  * Contenido en el body

* Las cosas que tienen distinto
  * Dónde va la operación
  * Dónde va el *scope* y datos


Los primeros intentos por crear interfaces datan de hace "bastante tiempo". Los primeros seguían algunos lineamientos para llamar a procedimientos remotos (RPC) y también para invocar métodos rem,otos (RMI) (ver diapositiva 8 de [API](./Clase12.pdf)). Luego se comenzó a combinar con XML y así comenzó a progresar, pero en el ejemplo podemos ver como se escribe el método y los datos en un XML para recibir la respuesta.

En ambientes más empresariales se comenzó a ocupar el protocolo SOAP (ver diapositiva 9 de [API](./Clase12.pdf)). Este protocolo tiene 3 elementos: *Service Registry*, que funciona como registro de los servicios diponibles; *Service Provider*, quien implementa el servicio y el *Service Consumer* quien es el que hace uso de los servicios.

El proceso es el siguiente:

1. *Service Provider* implementa un servicio y lo publica en el *Service Registry*. Lo que envía es el WSDL (Web Services Description Language), que es un documento que describe qué es lo que hace ese servicio y dónde se encuentra (en palabras simples).

2. *Service Consumer* va a *Service Registry* a solicitar el/los servicio/s disponible/s. Descarga el WSDL de alguno que requiera

3. Siguiendo los datos del WSDL, *Service Consumer* se conecta al *Service Provider* e intercambian información. Todo los documentos e información están en formato XML, y se hace intercambios a través de sobres (*envelopes*).

Finalmente, en la actualidad muchos de los servicios web siguen una arquitectura REST (*Representational state transfer*). En este caso, las acciones están representadas por las acciones `HTTP`, los datos se encuentran en el *body* y el scope en la `URL`, la cual se organiza por recursos (o colecciones de recursos).

Existen algunas restricciones para que una API se considere RESTful, estas son:

* Arquitectura cliente servidor
* Cada request debe contener la información necesaria para poder responder el *request*
* Debe definir (explícita o implicitamente) si las respuestas pueden ser "cacheadas" o no
* Un cliente no debería saber si está conectado con el servidor de la aplicación o uno intermediario. Por ejemplo, balanceadores de carga.
* (opcional) Puede exponer código ejecutable por el cliente
* Interfaz uniforme
  * Identificación de recursos, por ejemplo en la `URIs` del servicio
  * Manipulación de recursos por medio de representaciones
  * Mensajes descriptivos
  * Enlaces para descubrir otras acciones disponibles

## APIs de ejemplo

Algunas APIs de ejemplo (por si quieren jugar):

* [Flickr](https://www.flickr.com/services/api/): Disponible en varios formatos como REST, XML-RPC y SOAP.
* [GitHub](https://developer.github.com/v3/): API de GitHub


## En nuestro proyecto

En nuestro proyecto [MyUniversity](https://github.com/IIC2513-2019-2/my-university) tenemos actualmente 3 Pull Request:

### Agregar ruta para lista de cursos

En este *pull request* realizamos lo siguiente:

* Agregamos un paquete se llama `jsonapi-serializer`. Este paquete nos provee una forma de exponer nuestros datos utilizando la especificación [JSON:API](https://jsonapi.org/)

* Agregamos una ruta para todas las llamadas `/api`

* Agregamos un controlador que muestra la lista de cursos y un curso siguiente la especificación [JSON:API].

Puedes verlo en [GitHub](https://github.com/IIC2513-2019-2/my-university/pull/10)


### Agregar ruta privada para lista de estudiantes

En este *pull request* vamos a agregar autenticación a nuestra API, que será distinta a la autenticación por *cookies* que vimos.

Para la autenticación utilizaremos JSON Web Tokens (JWT), que es un estándar de seguridad. Puedes ver más información (y como funciona) en su [sitio web](https://jwt.io/).

* Agregamos los paquetes para trabajar con JWTs
* Agregamos una ruta para login
* Agregamos un código para obtener el usuario dependiendo de su token
* Implementamos retornar la información de estudiantes solo si el usuario está logueado.


Puedes verlo en [GitHub](https://github.com/IIC2513-2019-2/my-university/pull/11)


### ¿Una ruta que responde en distintos formatos?

Sí, se puede. Pueden especificar qué esperan como respuesta en el *header* `Accept`, por ejemplo: `application/json` o `text/html`. Luego, en Koa, pueden usar `ctx.accepts()`.

Puedes verlo en [GitHub](https://github.com/IIC2513-2019-2/my-university/pull/12)
