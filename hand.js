// JavaScript to manage music
const playMusicButton = document.getElementById('play-music');
const backgroundMusic = document.getElementById('background-music');

// Event listener to toggle music on button click
playMusicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playMusicButton.textContent = "Stop Music"; // Button text while music plays
  } else {
    backgroundMusic.pause();
    playMusicButton.textContent = "Play Music"; // Change text when music pauses
  }
});
