# Pauta I1

## Parte 1 (20 pts): Preguntas teóricas

Responde, de forma precisa, las siguientes preguntas: 

1. (2 pts) Indica la diferencia entre el posicionamiento `fixed` y `absolute`.

**R:** `absolute` es una posición fija, por ejemplo, con respecto al sitio completo (en caso de que no haya un ancestro posicionado), `fixed` es un posicionamiento relativo al _viewport_.

2. (2 pts) ¿Qué selector es más específico?¿Por qué? `.paragraph a.special` y `#paragraph a.special`

**R:** El que tiene `id`. El id es más específico que una clase.

3. (2 pts) ¿Por qué posicionar elementos con tablas no es una buena práctica?¿Cuál es la forma recomendada de hacerlo?

**R:** Las tablas son para tabular datos, no para posicionar. Este último debería ser realizado mediante `CSS`

4. (2 pts) ¿Cuál es una consecuencia directa en el retorno de una función marcada como `async`?

**R:** Implica inmediatamente que retorna una promesa

5. (2 pts) Indica dónde viajan las _cookies_ en el protocolo `HTTP`.

**R:** Viajan en el paquete `HTTP`, en la sección de _headers_

6. (2 pts) ¿Por qué, al utilizar _callbacks_, se forma el _callback hell_ (o la pirámide de la perdición)?

**R:** Debido a que los _callbacks_ se llaman al final de la ejecución, por lo tanto para estar seguros de tener ciertos datos es que hay que encadenarlos.

7. (2 pts) Si un promesa entró a un _catch_ ¿Es posible que entre a otro _catch_?¿Por qué?

**R:** Sí, debido a que si ese _catch_ falla, debe ingresar al siguiente.

8. (2 pts) ¿Qué es el _box model_ en `CSS`?

**R:** Es el modelo utilizado en `CSS`, en donde todo elemento está dentro de una caja que tiene margen, borde, _padding_ y el contenido.

9. (2 pts) ¿Por qué se agrega un campo de tipo `hidden` de nombre `_method` en un formulario?

**R:** Para poder enviar los datos en una acción `HTTP` distinta de `GET` o `POST`.

10. (2 pts) ¿Para qué sirven los `HTTP` _status code_?

**R:** Sirven para saber el resultado de cada *request*. Ej. 2XX - todo bien, 3XX - redirección, etc.


## Parte 2 (40 pts): Preguntas prácticas

**Pauta General:** 
* Recordar que podrían existir soluciones alternativas para algunos de estos problemas
* Los alumnos podrían olvidar ciertos nombres de métodos u otros, pueden ser reemplazados por nombres descriptivos

### Parte A (10 pts): Copa América

Dada la pasada copa américa, la FIFA quiere que los ayudes a planificar la siguiente. Para esto tienes 8 equipos de fútbol (`E1` a `E8`). Debes hacerlos jugar de la siguiente forma:

* Partidos `P1` (`E1`-`E2`) y `P2` (`E3`-`E4`) se juegan al mismo tiempo
* Luego se juega `P3` (`E5`-`E6`) y `P4` (`E7`-`E8`), al mismo tiempo.
* Posterior a eso juegan el ganador de `P1` y `P2` (`P5`), y `P3` y `P4` (`P6`) al mismo tiempo.
* La final entre ganadores de `P5` y `P6`.

Para esto la FIFA te ha entregado la siguiente librería:

* `FIFA.playMatch(team1, team2)`: Entrega una promesa que, al ser resuelta, entrega al ganador del partido. Supone que siempre hay un ganador y que la promesa siempre se resuelve. Los parámetros que recibe son los equipos (ej. `E1`, `E2`, etc.)

* `FIFA.playGamesAtTheSameTime([game1, game2, ...])`: Función que recibe un arreglo que, en cada posición, contiene una promesa. Retorna una promesa que, al ser resuelta, entrega un arreglo con las respuestas de cada una de las anteriores en la posición que fue especificada.

1. (8 pts) Implementa una función que retorne una promesa con el ganador de la final.

