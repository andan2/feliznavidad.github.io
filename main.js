document.addEventListener('DOMContentLoaded', function() {
    const innerPolygon = document.getElementById("inner-polygon");
    const outer = document.getElementById("outer");
    const heartBtn = document.getElementById("heart-btn");
    const lightbox = document.getElementById("lightbox");
    const closeLightbox = document.getElementById("close-lightbox");

    function toggleLightbox() {
        lightbox.style.display = lightbox.style.display === "block" ? "none" : "block";
    }

    if (heartBtn) {
        heartBtn.addEventListener("click", toggleLightbox);
    } else {
        console.error("Heart button not found");
    }

    if (closeLightbox) {
        closeLightbox.addEventListener("click", toggleLightbox);
    } else {
        console.error("Close lightbox button not found");
    }

});

document.querySelector('.glow-on-hover').addEventListener('click', function() {
    window.location.href = './flores.html';
  });
  

function createSnowflake() {
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snowflake');
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duración de la caída
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random() * 4 + 4 + 'px'; // Tamaño más pequeño

    snowFlake.innerText = '❄'; // Carácter de copo de nieve
    document.body.appendChild(snowFlake);

    // Eliminar el copo de nieve después de que ha caído
    setTimeout(() => {
        snowFlake.remove();
    }, snowFlake.style.animationDuration.replace('s', '') * 1000);
}

setInterval(createSnowflake, 100); // Crear un nuevo copo de nieve cada 100 ms

document.getElementById('miEnlace').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('imagenCajaDeLuz').src = this.href;
    document.getElementById('miCajaDeLuz').style.display = 'block';
  });
  
  function cerrarCajaDeLuz() {
    document.getElementById('miCajaDeLuz').style.display = 'none';
  }

  window.onload = () => {
    // Obtén el interruptor y el elemento de audio
    const audioControl = document.getElementById('toggle-audio');
    const audio = document.getElementById('miAudio');

    // Asegúrate de que el audio no esté sonando al cargar la página
    audio.pause();
    audioControl.checked = false;

    // Añade un evento 'change' al interruptor
    audioControl.addEventListener('change', function() {
        // Verifica si el interruptor está activado
        if (this.checked) {
            audio.play(); // Reproduce el audio si el interruptor está activado
        } else {
            audio.pause(); // Pausa el audio si el interruptor está desactivado
        }
    });
};