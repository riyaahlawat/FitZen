// Load the YouTube IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// Create YouTube player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'sG6CX3XbFGo', // Replace with your video ID
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,
            'loop': 1,
            'playlist': 'sG6CX3XbFGo', // Loop the same video
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Ensure video plays at the highest quality available
function onPlayerReady(event) {
    var playbackQuality = 'hd1080'; // Set quality to 1080p
    event.target.setPlaybackQuality(playbackQuality);
    event.target.playVideo();  // Ensure video starts playing
}
