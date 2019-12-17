# Examen

## Pregunta 1 (15 pts): Médicos

Como sabes, hay distintos tipos de médicos: cirujanos, pediatras, oftalmólogos, etc.

Implementa las clases (puedes elegir la sintaxis que quieras) para que este código, tenga la siguiente salida:

```js
const medic1 = new Surgeon('Mary');
const medic2 = new Pediatrist('John');
const medic3 = new Ophthalmologist('Ana');

medic1.presentation();
medic2.presentation();
medic3.presentation();

medic1.canISurgery();
medic2.canISurgery();
medic3.canISurgery();

medic3.question();
```
```
Hi! I am Mary
Hi! I am John
Hi! I am Ana
Mary - Yes! I can
John - No! I can not
Ana - No I can not
Ana - Can I see your eyes please?
```

Para lo anterior debes considerar que todas las clases deben heredar de una (adicional si lo deseas). Y debes aprovechar los beneficios de la herencia.

### Una solución

```js
class Medic {
  constructor(name) {
    this.name = name;
  }

  presentation() {
    console.log(`Hi! I am ${this.name}`);
  }

  canISurgery() {
    console.log(`${this.name} - No! I can not`);
  }
}

class Surgeon extends Medic {
  constructor(name) {
    super(name);
  }

  canISurgery() {
    console.log(`${this.name} - Yes! I can`);
  }
}

class Pediatrist extends Medic {
  constructor(name) {
    super(name);
  }
}

class Ophthalmologist extends Medic {
  constructor(name) {
    super(name);
  }
  
  question() {
    console.log(`${this.name} - Can I see your eyes please?`);
  }
}
```

### Pauta

* 6 pts clase padre
* 3 pt por cada clase hija (3). Si define una función que debe estar definida en la clase padre 0 pt.


## Pregunta 2 (15 pts): Noticias

La siguiente imagen ha sido sacada de `biobiochile.cl`. Escriba el `HTML` + `CSS` necesario para que se vea similar:

![](./noticias.png)

Algunos detalles:

* Los títulos son clickeables, puedes inventar la ruta a la que lleva. Puedes suponer que lo demás no lo es.
* Si requieres algún color, puedes colocar uno de referencia
* Si olvidaste alguna propiedad de `CSS`, puedes colocar un nombre y escribir al lado lo que se supone que hace.
* Puedes inventar una ruta para las imágenes.
* Cualquier supuesto que requieras hacer, puedes dejarlo escrito.

### Una solución

**HTML**

```html
<div id="articles-container">
  <h1>Nacional</h1>
  <div id="main-article-container">
    <article id="main-article">
      <img src="https://..." src="image" />
      <a href="https://...">"¿Por qué tengo ..."</a>
      <span><img src="https://.." alt="clock" />12:00</span>
      <p>El alcalde de Colina...</p>
    </article>
  </div>

  <div id="side-articles">
    <article class="side-article">
      <img src="https://..." alt="image" />
      <a href="https://...">Hechos violentos....</a>
    </article>

    <article class="side-article">
      <img src="https://..." alt="image" />
      <a href="https://...">Justicia deberá....</a>
    </article>

    <article class="side-article">
      <img src="https://..." alt="image" />
      <a href="https://...">RN confirma....</a>
    </article>
  </div>
</div>
```

**CSS:**

Aquí existen múltiples soluciones:

* Establecer un ancho máximo y colocar los elementos acorde a eso
* Utilizar float
* Utilizar flexbox
* U otro supuesto que este bien fundamentado

El alumno puede utilizar cualquiera de estos criterios, siempre y cuando esté bien implementado en CSS.

Algunas otras reglas importantes:

```css
#articles-container h1 {
  color: aqua;
  border-bottom: 1px solid #eee;
  font-weight: bold;
}

#main-article a {
  font-size: 16px; /* o aproximado */
}

#main-article span {
  font-size: 10px; /* o aproximado */
  color: gray;
}


#main-article p {
  font-size: 12px; /* o aproximado */
}

#articles-container, #side-articles {
  padding: 10px;
}
```

