document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const stopButton = document.getElementById("stop-button");
    const playlistLinks = document.querySelectorAll("#playlist a");

    let currentSong = null;

    // Function to play a song
    function playSong(songSrc) {
        if (currentSong === songSrc && !audio.paused) {
            audio.pause();
        } else {
            audio.src = songSrc;
            audio.play();
            currentSong = songSrc;
        }
    }

    // Automatically play the first song when page loads
    const firstSongSrc = playlistLinks[0].getAttribute("data-src");
    playSong(firstSongSrc);

    // Play button click event
    playButton.addEventListener("click", function () {
        audio.play();
    });

    // Pause button click event
    pauseButton.addEventListener("click", function () {
        audio.pause();
    });

    // Stop button click event
    stopButton.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
    });

    // Event listeners for playlist links
    playlistLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const songSrc = this.getAttribute("data-src");
            playSong(songSrc);
        });
    });
});
