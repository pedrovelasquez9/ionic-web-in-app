import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { App } from '@capacitor/app';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  providers: [InAppBrowser]
})
export class HomePage implements OnInit {
  constructor(private browser: InAppBrowser) { }

  ngOnInit(): void {
    const browserInstance = this.browser.create(
      'https://cafeceros.com/',
      '_self',
      'location=no,hidenavigationbuttons=true,hideurlbar=true,zoom=no'
    );
    browserInstance.on('exit').subscribe((evt) => {
      App.exitApp();
    });
  }

}
