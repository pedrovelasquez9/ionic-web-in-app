import { App } from '@capacitor/app';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private appBrowser: InAppBrowser) {}
  private browserSub: Subscription;

  ngOnInit() {
    const browser = this.appBrowser.create(
      'https://cafeceros.com/',
      '_self',
      'location=no,hidenavigationbuttons=true,hideurlbar=true,zoom=no'
    );
    this.browserSub = browser.on('exit').subscribe((evt) => {
      App.exitApp();
    });
  }

  ngOnDestroy() {
    this.browserSub.unsubscribe();
  }
}
