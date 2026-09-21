// =========================================
// CAMBIAR DE PANTALLA
// =========================================

function mostrarPantalla(idPantalla) {

    // Ocultamos todas las pantallas
    const pantallas = document.querySelectorAll("section");

    pantallas.forEach(function (pantalla) {
        pantalla.style.display = "none";
    });

    // Mostramos solamente la pantalla solicitada
    document.getElementById(idPantalla).style.display = "flex";
}

// =========================================
// LOGIN
// =========================================

// Esta será la contraseña de Kilian
const CONTRASENA = "KilianDeVainilla";

// Buscamos los elementos que necesitamos
const passwordInput = document.getElementById("password");
const btnEntrar = document.getElementById("btnEntrar");
const loginMessage = document.getElementById("login-message");

// =========================================
// PANTALLA 1 - ¿QUIERES TU REGALO?
// =========================================

let intentosSi = 0;
let intentosNo = 0;

// Elementos de la pantalla
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const btnRecoger = document.getElementById("btnRecoger");
const btnContinuar = document.getElementById("btnContinuar");

const mensajeInicio = document.getElementById("mensaje-inicio");
const gatitoInicio = document.getElementById("gatito-inicio");


// Cuando Kilian presione ENTRAR...
btnEntrar.addEventListener("click", function () {

    // Guardamos lo que escribió
    const contraseñaEscrita = passwordInput.value;

    // Comprobamos si coincide
    if (contraseñaEscrita === CONTRASENA) {

        loginMessage.textContent = "¡Bienvenido, Kilian! ❤️";

        setTimeout(function () {
            mostrarPantalla("inicio-screen");
        }, 1000);

    } else {

        loginMessage.textContent = "Contraseña incorrecta 😿";

    }

});

// =========================================
// BOTÓN SÍ
// =========================================

btnSi.addEventListener("click", function () {

    intentosSi++;

    if (intentosSi === 1) {

        mensajeInicio.textContent = "¿Seguro? 👀";

    } else if (intentosSi === 2) {

        mensajeInicio.textContent = "¿Tan rápido quieres tu regalo? 😼";

    } else if (intentosSi === 3) {

        mensajeInicio.textContent = "Espera... todavía no. 👀";

    } else if (intentosSi === 4) {

        mensajeInicio.textContent = "Última oportunidad para arrepentirte...";

    } else if (intentosSi === 5) {

        mensajeInicio.textContent = "Bueno... está bien. ❤️";

        btnSi.classList.add("oculto");
        btnNo.classList.add("oculto");

        btnRecoger.classList.remove("oculto");
    }

});

// =========================================
// BOTÓN NO
// =========================================

btnNo.addEventListener("click", function () {

    intentosNo++;

    if (intentosNo === 1) {

        gatitoInicio.textContent = "🥺";
        mensajeInicio.textContent = "¿Seguro que no quieres recibirlo?";

    } else if (intentosNo === 2) {

        gatitoInicio.textContent = "😾";
        mensajeInicio.textContent = "¿Segurísimo??";

    } else if (intentosNo === 3) {

        gatitoInicio.textContent = "😛";
        mensajeInicio.textContent = "Igual lo vas a ver ;p";

        btnSi.classList.add("oculto");
        btnNo.classList.add("oculto");

        btnContinuar.classList.remove("oculto");
    }

});

// =========================================
// PASAR A LOS RECUERDOS
// =========================================

btnRecoger.addEventListener("click", function () {

    mostrarPantalla("recuerdos-screen");

});


btnContinuar.addEventListener("click", function () {

    mostrarPantalla("recuerdos-screen");

});

// =========================================
// NAVEGACIÓN DE RECUERDOS
// =========================================

const btnSiguienteRecuerdo =
    document.getElementById("btnSiguienteRecuerdo");

const btnCompletarRecuerdos =
    document.getElementById("btnCompletarRecuerdos");

const timeline =
    document.getElementById("timeline");


btnSiguienteRecuerdo.addEventListener("click", function () {

    timeline.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});

btnCompletarRecuerdos.addEventListener("click", function () {

    irAGears();

});

function irAGears() {
    const transicion = document.getElementById("gears-transition");

    transicion.classList.add("active");

    setTimeout(() => {
        mostrarPantalla("gears-screen");

        setTimeout(() => {
            transicion.classList.remove("active");
        }, 100);

    }, 1000);
}

// =========================================
// MISIÓN GEARS
// =========================================

let preguntaActual = 0;
let objetivosCompletados = 0;

