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

document.querySelector('.button').addEventListener('click', function() {
    window.location.href = './flores.html';
  });


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

// nieve //

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const pixelRatio = window.devicePixelRatio || 1;

const snowflakes = [];

class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    const maxSize = 3;
    this.size = Math.random() * (maxSize - 1) + 1;
    this.velocity = this.size * 0.35;
    const opacity = this.size / maxSize;
    this.fill = `rgb(255 255 255 / ${opacity})`;
    
    this.windSpeed = (Math.random() - 0.5) * 0.1;
    this.windAngle = Math.random() * Math.PI * 2;
  }
  isOutsideCanvas() {
    return this.y > canvas.height + this.size;
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = -this.size;
  }
  update() {
    this.windAngle += this.windSpeed;
    this.wind = Math.cos(this.windAngle) * 0.5;

    this.x += this.wind;
    this.y += this.velocity;

    if (this.isOutsideCanvas()) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.closePath();
  }
}

const createSnowflakes = () => {
  // Calcular la cantidad de copos de nieve basada en el tamaño de la pantalla
  let calculatedCount = Math.floor(window.innerWidth * window.innerHeight / 700);

  // Establecer un mínimo de copos de nieve para dispositivos pequeños
  const minSnowflakes = 1500; // Puedes ajustar este número según tus necesidades

  // Usar el mayor valor entre el calculado y el mínimo
  snowflakeCount = Math.max(calculatedCount, minSnowflakes);
  
  for (let i = 0; i < snowflakeCount; i++) {  
    snowflakes.push(new Snowflake());
  }
}

const resizeCanvas = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(pixelRatio, pixelRatio);
  snowflakes.length = 0;
  createSnowflakes();
};

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

const render = () => {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(snowflake => {
    snowflake.update();
    snowflake.draw();
  });
};

render();