### Pauta

* (5 pts) HTML
* (10 pts) CSS
  * 2 pts el título (color de fondo, mayúsculas, borde inferior)
  * 2 pts horario de publicación artículo central
  * 6 pts posicionamiento.
    * 3 pts por posicionamiento articulo central y otros
    * 3 pts por posicionamiento de articulos pequeños (imagen y texto al lado)


## Pregunta 3 (15 pts): Creación de chips

Has diseñado un chip que revolucionará la computación, pero comenzó la hora de fabricarlo. Para esto, hay que seguir estos pasos:


1. Ensamblar el chip
2. Probarlo
3. Empaquetar para enviarlo


Con esto en mente, te dispones a fabricar tus chips.

* Como estás recién partiendo, solo puedes hacer un chip a la vez. Además, si falla uno, se detiene toda la cadena de producción y se chequea cual componente falló.

* Luego, como ya mejoraste tu diseño y pudiste adquirir más equipamiento, puedes hacer 3 chips en paralelo (puedes suponer que siempre llegan en múltiplos de 3). Al terminar esos 3, continúas con los siguientes 3 y así hasta terminar. Ahora, si uno falla, solo se deja un log y continuas con el ensamblaje.

* Finalmente, has dominado el mercado y puedes hacer todos los chips que quieras en paralelo. En este caso, ya ninguno de tus chips falla.

Escribe una función, que recibe un arreglo de chips, para cada uno de los casos anteriores y retorna una promesa. Esta dependerá de cada caso:


* En el primer caso, si todos los chips se terminan correctamente debe retornar un arreglo con estos. En caso de falla, se deben retornar los chips terminados y dejar un mensaje en consola indicando cuál falló (índice).

* En el segundo caso, se deben retornar un arreglo con los chips terminados exitosamente. Tal como aparece más arriba se debe dejar, en caso de falla, un mensaje en consola indicando cual falló (índice).

* En el último caso, retornar un arreglo con todos los chips terminados.


Tienes las siguientes funciones listas para utilizar:

* `factory.join(chip)`: Función que retorna un promesa que, al ser resuelta, retorna el chip ensamblado.

* `factory.test(chip)`: Función que retorna un promesa que, al ser resuelta, retorna el chip probado.

* `factory.package(chip)`: Función que retorna un promesa que, al ser resuelta, retorna el chip empaquetado.


Recuerda que, además, existe la función:

* `Promise.all([promise1, promise2,...])`: Función que recibe un arreglo de promesas y retorna una promesa que, al ser resuelta, retorna un arreglo con las respuestas de cada una de las promesas entregadas.


### Una Solución

**Primer caso**

```js
async function makeChips1(chips) {
  const finishedChips = [];

  try {
    for(let i = 0; i < chips.length; i += 1) {
      const currentChip = chips[i];
      await factory.join(currentChip)
        .then(factory.test)
        .then(factory.package)
        .then((chip) => finishedChips.push(chip));
    }
  } catch (e) {
    console.log(`Error in chip: ${finishedChips.length + 1}`);
    return finishedChips;
  }

  return finishedChips;
}

```

**Segundo caso**

```js
async function makeChips2(chips) {
  const finishedChips = [];

  for(let i = 0; i < chips.length; i += 3) {
    const currentChip1 = chips[i];
    const currentChip2 = chips[i + 1];
    const currentChip3 = chips[i + 2];

    promiseChip1 = factory.join(currentChip1)
      .then(factory.test)
      .then(factory.package)
      .then(finishedChips.push)
      .catch(() => console.log(`Error in chip: ${i + 1}`));
    
    promiseChip2 = factory.join(currentChip2)
      .then(factory.test)
      .then(factory.package)
      .then(finishedChips.push)
      .catch(() => console.log(`Error in chip: ${i + 2}`));
    
    promiseChip3 = factory.join(currentChip3)
      .then(factory.test)
      .then(factory.package)
      .then(finishedChips.push)
      .catch(() => console.log(`Error in chip: ${i + 3}`));

    await Promise.all([promiseChip1, promiseChip2, promiseChip3]);
  }

  return finishedChips;
}

```

