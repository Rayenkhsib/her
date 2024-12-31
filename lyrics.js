// Get references to the video and start button
const video = document.getElementById('backgroundVideo');
const startButton = document.getElementById('startButton');

// Start video when the button is clicked
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide the start button
    video.style.display = 'block';      // Show the video
    video.play();                       // Start playing the video with sound
});
