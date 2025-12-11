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
            responsive: true,
            maintainAspectRatio: false,
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

function inicioCarrusel() {
    $(".carrusel").each(function () {
        var carrusel = $(this);
        var images = carrusel.find(".diapos img");
        var current = 0;
        var total = images.length;

        /**
         * Hace que se muestre la primera imagen de las 4.
         * @param index
         */

        function showImage(index) {
            images.hide();
            images.eq(index).show();
        }

        showImage(current);

        setInterval(function () {
            current = (current + 1) % total;
            showImage(current);
        }, 4000)
    });
}

$(document).ready(function () {
    inicioCarrusel()
});
