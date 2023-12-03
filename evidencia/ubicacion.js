document.addEventListener("DOMContentLoaded", function() {
    var geolocationInfo = document.getElementById("geolocation-info");
    var locationMessage = document.getElementById("location-message");
    var obtenerUbicacionButton = document.getElementById("obtener-ubicacion");
    var ubicacionEspecial = document.querySelector(".ubicacion-especial");
  
    obtenerUbicacionButton.addEventListener("click", function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationMessage.innerHTML = "Tu ubicación: Latitud " + latitude + ", Longitud " + longitude;
  
            // Lógica para determinar si la ubicación es "especial"
            var esUbicacionEspecial = determinarUbicacionEspecial(latitude, longitude);
  
            // Agrega o quita la clase según la ubicación
            if (esUbicacionEspecial) {
              ubicacionEspecial.classList.add("ubicacion-especial-estilo");
            } else {
              ubicacionEspecial.classList.remove("ubicacion-especial-estilo");
            }
          },
          function(error) {
            console.error("Error al obtener la ubicación:", error.message);
            locationMessage.innerHTML = "No se pudo obtener la ubicación.";
          }
        );
      } else {
        locationMessage.innerHTML = "La geolocalización no es compatible en este navegador.";
      }
    });
  
    // Función para determinar si la ubicación es "especial"
    function determinarUbicacionEspecial(latitude, longitude) {
      // Aquí puedes implementar la lógica para determinar si la ubicación es especial
      // Por ejemplo, podrías comparar la latitud y longitud con valores predefinidos
      // y devolver true si coincide con una ubicación especial, o false en caso contrario.
      // En este ejemplo, se considerará "especial" si la latitud es mayor que 40 y la longitud es menor que -75.
      return latitude > 40 && longitude < -75;
    }
  });
  
  