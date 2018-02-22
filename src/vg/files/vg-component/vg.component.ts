import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { VgService } from './vg.service';


@Component({
    selector: 'vg-component',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    providers: [VgService]
})

export class VgComponent implements OnChanges {

    @Input() sources: Array<Object>;

    constructor() {
        this.sources = [{
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
            }
        ];
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.sources = changes['sources'].currentValue;
    }
}