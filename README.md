# videogular-schematics


### Instalation

<pre>
git clone 
npm i
</pre>

### Use

<pre>
npm run build
schematics .:videogular-schematics

cd <your-angular-proyect>
mkdir node_modules/vgs
</pre>
copy all file (except node_modules & package-lock.json) into your angular cli project >= 1.5  ( folder node_modules/vgs)

<pre>
ng g videogular-schematics vgc --vgService --collection vgs
</pre>


### Options

Command           | Type              | Default                      | Description |
------------------|-------------------|----------------------|-------------------| 
vgService | Boolean | false | add service
vgOverlayPlay | Boolean | false | add [vg-overlay-play](http://videogular.github.io/videogular2/docs/modules/core/vg-player)
vgBuffering | Boolean | false | add [vg-buffering](http://videogular.github.io/videogular2/docs/modules/buffering/vg-buffering/)
vgScrubBar | Boolean | false | add [vg-scrub-bar](http://videogular.github.io/videogular2/docs/modules/controls/vg-scrub-bar/)
vgScrubBarCurrentTime | Boolean | false | add [vg-scrub-bar-current-time](http://videogular.github.io/videogular2/docs/modules/controls/vg-scrub-bar/vg-scrub-bar-current-time/)
vgScrubBarBufferingTime | Boolean | false | add [vg-scrub-bar-buffering-time](http://videogular.github.io/videogular2/docs/modules/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/)
vgControls | Boolean | false | add [vg-controls](http://videogular.github.io/videogular2/docs/modules/controls/vg-controls/)
vgPlayPause | Boolean | false | add [vg-play-pause](http://videogular.github.io/videogular2/docs/modules/controls/vg-play-pause/)
vgPlaybackButton | Boolean | false | add [vg-playback-button](http://videogular.github.io/videogular2/docs/modules/controls/vg-playback/)
vgTimeDisplayCurrent | Boolean | false | add [vg-time-display](http://videogular.github.io/videogular2/docs/modules/controls/vg-time-display/) vgProperty: current, vgFormat mm:ss
vgScrubBarControls | Boolean | false | add [vg-scrub-bar](http://videogular.github.io/videogular2/docs/modules/controls/vg-scrub-bar/)
vgTimeDisplayLeft | Boolean | false | add [vg-time-display](http://videogular.github.io/videogular2/docs/modules/controls/vg-time-display/) vgProperty: left, vgFormat mm:ss
vgTimeDisplayTotal | Boolean | false | add [vg-time-display](http://videogular.github.io/videogular2/docs/modules/controls/vg-time-display/) vgProperty: total,vgFormat mm:ss
vgTrackSelector | Boolean | false | add [vg-track-selector](http://videogular.github.io/videogular2/docs/modules/controls/vg-track-selector/)
vgMute | Boolean | false | add [vg-mute](http://videogular.github.io/videogular2/docs/modules/controls/vg-mute/)
vgVolume | Boolean | false | add [vg-volume](http://videogular.github.io/videogular2/docs/modules/controls/vg-volume/)
vgFullscreen | Boolean | false | add [vg-fullscreen](http://videogular.github.io/videogular2/docs/modules/controls/vg-fullscreen/)
video | Boolean | true | add [video](http://videogular.github.io/videogular2/docs/getting-started/how-videogular-works.html)
skip | Boolean | false | add [skip](http://videogular.github.io/videogular2/docs/)
companionAd | Boolean | false | add [companionAd](http://videogular.github.io/videogular2/docs/)