**Tercer caso**

```js
function makeChips3(chips) {
  return chips.map((chip) => factory.join(currentChip)
    .then(factory.test)
    .then(factory.package));
}

```

### Pauta

* 5 pts por cada una de las funciones. Si hay problemas de asincronía máximo 2 pts por función.


## Pregunta 4 (15 pts): Modelos de autos

Escribe un(os) componente(s) en `React` que implemente(n) una tabla que permita ver los modelos que tiene una cierta marca de vehículos.

* Tu componente recibirá en una `prop` llamada `modelName` el nombre de la marca.

* Con el nombre de la marca, tendrá que ir a buscar el identificador de la marca a `https://cars.iic2513.cl/brand/by-name/:model`. Esta url retorna un `JSON` de la forma `{ "id": 5 }`. Puede suponer que siempre tendrá un nombre válido.

* Luego con el identificador de la marca, podrá ir a rescatar los modelos a `https://cars.iic2513.cl/brands/:id/models`. Esta ruta tiene una respuesta en formato `JSON`, aquí un ejemplo (puedes suponer que todos los elementos vienen con estas propiedades):

```json
[
  {
    "model": "model1",
    "description": "description of model",
    "lowestPriceVersion": 12345,
    "higestPriceVersion": 54321,
  },
  {...},
  {...}
]
```


* Si aún no has cargado los datos, debes mostrarle al usuario que los estas cargando. Una vez que lo hayas hecho, debes mostrarle una tabla con los datos que te ha retornado la `API`.

No es necesario que utilices *dumb/smart components*, tampoco que valides las `props`. También puedes suponer que las llamadas a la `API` no fallarán.

Si olvidaste los componentes...

```jsx
import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    // ...
  }
  
  render() {
    // ...
  }
}
```

### Una solución

```jsx
import React, { Component } from 'react';

export default class CarModels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modelInfo: [],
    };
  }

  componentDidMount() {
    const { modelName } = this.props;
    fetch(`https://cars.iic2513.cl/brand/by-name/${modelName}`)
      .then((response) => response.json())
      .then(({ id }) => fetch(`https://cars.iic2513.cl/brands/${id}/models`))
      .then((response) => response.json())
      .then((modelInfo) => this.setState({ modelInfo, loading: false }));
  }
  
  render() {
    const { loading, modelInfo } = this.state;
    if (loading) return <p>Loading...</p>;

    return (
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Description</th>
            <th>Lower price</th>
            <th>Higest price</th>
          </tr>
        </thead>
        <tbody>
          {modelInfo.map((model) => (
            <tr>
              <td>{model.model}</td>
              <td>{model.description}</td>
              <td>{model.lowestPriceVersion}</td>
              <td>{model.higestPriceVersion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
```

### Solución II (con Suspense, sin Class Components)

Para los que les quedó gustando React y quieren seguir por este camino, les dejo un codesanbox donde pueden encontrar la misma solución, pero utilizando APIs más actuales como lo es [Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html).

[Solución](https://codesandbox.io/s/dazzling-framework-zn97h)

### Solución III (con Hooks API + async/await)

La idea de utilizar [hooks](https://reactjs.org/docs/hooks-reference.html) es que ya no es necesario utilizar classes y lifecycle events como `componentDidMount`, lo cual proporciona mejor legibilidad a tu código y que sea menos *error prone*.

[Solución](https://codesandbox.io/s/busy-bird-97wp4)

### Pauta

* 5 pts cargar la información correctamente
* 2 pts por caso de loading
* 8 pts por mostrar la tabla con los datos (4 pts por el ciclo correcto)