import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlamesService } from './flames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  title = 'flames-app';
  result = '';
  name1: string = '';
  name2: string = '';
  showCelebration = false;
  constructor(private flamesService: FlamesService) {}

  calculate() {
    const result = this.flamesService.calculateFlames(this.name1, this.name2);
    console.log('result', result);
    this.result = result;
    this.showCelebration = true;
    setTimeout(() => (this.showCelebration = false), 5000); // Hide after 5 seconds

    this.audioPlayer.nativeElement.play(); // Play audio

    setTimeout(() => {
      this.showCelebration = false;
      this.audioPlayer.nativeElement.pause(); // Stop audio after 5 seconds
      this.audioPlayer.nativeElement.currentTime = 0;
    }, 5000);
  }
}
