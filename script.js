window.addEventListener('load', () => {
    document.body.classList.remove("container");
});

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
