const playPauseBtn = document.getElementById('play-pause');
const audio = new Audio(); // Aqui você colocaria o link do arquivo .mp3
let isPlaying = false;

// Configurações iniciais (Exemplo)
const song = {
    name: "Sua Música Favorita",
    artist: "Seu Artista",
    src: "link_da_musica.mp3",
    cover: "https://via.placeholder.com/250/1db954/white"
};

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = "▶";
    } else {
        // audio.src = song.src; // Descomente quando tiver o arquivo
        audio.play().catch(() => console.log("Adicione um arquivo .mp3 válido"));
        playPauseBtn.innerText = "⏸";
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', togglePlay);