2. (2 pts) Si la API de la FIFA cambiara a usar _callbacks_ (La función ahora es `FIFA.playMatch(team1, team2, callback)`. ¿Podrías implentar lo mismo? ¿Qué cuidados habría que tener?

#### Solución 1)

```js
async function getWinner() {
    const [winnerP1, winnerP2] = await FIFA.playGamesAtTheSameTime([
        FIFA.playMatch('E1', 'E2');
        FIFA.playMatch('E3', 'E4');
    ]);

    const [winnerP3, winnerP4] = await FIFA.playGamesAtTheSameTime([
        FIFA.playMatch('E5', 'E6');
        FIFA.playMatch('E7', 'E8');
    ]);

    const [winnerP5, winnerP6] = await FIFA.playGamesAtTheSameTime([
        FIFA.playMatch(winnerP1, winnerP2);
        FIFA.playMatch(winnerP3, winnerP4);
    ]);

    return FIFA.playMatch(winnerP5, winnerP6);
}
```

**Pauta**: Dos puntos por cada partido jugado al mismo tiempo, 2 puntos porque el método retorne una promesa y con el ganador. Máximo 4 puntos si hay problemas de asincronía (no esperar alguna promesa).

#### Solución 2)

Lo importante de esta pregunta es ver que jugar los partidos al mismo tiempo es complejo, porque es importante que esten los valores calculado para los siguientes partidos. Se puede implementar, pero lo anterior indica que no sería fácil.



### Parte B (5 pts): I'm the admin

En tu proyecto semestral quieres agregar un panel de administración para tus usuarios. Para esto, has definido ciertos roles y has agregado una propiedad que indica si tiene acceso a este panel. En resumen lo que tienes actualmente implementado es:

* Un modelo usuario (`user`) y un modelo Rol (`role`)
* La relación es: `user belongs to role`
* El rol tiene una propiedad llamada `hasAccessToAdminPanel`, que es `true` en caso de que lo tenga.
* Puedes suponer que en `ctx.state.currentUser` estará el usuario actual del request. También puedes suponer que siempre estará definido.

1. (4 pts) Implementa un _middleware_ que agregue el valor de `hasAccessToAdminPanel` a alguna propiedad en `ctx.state`.

2. (1 pt) ¿Por qué esto podría ser relevante de hacer?¿Qué ganas con esto? Basa tu respuesta en el rendimiento de tu aplicación.

#### Solución 1)

```js
async function loadHasAccessToAdminPanel(ctx, next) {
    const { currentUser } = ctx.state;
    const { hasAccessToAdminPanel } = await currentUser.getRole();
    ctx.state.hasAccessToAdminPanel = hasAccessToAdminPanel;
    return next();
}
```
**Pauta**: 1 punto por formar bien el _middleware_ (incluido el retornar `next()`), 2 puntos por obtener el rol y 1 punto por agregarlo a `ctx.state.prop` 

#### Solución 2)

Esto es relevante en la medida que otros _middlewares_ ocupen este valor, de esta forma solo se va a la base de datos una vez. De caso contrario, iríamos cada vez que el usuario llame a `getRole()` (o tenga que obtener el rol)


### Parte C (5 pts): Mis visitas

1. (4 pts) Escribe un _middleware_ que cuente las visitas de un usuario **sin almacenarlas en la base de datos**. Puedes ocupar todas las herramientas disponibles en el template del curso.

2. (1 pt) ¿Puedes confiar siempre en ese valor?¿Por qué?


#### Solución 1)

```js
async function userVisitCounter(ctx, next) {
    const { visitCounter } = ctx.session;
    
    if (!visitCounter){
        ctx.session.visitCounter = 1
    }
    else {
        ctx.session.visitCounter = visitCounter + 1;
    }

    return next();
}
```

**Pauta**: 1 punto por el caso que no esté definido. 2 puntos el otro caso (incrementar el valor). 1 punto por _middleware_ (con retorno de `next()`)

#### Solución 2)

No se puede confiar en este valor ya que el usuario, por ejemplo, podría borrar las _cookies_.


### Parte D (8 pts): Formulario de reclamo

Actualmente estás implementado un formulario de reclamo para que un usuario pueda denunciar algún problema en su comunidad. Este formulario tiene los siguientes campos:

* Nombre (campo de texto) - Campo `name`
* Dirección del incidente (campo de texto) - Campo `address`
* Observaciones (cuadro de texto) - Campo `notes`
* Comuna (selector) - Campo `commune`
* Botón para enviar el formulario (con el texto `Enviar`)

Deberás crear la vista del formulario descrito anteriormente (como en tu proyecto semestral), las variables disponibles son:

* `submitPath`: Dirección donde se envía el formulario
* `method`: Método con que se envía el formulario (sólo puede ser `GET` o `POST`)
* `areaId`: Identificador de región donde se hará el reclamo
* `communes`: Objeto que contiene un propiedad por cada identificador de región y como valor, para cada uno de ellos, un arreglo con objetos que tienen la propiedad `label` y `value`. 


Por si olvidaste como hacer un cuadro de texto, este se hace con un `<textarea></textarea>`.

En el caso de un selector:

```html
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab" selected>Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

#### Solución

```html
<form action="<%= submitPath %>" method="<%= method %>" >
    <input type="text" name="name" placeholder="name"/>
    <input type="text" name="address" placeholder="address" />
    <textarea name="notes" placeholder="Add your notes"></textarea>
    <select name="commune">
        <% communes[areaId].forEach((commune) => { %>
            <option value="<%= commune.value %>"><%= commune.label %></option>
        <% }) %>
    </select>
    <input type="submit" value="Enviar">
</form>
```

**Pauta**: Un punto por el formulario, un punto por cada campo (no select, incluye botón, no necesario _placeholder_). 1 punto por select, 2 puntos por las opciones. En el caso de las opciones también se pueden mostrar todas las que vengan en la variable `communes`, sin embargo, verificar si las obtiene correctamente. 0 puntos si no lo hace (para ese item).


### Parte E (12 pts): Correción automática

Estás trabajando para un proyecto que permite tomar pruebas _online_. Para esto, has implementado una vista (con un formulario) para poder responder cada cuestionario (que tiene siempre 5 preguntas. Cuando el usuario envía sus respuestas se debe calcular el porcentaje de preguntas correctas, almacenar esta información en la base de datos y luego mostrarle su resultado al usuario.

1. (4 pts) Indica todas las entidades, atributos relevantes y relaciones que necesitas para resolver este problema.

2. (8 pts) Implementa el código del router que realiza lo antes mencionado. Para esto puedes suponer lo siguiente:

    * El formulario envía los datos a través del método `POST`
    * Las respuestas del usuario se envían como `p1`, `p2`, `p3`, `p4` y `p5`
    * La ruta a la que se envía el formulario es `/test/:testId/attempt`
    * La vista de respuesta se llama `test-result` (ubicada en la carpeta `src/views/test`) y recibe una variable llamada `result` con el resultado del usuario
    * El usuario actual está definido siempre en `ctx.state.currentUser`


Por si olvidaste como escribir un router:

```js
router.get('my-route', '/', async (ctx) => {
	[...]
});
```

#### Solución 1)

* Entidades
  * Usuario (`user`)
  * Test (`test`) con atributos `r1`, `r2`, `r3`, `r4` y `r5` (las respuestas)
  * Answer (`answer`) con relación `belongs to` para usuario y test. Tiene atributo `result` con las respuestas correctas.

**Pauta:** 1 punto por entidades, 1 punto por atributos y 2 puntos por las relaciones.

#### Solución 2)

```js
router.post('test-attempt', '/test/:testId/attempt', async (ctx) => {
    const { currentUser } = ctx.state;
    const { p1, p2, p3, p4, p5 } = ctx.request.body;
    const currentTest = await ctx.orm.test.findByPk(ctx.params.testId);

    let result = 0;
    if (p1 === currentTest.r1) result += 1;
    if (p2 === currentTest.r2) result += 1;
    if (p3 === currentTest.r3) result += 1;
    if (p4 === currentTest.r4) result += 1;
    if (p5 === currentTest.r5) result += 1;
    result /= 5;

    await ctx.orm.answer.create({ user: currentUser, test: currentTest, result });

    return ctx.render('test/test-results', { result });
});
```

**Pauta:** 1 punto por obtener las respuestas del body, 2 puntos por calcular correctamente el resultado, 2 puntos por guardar correctamente el resultado del usuario (es importante el `await`, es importante que guarde al menos usuario y resultado), 2 puntos por retornar la vista solicitada. 1 puntos por cómo está formado el router.
