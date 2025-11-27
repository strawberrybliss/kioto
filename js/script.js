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

// gráfico de barras

function cargaGraficoBarras() {
    // Datos para generar el gráfico, hay que definir las etiquetas y
    // los datasets. Hay que definir un color para cada dataset
    var datos = {
        labels: ["Kinkaku-ji", "Fushimi Inari-taisha", "Ginkaku-ji", "Kiyomizu-dera"],
        datasets: [{
            label: "Templo más visitado anualmente",
            backgroundColor: "#f2a6abff",
            data: [44.1, 21.4, 16.7, 6.2]
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
                    max: 50,
                    title: {
                        display: true,
                        text: "Porcentaje de visitantes en 2025 (%)"
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

// carrusel imagenes