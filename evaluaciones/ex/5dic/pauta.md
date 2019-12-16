# Examen

## Pregunta 1 (15 pts): Login

Escribe un(os) componente(s) en `React` que implemente(n) un formulario para hacer login. Este formulario:


* Debe tener un *input* para `email` y otro para la contraseña. Además, un botón para enviar el formulario.

* Antes de enviar el formulario, debes verificar que el correo sea `@uc.cl` y que el campo de contraseña tenga algún valor. Si existe algún error con esto, debes mostrárselo al usuario de alguna forma (no como un mensaje en consola) y no enviar los datos.

* Si la validación anterior está correcta, debes enviar los datos mediante el método `POST` a la dirección `https://iic2513.uc.cl/auth`. En el *body* del request debes incluir un `JSON` con los campos `email` y `password`, para el correo y la contraseña respectivamente. Si el request se lleva a cabo sin problemas, imprime en consola `AUTH OK!`, si falla imprime `AUTH FAIL!`

No es necesario que utilices *dumb/smart components*.

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

### Una Solución

```jsx
import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };

    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleOnChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  isFormValid() {
    const { email, password } = this.state;
    if (!password || !email || !email.endsWith('@uc.cl')) {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.isFormValid()) {
      alert('Email must ends with @uc.cl and password can not be empty!'); // u otra forma
      return;
    }

    const { email, password } = this.state;
    fetch('https://iic2513.uc.cl/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password });
    })
      .then(() => console.log('AUTH OK!'))
      .catch(() => console.log('AUTH FAIL!'));
  }
  
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={this.handleOnChangeEmail} />
        
        <label for="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={this.handleOnChangePassword} />

        <input type="submit" value="Login" />
      </form>
    );
  }
}
```

### Pauta

* (5pts) Por render correcto. Incluir funciones de cambio de valor (incluido `bind`) y el valor como el valor guardado en el estado del componente para los *imputs* que lo requieran. Ojo que el campo de contraseña tiene que ser `password`.
  * 1 pt formulario y botón submit, más referencia a función `onSubmit`
  * 2 pts email
  * 2 pts contraseña

* (5 pts) Por la validación: correo sea `@uc.cl`, que el campo contraseña tenga algún valor y mostrar el error al usuario.
  * 2 pts validación correo
  * 1 pt validación contraseña
  * 2 pts mostrar el error

* (5 pts) Submit.
  * 2 pts hacer fetch correctamente
  * 2 pts casos de error y éxito
  * 1 pt no enviar formulario en caso de error

## Pregunta 2 (15 pts): Ejecutando JavaScript

Indica correctamente la salida de este programa. La función `consoleLogWithoutError()` tiene el mismo comportamiento que `console.log()` salvo que si hay un error lo controla e indica `-- ERROR --` en la consola, y el programa continúa.

```js
consoleLogWithoutError('Iniciando programa...')
var y = 3;
barking(2);
consoleLogWithoutError(addTwo(2));
consoleLogWithoutError(x);
x = 3;

function barking(times) {
  y = 1;
  for (let i = 0; i < times; i = i + 1) {
    consoleLogWithoutError('bark!');
  }
}

const addTwo = (number) => number + 2;
consoleLogWithoutError(addTwo(x));
consoleLogWithoutError(y);
consoleLogWithoutError(x);

var x;
consoleLogWithoutError('Terminando programa...')
```

### Solución

```
Iniciando programa...
bark!
bark!
-- ERROR --
undefined
5
1
3
Terminando programa...
```
### Pauta

* 2 pts por output correcto, salvo el primero y último (0,5 pts cada uno). Esto incluye que sea en una secuencia correcta, se puede interrumpir en algún momento y luego retomarla.

## Pregunta 3 (15 pts): Noticias

La siguiente imagen ha sido sacada de `emol.com`. Escriba el `HTML` + `CSS` necesario para que se vea similar:

![](./emol.png)

Algunos detalles:

* El texto es clickeable, puedes inventar la ruta a la que lleva. Puedes suponer que lo demás no lo es.
* Si requieres algún color, puedes colocar uno de referencia
* Si olvidaste alguna propiedad de `CSS`, puedes colocar un nombre y escribir al lado lo que se supone que hace.
* Puedes inventar una ruta para las imágenes.
* Cualquier supuesto que requieras hacer, puedes dejarlo escrito.


### Una solución

**HTML:**

