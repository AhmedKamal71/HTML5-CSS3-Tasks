const video = document.getElementById('myVideo');
    const seekBar = document.getElementById('seekBar');
    const volumeBar = document.getElementById('volumeBar');
    const playPauseButton = document.getElementById('playPauseButton');
    const muteButton = document.getElementById('muteButton');
    const timerDisplay = document.getElementById('timer');

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    function toggleMute() {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    }

    function changeSpeed(speed) {
        video.playbackRate = speed;
    }

    function fastForward() {
        video.currentTime += 5; 
    }

    function rewind() {
        video.currentTime -= 5; 
    }

    function seekVideo() {
        const newPosition = seekBar.value * (video.duration / 100);
        video.currentTime = newPosition;
    }

    video.addEventListener('timeupdate', () => {
        seekBar.value = (video.currentTime / video.duration) * 100;
        updateTimerDisplay();
    });

    function changeVolume(action) {
        let currentVolume = video.volume;

        if (action === 'up') {
            currentVolume = Math.min(1, currentVolume + 0.1);
        } else if (action === 'down') {
            currentVolume = Math.max(0, currentVolume - 0.1);
        } else if (action === 'custom') {
            currentVolume = volumeBar.value / 100;
        }
        if (currentVolume > 0 && video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        }

        video.volume = currentVolume;
        volumeBar.value = currentVolume * 100;
    }

    function toggleFullScreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    }

    function updateTimerDisplay() {
        const currentTime = formatTime(video.currentTime);
        const duration = formatTime(video.duration);
        timerDisplay.textContent = `${currentTime} / ${duration}`;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        return formattedTime;
    }