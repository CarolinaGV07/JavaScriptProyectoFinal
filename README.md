# Proyecto Final de Javascript (Carolina Gavatorta Valdez)

Curso de Javascript en Coderhouse

El proyecto consiste en un e-commerce de los tratamientos que brinda Vanina Gavatorta Valdez en su consultorio, quien posee el tìtulo de Dermatocosmiatra (mi hermana).

## :hammer: Funcionalidad:

En primer lugar fui creando el html en base a la idea que surgió en el sitio web del curso de Desarrollo Web, pero todo fue mermando y acomodándose al comenzar a aplicar JS.
 Algunas de las funciones fueron hechas en la pre-entrega anterior pero la gran mayoria de lo que se ve plasmado en esta SPA fue hecho para este proyecto final. Algunas de las funciones 
 fueron adaptadas de lo visto en clase y otras, ideas propias puestas a prueba. 
 En la esquina superior izquierda puede verse la fecha y la hora, lo cual fue hecho con la librería Luxon. 
 - 📌 El nav:
 - Posee un buscador por coincidencias hecho con los mètodos filter e includes. La función también esta provista de un ternario.
 - Luego figura un selector que ordena los tratamientos de 3 maneras: menor a mayor valor, mayor a menor valor y alfabeticamente. Las 3 funciones utilizan los metodos sort y concat.
 - La tercera funcionalidad del nav es el dark mode. El boton posee el evento toggle que oficia con el efecto "llave de luz". Esta logrado con un condicional dentro del evento del boton y 
 con otro condicional que captura su estado y lo setea en el storage.
 - El cuarto botón es un bonus 🎁. Lo llame así para incluir una funcion que me sobraba y no queria descartar, hecha primeramente con prompts y alerts simples, los que reemplace con alertas de la librería 
 Sweet Alert. El boton invoca un modal, donde se solicita colocar en el input del mismo la edad del usuario, a lo cual responde con diferentes opciones un condicional, en el que utilice operadores 
 lógicos para brindar las diferentes variantes de tratamientos disponibles y convenientes segun las franjas de edades estipuladas.
 - La quinta opcion del nav es un botón de registro (sing up) para que el usuario pase a formar parte del sitio con el título de paciente y pueda figurar como tal para el sistema, lo cual intenta 
 inducirlo a solicitar los tratamientos ofrecidos. Utilicé nuevamente un modal donde se le pide a traves de inputs que ingrese su nombre completo, su edad y un mail de contacto. Al final un sweet alert lo 
 felicita junto a una imagen de la profesional que la/lo atenderá si adquiere los tratamientos.
 - La sexta y ultima funcionalidad del nav es el carrito de compras, el cual esta conectado a los botones de las cards. En él se pueden ver los tratamientos elegidos por el usuario/paciente 
 proximos a adquirir. Cada card tiene su imagen, su precio unitario, su cantidad, y su subtotal. Ademas posee los botones para sumar o restar unidades, y un tercer boton que directamente 
 elimine el tratamiento en cuestion, mas alla de sus unidades (todo esto logrado en un segundo metodo for each en la misma funcion, donde se utilizaron metodos como remove, find e index of). 
 El modal del carrito esta confeccionado con un template que figura en el primer metodo for each de la funcion, y ademas el modal posee en su 
 footer el total de la compra basada en una función hecha con el metodo reduce, y los botones pertinentes. El boton Finalizar compra posee una alerta donde 
 se le pregunta al usuario si esta de acuerdo con la compra y si quiere seguir adelante o no, lo cual esta logrado a traves del metodo .then que maneja promesas.
 - ⚙️ Tanto el boton de registro como el boton de compras estan sujetos cada uno a su array de objetos, y todos los movimientos que estos sufren quedan seteados en el storage.
 - 📌 El main esta compuesto por las cards que muestran los diferentes tratamientos que la profesional ofrece en su consultorio, ya sea con trabajo manual o con aparatología. Estas se ven a traves de 
 una funcion que contiene un for of con un template acorde a lo requerido para mostrar (imagen, precio y metodo de trabajo). Cada card al ser comprada por el boton "Lo quiero" posee un Sweet Alert que 
 mejora la experiencia del usuario y le confirma que el tratamiento ya figura en el carrito de compras.
 - Por supuesto los eventos estan logrados a traves de la captura con DOM de las etiquetas HTML.
 - El loader contempla la funcionalidad de un setInterval que mejora la experiencia de usuario, mientras éste logra visualizar la carga de las cards de los tratamientos. Del mismo modo, esta función 
 consigue mostrar la hora actual, arriba a la izquierda ya mencionada anteriormente.
 - El proyecto cuenta con la carpeta de modulos en la que se han incluido Bootstrap, Animate.css, Luxon y Sweet Alert, con los que además de lograr funcionalidad, aporté estilos que compatibilice con los propios dados con CSS, también para la confección del header y el footer. 
 - Llevé a cabo el consumo de un archivo .json que posee en este caso los objetos instanciados para el array de tratamientos, a través de la sentencia Await combinada con la asincronicidad que le aporta Async a la función que posee el metodo fetch.
 - 📢 Opinion propia: muy contenta con los resultados obtenidos y agradecida ❤️ por todo lo aprendido en este proceso que tan pronto pasó. Y a decir verdad, así como enumero lo hecho, me gustaría también 
 plasmar lo no logrado (aunque intentado con asiduidad):
 - Tenía un gradiente para el fondo de la SPA en el "LightMode", pero al incluirlo, me inutilizaba el DarkMode. Nunca logre que sean compatibles y por eso recurri a un fondo simple con un solo color para cuando el dark mode esta desactivado. 
 - Intente cambiarle el color con una clase de css a un boton hecho con bootstrap que tiene un evento, pero cuando figuraba con mi color elegido, el evento no funcionaba (por eso quedaron en verde los botones de aceptacion de los modal y los alert (yo los queria en violeta, y por eso recurri al violeta para los botones de cierre).
 - No pude usar el value del input Nombre (modal registro) para que en el sweet alert aparezca el nombre de la persona que solicita el registro y se lo felicite con nombre incluido. No se si es porque al querer usar el value de un input en un sweet alert se hace de otra forma, pero no descubri el por que de que no funcione.
 - Los iconos del footer (Facebook e Instagram) y el icono del fixed (Whatsapp) no son los mejores a causa de no encontrar png que funcionen como deberían (algun dia los encontrare), pero sí posee cada uno la ruta absoluta hacia el sitio web, que no lo habia mencionado antes.
 - De ser posible encontrar soluciones a estos 4 problemitas, desde ya soy toda a oidos! Gracias Gonza por tu entrega clase a clase! Aguardo tu corrección con ansias!! Buena vida!! Beso grande!!!

 
 
 
