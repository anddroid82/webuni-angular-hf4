import { Component } from '@angular/core';
import { ressults } from 'src/results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webuni-angular-hf4';
  results = ressults;
  currentIndex:number = -1;

  rowWasClicked(index: number) {
      this.currentIndex = index;
  }

  podiumClosed(){
    this.currentIndex = -1;
  }
}
