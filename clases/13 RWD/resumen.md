# Responsive Web Design

Ya no es un secreto que los dispositivos móviles llegaron para quedarse, y que representan una gran cantidad del tráfico de la web. (ver diapositivas 2 y 3 de la [clase](./Clase14.pdf))

El problema es... la pantalla. El tamaño de pantalla de un _smartphone_ no es el mismo que el de una laptop o un computador de escritorio. Entonces las cosas se ven... mal si no han sido diseñadas para una pantalla más pequeña.

Entonces, podríamos hacer _layouts_ que sean dependientes del ancho de la pantalla (o del navegador). Para esto, pueden abrir el primer ejemplo (dentro de la carpeta `code`), el archivo `ìndex.html` pueden abrirlo con su navegador favorito y jueguen a modificar el ancho de la ventana. ¿Ven como los elementos se agrandan o achican dependiendo del tamaño? La magia la realiza colocarle porcentajes a ciertas propiedades (ver archivo `app.css`).

La pregunta es ¿es suficiente esa herramienta?

Veamos el segundo ejemplo, aquí hay 3 elementos en el centro, repitamos el mismo procedimiento anterior. Al disminuir el ancho de la pantalla, los elementos se colocan en una columna. Pero de nuevo ¿Es suficiente? ¿Qué pasa si para un cierto tamaño de pantalla quiero esconder algo?

Para eso entra un nuevo "amigo" en CSS: _media queries_. A través de esta técnica se puede hacer que un mismo documento `HTML` se vea distinto dependiendo del dispositivo en que se visita (ver diapositiva 6 de la [clase](./Clase14.pdf)).

¿Cómo se ve una _media query_? (ver diapositiva 7 de la [clase](./Clase14.pdf)).

```css
@media (min-width: 900px) {
    p {
        color: red;
    }
}
```
La anterior regla quiere decir que se va a aplicar cuando el ancho sea 900px o más.

Veamos el tercer ejemplo, el cual se parece al segundo, repitamos el mismo procedimiento anterior. Al disminuir el ancho de la pantalla, los elementos se colocan en una columna pero, al pasar de un cierto punto, el ancho y el color de algunos elementos cambia. Mira cuales son las _media queries_ que intervienen.

Otro ejemplo: ver diapositiva 8 de la [clase](./Clase14.pdf).

## Algunas técnicas a la hora de diseñar un sitio

Dos técnicas que puedes ocupar para desarrollar un sitio son:

### Mobile first design

En esta técnica primero diseñas para el dispositivo móvil (de pantalla pequeña). A medida que la pantalla va creciendo, entonces se le van agregando elementos que aumenten la experiencia de usuario y el contenido.

Ver diapositiva 10 de la [clase](./Clase14.pdf).

### Adaptive web design

En este caso tu creas un sitio para cada uno de los dispositivos. Aquí puedes utilizar header como el `User-Agent` para determinar en qué navegador/dispositivo está el usuario.

Esta técnica te permite tener control total sobre lo que ve un dispositivo, pero agrega la complejidad de mantener varios sitios.

## Ejercicio

Abre el ejercicio 1 (carpeta `code/exercise1`), y en tu navegador abre el archivo `index_sol.html`. Mira lo que pasa al disminuir el ancho de la pantalla.

Modifica el archivo `index.html` y `app.css` para lograrlo. ¡Ah! y no mires `app_sol.css`, no hagas trampa!
