import '@ionic/core';
import '@stencil/core';

import { Component } from '@stencil/core';

@Component({
  tag: 'page-tutorial',
  styleUrl: 'page-tutorial.css',
})
export class PageTutorial {
  startApp() {

  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-button onClick={this.startApp.bind(this)}>Skip</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content no-bounce>
        <ion-slides pager={false}>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-1.png" class="slide-image" />
            <h2 class="slide-title">
              Welcome to
              <b>ICA</b>
            </h2>
            <p>
              The
              <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code
              use.
            </p>
          </ion-slide>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-2.png" class="slide-image" />
            <h2 class="slide-title">What is Ionic?</h2>
            <p>
              <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies
              like HTML, CSS, and JavaScript.</p>
          </ion-slide>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-3.png" class="slide-image" />
            <h2 class="slide-title">What is Ionic Pro?</h2>
            <p>
              <b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new
              level of app development agility to mobile dev teams.</p>
          </ion-slide>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />
            <h2 class="slide-title">Ready to Play?</h2>
            <ion-button fill="clear" onClick={this.startApp.bind(this)}>
              Continue
              <ion-icon slot="end" name="arrow-forward"></ion-icon>
            </ion-button>
          </ion-slide>

        </ion-slides>
      </ion-content>
    ];
  }
}