const preguntasGears = [

    {
        pregunta: "¿Cómo se llama el protagonista principal de Gears of War?",

        respuestas: [
            "Marcus Fenix",
            "Dominic Santiago",
            "Damon Baird"
        ],

        correcta: 0
    },

    {
        pregunta: "¿Cómo se llama la especie enemiga que emerge del subsuelo?",

        respuestas: [
            "Locust",
            "Covenant",
            "Helghast"
        ],

        correcta: 0
    },

    {
        pregunta: "¿Qué arma es característica de los Gears?",

        respuestas: [
            "Lancer",
            "Needler",
            "BFG 9000"
        ],

        correcta: 0
    }

];

function cargarPreguntaGears() {

    const pregunta = preguntasGears[preguntaActual];

    document.getElementById("pregunta-gears").textContent =
        pregunta.pregunta;

    document.getElementById("respuesta-1").textContent =
        pregunta.respuestas[0];

    document.getElementById("respuesta-2").textContent =
        pregunta.respuestas[1];

    document.getElementById("respuesta-3").textContent =
        pregunta.respuestas[2];

    document.querySelector(".question-number").textContent =
        "OBJECTIVE 0" + (preguntaActual + 1);
}

function responderGears(opcionSeleccionada) {

    const pregunta = preguntasGears[preguntaActual];

    const mensaje = document.getElementById("mensaje-gears");

    if (opcionSeleccionada === pregunta.correcta) {

        objetivosCompletados++;

        document.getElementById("objetivos-completados").textContent =
            objetivosCompletados;

        document.getElementById(
            "objetivo-" + objetivosCompletados
        ).classList.add("completado");

        mensaje.textContent = "OBJECTIVE COMPLETE ✓";

        setTimeout(() => {

            preguntaActual++;

            if (preguntaActual < preguntasGears.length) {

                mensaje.textContent = "";

                cargarPreguntaGears();

            } else {

                completarMisionGears();

            }

        }, 900);

    } else {

        mensaje.textContent = "INCORRECT // TRY AGAIN";

    }
}

document.getElementById("respuesta-1").addEventListener(
    "click",
    function () {
        responderGears(0);
    }
);


document.getElementById("respuesta-2").addEventListener(
    "click",
    function () {
        responderGears(1);
    }
);


document.getElementById("respuesta-3").addEventListener(
    "click",
    function () {
        responderGears(2);
    }
);

function completarMisionGears() {

    document.querySelector(".gears-question-card").classList.add("oculto");

    document.getElementById("recompensa-gears")
        .classList.remove("oculto");

}

if (document.getElementById("gears-screen")) {
    cargarPreguntaGears();
}

// =========================================
// RECLAMAR REGALO
// =========================================

const btnReclamarRegalo =
    document.getElementById("btnReclamarRegalo");

const ventanaRegalo =
    document.getElementById("ventana-regalo");

const btnContinuarRegalo =
    document.getElementById("btnContinuarRegalo");


btnReclamarRegalo.addEventListener("click", function () {

    ventanaRegalo.classList.remove("oculto");

});

// =========================================
// PASAR DEL REGALO A LA CARTA
// =========================================

const ventanaRegaloActual =
    document.getElementById("ventana-regalo");

const cartaNotificacion =
    document.getElementById("carta-notificacion");


btnContinuarRegalo.addEventListener("click", function () {

    ventanaRegaloActual.classList.add("oculto");

    document.getElementById("gears-screen")
        .classList.remove("active");

    cartaNotificacion.style.display = "flex";

});

const btnLeerCarta =
    document.getElementById("btnLeerCarta");

const pantallaCarta =
    document.getElementById("pantalla-carta");

const btnVolverLeerCarta =
    document.getElementById("btnVolverLeerCarta");

const botonesFinalesCarta =
    document.querySelector(".botones-finales-carta");

const btnVerCodigosRegalo =
    document.getElementById("btnVerCodigosRegalo");

let temporizadorCarta = null;
let escrituraCartaID = 0;

btnLeerCarta.addEventListener("click", function () {

    console.log("1. SE HIZO CLIC EN LEER");

    console.log("2. pantallaCarta:", pantallaCarta);

    pantallaCarta.classList.remove("oculto");

    pantallaCarta.style.display = "flex";

    console.log("3. Se mostró la pantalla de la carta");

    iniciarEscrituraCarta();

});

btnVerCodigosRegalo.addEventListener("click", function () {

    // Ocultar la carta
    pantallaCarta.classList.add("oculto");
    pantallaCarta.style.display = "none";

    // Ocultar la notificación de la carta
    cartaNotificacion.style.display = "none";

    // Mostrar directamente la recompensa
    ventanaRegaloActual.classList.remove("oculto");
    ventanaRegaloActual.style.display = "flex";

});

/*btnVerCodigosRegalo.addEventListener("click", function () {

    pantallaCarta.classList.add("oculto");
    pantallaCarta.style.display = "none";

    document.getElementById("regalo-screen")
        .classList.add("active");

});*/

