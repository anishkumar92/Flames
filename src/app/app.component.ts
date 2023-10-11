import { Component } from '@angular/core';
import { FlamesService } from './flames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flames-app';
  result = '';
  name1: string = '';
  name2: string = '';
  constructor(private flamesService: FlamesService) {}

  calculate() {
    const result = this.flamesService.calculateFlames(this.name1, this.name2);
    console.log('result', result);
    this.result = result;
  }
}
