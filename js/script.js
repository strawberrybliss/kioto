// ventana modal

function openModal() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("email").value;
  var mensaje = document.getElementById("comment").value;

  console.log("Nombre:", nombre);
  console.log("Correo:", correo);
  console.log("Mensaje", mensaje);

  document.getElementById("n").innerHTML = nombre
  document.getElementById("c").innerHTML = correo
  document.getElementById("m").innerHTML = mensaje

  document.getElementById("modal").style.display = "flex";

  return false;
}

// cerrar ventana modal

function closeModal() {
  document.getElementById("modal").style.display = "none";

  return false;
}


// menu responsive

function openMenu() {
  console.log("Función openMenu");
  document.getElementById("menu-responsive").classList.add("activo");
  document.getElementById("abrir").style.display = "none";
}

function closeMenu() {
  console.log("Función closeMenu");
  document.getElementById("menu-responsive").classList.remove("activo");
  document.getElementById("abrir").style.display = "block";
}


// gráfico de barras

function cargaGraficoBarras() {
    // Datos para generar el gráfico, hay que definir las etiquetas y
    // los datasets. Hay que definir un color para cada dataset
    var datos = {
        labels: ["KIYOMIZU-DERA", "GINKAKU-JI", "KINKAKU-JI", "FUSHIMI INARI-TAISHA"],
        datasets: [{
            label: "Templo más visitado en 2025",
            backgroundColor: "rgb(190, 106, 127)",
            data: [5.0, 3.0, 6.0, 4.5]
        }],
    };

    // Configuración del gráfico. Debe incluir imprescindiblemente el
    // tipo de gráfico y los datos que hemos definido previamente.
    // Se pueden añadir opciones para personalizar el gráfico
    var config = {
        type: "bar",
        data: datos,
        options: {
            scales: {
                x: {
                    border: {
                        color: "black",
                        width: 2
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    title: {
                        display: true,
                        text: "Número de visitantes (millones)"
                    },
                    border: {
                        color: "black",
                        width: 2
                    }
                }
            }
        }
    };

    // Para crear el gráfico, se busca el elemento canvas por su id
    // y se le pasa la configuración en JSON que hemos definido
    var grafico = $("#barras")[0].getContext("2d");
    new Chart(grafico, config);
}

$(document).ready(function () {
    cargaGraficoBarras();
});

// carrusel

$(document).ready(function () {
    $('.carrusel').each(function () {
        var $carrusel = $(this);
        var $diapos = $carrusel.find('.diapos');
        var $imagenes = $diapos.children();
        var total = $imagenes.length;
        var ancho = 100; // cada imagen ocupa 100% del contenedor

        // Duplicar las imágenes para transición continua
        $diapos.append($imagenes.clone());
        var index = 0;

        function siguiente() {
            index++;
            $diapos.css('transition', 'transform 0.5s ease');
            $diapos.css('transform', 'translateX(-' + (index * ancho) + '%)');

            // Cuando llega al final del original, reinicia rápido
            if (index === total) {
                setTimeout(function () {
                    $diapos.css('transition', 'none'); // quitar transición
                    $diapos.css('transform', 'translateX(0)');
                    index = 0;
                }, 500); // mismo tiempo que la transición
            }
        }

        // Cambio automático cada 3 segundos
        var intervalo = setInterval(siguiente, 3000);

        // Detener al pasar el mouse
        $carrusel.hover(
            function () { clearInterval(intervalo); },
            function () { intervalo = setInterval(siguiente, 3000); }
        );
    });
});