function iniciarEscrituraCarta() {

    // ==========================================
    // CANCELAR CUALQUIER ESCRITURA ANTERIOR
    // ==========================================

    if (temporizadorCarta !== null) {
        clearTimeout(temporizadorCarta);
    }

    // Creamos un identificador para esta escritura.
    // Si se inicia otra, la anterior queda invalidada.
    escrituraCartaID++;

    const miEscrituraID = escrituraCartaID;


    // ==========================================
    // PREPARAR LA CARTA
    // ==========================================

    const textoCarta =
        document.getElementById("texto-carta");

    textoCarta.textContent = "";


    // Ocultamos el botón mientras se escribe
    if (botonesFinalesCarta) {
        botonesFinalesCarta.style.display = "none";
    }


    // Volvemos al principio de la carta
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    const momentosCarta = [

        // ==========================================
        // MOMENTO 1 — INTRODUCCIÓN
        // ==========================================

        `Holi mi amor :> <3

Espero que te haya gustado la sorpresita de Gears que te di, se te escuchaba emocionado la vez que te dije que me contaras más sobre su lore.

Espero también que recibas a tiempo esta cartita…

--- En realidad, te iba a enviar una carta de verdad jeje, pero por ciertas cositas ya no pude, así que se me ocurrió hacerte esto, que me hubiera gustado enviarte algo, pero pues bueeeeh, sigamooooos---

…y que sepas que quiero decirte todas las cosas que tal vez no me salen tan bien cuando hablo contigo en persona, aunque me hace falta decírtelo de cara a cara.

¿Recuerdas el día que encontraste una carta muuuuuuy vieja y fea al fondo de mi mochila?, morí de vergüenza ese día :D, no por lo que dijera la carta (o tal vez si un poco), sino porque de verdad estaba muy maltratada.

Desde ese momento, e incluso antes, quería darte algo así. Perdona si a mi letra no se le entiende mucho, aunque todo lo que digo es sincero (sigue siendo sincero, aunque no sea a papel y lápiz).

Hoy es tu compleañooooos, 22 añitos ya eh?, me recuerda a ese sabio refrán: “entre más arrugada la pasa, más dulce la fruta”, aayyyy! <3

Te conocí con 20 añitos, ni parece que haya pasado tanto tiempo. En esos momentos casi ni te hablaba (tú menos a mí ;p), pero hooooy, GRACIAS A DIOS, te digo Mi Amor <3

Tuve mucho miedo de no experimentarlo, y hoy por hoy lo disfruto demasiado. Y aunque no empecé a hablar contigo desde el minuto 1 que te vi, me alegra muchísimo haberlo hecho después.

Peeero bueeeeno, creo que tenías bastante curiosidad por saber qué decía esa cartita (si es que te acuerdas ;^), así que, te la transcribo aquí, en una nueva hoja (la que te iba a enviar TT). No le puse fecha, que maaaaaaal.`,


        // ==========================================
        // MOMENTO 2 — LA CARTA ANTIGUA
        // ==========================================

        `“Para Kilian de Vainilla”`,


        // ==========================================
        // MOMENTO 3 — CARTA ANTIGUA
        // ==========================================

        `No es como me lo imaginaba

Durante mucho tiempo pensé que el cariño y aprecio hacia alguien extraño no podía llegar a ser genuino. Siempre pensaba en el final.

“Las relaciones no duran”, me lo repetía una y otra vez, y aun así lo intenté una que otra vez, pero nunca di mi cien por ciento, porque siempre pensaba en el final.

En algún punto me convencía de que la otra persona ya se había aburrido de mí, o que podría conocer a alguien mejor que yo. A algunas les atiné, en otras, no me quedé mucho tiempo para comprobarlo.

Pensé que el que me gustara alguien iba a ser siempre platónico, siempre mirar de lejos, imaginarme mil y un cosas que podían pasar si fuera alguien diferente a quien soy, alguien adecuada.

Cuando caí en cuenta de que me gustabas, estos miedos se mostraron de nuevo, pero tú mismo me diste una razón para irlos derrumbando uno a uno: el tiempo.

La mayoría de veces me guardo mucho de lo que en realidad pienso, y eso era exactamente lo que no quería que pasara con lo que sentía y siento por ti.

Pensaba que el declararse a alguien te liberaba de algún tipo de carga. En mi experiencia, puede que una pequeña parte de eso sea cierta, pero la otra gran parte es que es muy difícil no pensar en esta persona después de ponértele de frente y decirle lo que sientes, aunque sea con los ojos cerrados.

Pensé que después de eso, iba a poder olvidarte, olvidar el sentimiento ligero de quererte cerca, de querer conocerte más, de verte y escucharte.

Fue absolutamente lo contrario.

No es para nada como me lo imaginaba

Te pensé mil y un noches, aunque solo hayan pasado como dos meses después de esa declaración, entonces, te volví a ver.

¿Sabías que tienes una risa y sonrisa que contagia alegría?

El tiempo que no estás presente físicamente, es cuando me cobra sentido esa frase: “Envidia de la gente que te puede mirar, y de los que te pueden escuchar”. Que envidia.

Nada ha sido como me lo imaginaba. Incluso tú. Y me gusta.

Me sacaste de mi zona de confort, descubrí una parte de mí un poquito más valiente y audaz, que, como prueba demo, solo tú has podido probar.

Tengo muchas ganas de verte, aunque no creo que tú tengas muchas ganas de verme a mí (el nivel de pesimismo estaba cabroncito), igual, solo ruego poder disfrutar de tu presencia una vez más. Tu voz, tu risa, tu actuar, tu pensar, tu silencio.

Este sentimiento no es como me lo imaginaba.`,


        // ==========================================
        // MOMENTO 4 — PRESENTE
        // ==========================================

        `Conocer a alguien que de verdad te guste, no pensé que fuera tan intenso.

No sé exactamente qué pienses de mí, pero espero que sepas que puedo y siempre quiero escucharte. Tus quejas, tus anécdotas, gustos, los recuerdos vagos que tengas, cualquier cosa, lo que se nos ocurra. Incluso me encantaría solo estar en silencio contigo.

Eres un objetivo difícil, pero la verdad es que no me molesta insistir un poco más. Solo un poco.

Si fueras un Kilian de Chocolate, creo que te acabaría muy pronto verdaderamente, y no es que me guste más la vainilla, es solo que, tú y ella son sutiles, pero presentes. No dan sabor demás, pero tampoco son insípidos. Y no es que sea un punto medio, son el punto correcto, en la medida correcta. Y eso, sacia más que un chocolate efímero.”

¿Qué tal eh? Y eso que en ese momento no me imaginaba que caerías ;p

Kilian, gracias por existir, gracias por dejarme estar contigo este tiempo, por dejarme ver un poquito de ti.

Quiero seguirte conociendo, y quiero, siempre siempre, estar muy juntito de ti.

Aunque no entiendas porqué lo quiero así, solo espero que comprendas con el tiempo que no quise, ni quiero a nadie que no seas tú.

Te amo.`,


        // ==========================================
        // MOMENTO 5 — CIERRE
        // ==========================================

        `Espero poder celebrar muchos más cumpleaños junto a ti, verte feliz, estar para ti para cualquier cosa, y hacerte feliz, tanto como tú me haces feliz a mí.

¡Feliz Cumpleaños Mi Amor!

Te ama, Mariana<3`

    ];


    // ==========================================
    // COMENZAR
    // ==========================================

    escribirMomento(0);


    function escribirMomento(indice) {

        // Si ya comenzó otra escritura,
        // esta escritura deja de hacer cualquier cosa.
        if (miEscrituraID !== escrituraCartaID) {
            return;
        }


        // ==========================================
        // TERMINÓ TODA LA CARTA
        // ==========================================

        if (indice >= momentosCarta.length) {

            if (botonesFinalesCarta) {
                botonesFinalesCarta.style.display = "flex";
            }

            return;
        }


        const texto =
            momentosCarta[indice];

        let posicion = 0;


        function escribir() {

            // ==========================================
            // CANCELAR ESCRITURA ANTERIOR
            // ==========================================

            if (miEscrituraID !== escrituraCartaID) {
                return;
            }


            // ==========================================
            // ESCRIBIR CARÁCTER
            // ==========================================

            if (posicion < texto.length) {

                textoCarta.textContent +=
                    texto.charAt(posicion);

                posicion++;


                temporizadorCarta =
                    setTimeout(escribir, 60);

            } else {


                // ==========================================
                // PAUSA ENTRE MOMENTOS
                // ==========================================

                temporizadorCarta =
                    setTimeout(function () {

                        // Verificamos nuevamente que
                        // esta siga siendo la escritura actual.

                        if (miEscrituraID !== escrituraCartaID) {
                            return;
                        }

                        escribirMomento(indice + 1);

                    }, 2500);

            }

        }


        escribir();

    }

}

btnVolverLeerCarta.addEventListener("click", function () {

        iniciarEscrituraCarta();

    });

btnVerCodigosRegalo.addEventListener("click", function () {

    pantallaCarta.classList.add("oculto");
    pantallaCarta.style.display = "none";

    document.getElementById("regalo-screen")
        .classList.add("active");

});
