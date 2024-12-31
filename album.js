// Handle the "Next Page" button
document.getElementById('nextPage').addEventListener('click', () => {
    window.location.href = 'letter.html'; 
});


// Handle the "Play Music" button
document.getElementById('playMusic').addEventListener('click', () => {
    var audio = document.getElementById('audio');
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
