export class VgService {

public items: Array<any> = [
    { name: 'vg-overlay-play', value: true },
    { name: 'vg-buffering', value: true },
    { name: 'vg-scrub-bar', value: true },
    { name: 'vg-scrub-bar-current-time', value: true },
    { name: 'vg-scrub-bar-buffering-time', value: true },
    { name: 'vg-controls', value: true },
    { name: 'vg-play-pause', value: true },
    { name: 'vg-playback-button', value: true },
    { name: 'vg-time-display-current', value: true },
    { name: 'vg-scrub-bar-controls', value: true },
    { name: 'vg-time-display-left', value: true },
    { name: 'vg-time-display-total', value: true },
    { name: 'vg-track-selector', value: true },
    { name: 'vg-mute', value: true },
    { name: 'vg-volume', value: true },
    { name: 'vg-fullscreen', value: true },
    { name: 'video', value: true },
    { name: 'source', value: true, sources: [{
            src: "http://static.videogular.com/assets/videos/videogular.mp4",
            type: "video/mp4"
        },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }] },
    { name: 'skip', value: true },
    { name: 'companion-ad', value: true }
];

}