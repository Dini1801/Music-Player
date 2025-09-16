const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
const titles = ["Song 1", "Song 2", "Song 3"];

let songIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const progress = document.getElementById("progress");

function loadSong(index) {
  audio.src = songs[index];
  title.textContent = titles[index];
}
loadSong(songIndex);

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