```html
<div id="multimedia-container">
  <h1 id="multimedia-title">Multimedia</h1>
  <div id="multimedia-articles-container">
    <article class="multimedia-article">
      <img src="https://..." alt="image1">
      <a href="https://...">Las clases y vacíos...</a>
      <span class="article-comments">
        <img src=".../comments.png" alt="comments">
        148
      </span>
    </article>

    <article class="multimedia-article">
      <img src="https://..." alt="image2">
      <a href="https://...">¡Chile no es el único!...</a>
      <span class="article-comments">
        <img src=".../comments.png" alt="comments">
        181
      </span>
    </article>

    <article class="multimedia-article">
      <img src="https://..." alt="image3">
      <a href="https://...">A 500 años de su funcdación...</a>
      <span class="article-comments">
        <img src=".../comments.png" alt="comments">
        144
      </span>
    </article>

    <article class="multimedia-article">
      <img src="https://..." alt="image4">
      <a href="https://...">1° aniversario de Catrillanca: ...</a>
      <span class="article-comments">
        <img src=".../comments.png" alt="comments">
        121
      </span>
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
#multimedia-title {
  background-color: #EEE;
  text-transform: uppercase;
  border-bottom: 2px solid cyan;
}

.multimedia-article {
  padding: 10px;
}


.multimedia-article a {
  color: blue;
}

.multimedia-article img {
  width: 100%; /* o similar, la imagen no puede salir del contorno. Puede ser supuesto */
}

.multimedia-article .article-comments {
  text-align: right;
  color: aqua;
}
```

### Pauta

* (5 pts) HTML
* (10 pts) CSS
  * 2 pts el título (color de fondo, mayúsculas, borde inferior)
  * 2 pts comentarios de articulos (color celeste y texto hacia la derecha)
  * 6 pts posicionamiento. 4 artículos en línea.


## Pregunta 4 (15 pts): Corrección de pruebas

Tu ayudante, una vez terminada la evaluación, deberá corregir los exámenes. Para esto, está evaluando las siguientes alternativas:

* Corregir una a una todas las pruebas, es decir, para una prueba corregir todas las preguntas (de la primera a la cuarta) y luego continuar con la siguiente.

* Corregir una a una todas las preguntas 1, luego las preguntas 2 y así (para un total de 4 preguntas)

* O, finalmente, tomar un examen al azar y corregir todas sus preguntas, como en el primer caso.


Escribe una función para cada una de las alternativas anteriores. Tu función recibe una lista de examenes (objetos) y debe retornar una promesa que, al ser resuelta, retorne un arreglo con los examenes resueltos.

Para esto tienes las siguientes funciones disponibles y listas para usar:

* `ayudante.corregirPrimeraPregunta(examen)`: Función que recibe un examen (objeto) y retorna una promesa que, al ser resuelta, entrega el examen con su primera pregunta corregida.

* `ayudante.corregirSegundaPregunta(examen)`: Análoga a la primera, pero para la segunda pregunta.

* `ayudante.corregirTerceraPregunta(examen)`: Análoga a la primera, pero para la tercera pregunta.

* `ayudante.corregirCuartaPregunta(examen)`: Análoga a la primera, pero para la cuarta pregunta.

* `generarEnteroRandom(min, max)`: Genera un número entero *random* entre `min` (inclusive) y `max` (exclusive).


Algunos detalles:

* Tu ayudante no puede corregir dos preguntas al mismo tiempo

* Si lo necesitas, puedes agregar propiedades a un objeto examen.

* Si bien el `linter` en nuestro proyecto marcaba como error los `await` dentro de un ciclo, en este caso los podrás ocupar.


### Una Solución

**Primera Alternativa**

```js
async function reviewExams1(exams) {
  const readyExams = [];
  for(let i = 0; i < exams.length; i += 1) {
    const exam = exams[i];
    const readyExam = await ayudante.corregirPrimeraPregunta(exam)
      .then(ayudante.corregirSegundaPregunta)
      .then(ayudante.corregirTerceraPregunta)
      .then(ayudante.corregirCuartaPregunta);
    readyExams.push(readyExam);
  }

  return readyExams;
}
```

**Segunda Alternativa**

```js
async function reviewExams2(exams) {
  const readyExams = [];
  for(let i = 0; i < exams.length; i += 1) {
    const exam = exams[i];
    await ayudante.corregirPrimeraPregunta(exam);
    readyExams.push(exam);
  }

  for(let j = 0; j < readyExams.length; j += 1) {
    const exam = readyExams[j];
    await ayudante.corregirSegundaPregunta(exam); 
  }

  for(let k = 0; k < readyExams.length; k += 1) {
    const exam = readyExams[k];
    await ayudante.corregirTerceraPregunta(exam); 
  }

  for(let l = 0; l < readyExams.length; l += 1) {
    const exam = readyExams[l];
    await ayudante.corregirCuartaPregunta(exam); 
  }

  return readyExams;
}
```

**Tercera Alternativa**

```js
async function reviewExams3(exams) {
  const readyExams = [];

  while (readyExams.length !== exams.length) {
    const randomIndex = generarEnteroRandom(0, exams.length);
    const exam = exams[i];

    if (!exam.isEvaluated) {
      const readyExam = await ayudante.corregirPrimeraPregunta(exam)
        .then(ayudante.corregirSegundaPregunta)
        .then(ayudante.corregirTerceraPregunta)
        .then(ayudante.corregirCuartaPregunta);
      exam.isEvaluated = true;
      readyExams.push(readyExam);
    }
  }
  
  return readyExams;
}
```

### Pauta

* 5 pts cada una de las funciones. Si hay problemas de asincronía máximo 2 pts por función.