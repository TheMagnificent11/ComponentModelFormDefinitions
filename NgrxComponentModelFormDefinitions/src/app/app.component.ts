import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

    title = 'ngx-componentformdefinitions-sample';
    menuOpen: boolean;
    watcher: Subscription;

    constructor(media: ObservableMedia) {
        this.watcher = media.subscribe((change: MediaChange) => {
            if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
                this.menuOpen = false;
            } else {
                this.menuOpen = true;
            }
        });
    }

    ngOnDestroy() {
        this.watcher.unsubscribe();
    }


}
