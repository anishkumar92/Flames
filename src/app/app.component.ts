import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlamesService } from './flames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  audio: any;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  title = 'flames-app';
  result = '';
  name1: string = '';
  name2: string = '';
  showCelebration = false;
  stickerUrl = 'url(./assets/Love.png)';
  soundUrl = './assets/happy.mp3';
  stickers: any[] = [];
  buttonHover = false;
  constructor(private flamesService: FlamesService) {}

  async calculate() {
    const result = this.flamesService.calculateFlames(this.name1, this.name2);
    console.log('result', result);
    this.result = result;
    this.createStickers(20, result);
    this.showCelebration = true;
    setTimeout(() => (this.showCelebration = false), 5000); // Hide after 5 seconds

    this.soundUrl = `./assets/${
      result === 'Love' || result === 'Marriage' ? 'happy' : 'sad'
    }.mp3`;
    // Create a new Audio object and play it
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(this.soundUrl);
    try {
      await this.audio.play();
    } catch (error) {
      console.log('Play was interrupted:', error);
    }
  }

  createStickers(count: number, result: string) {
    this.stickers = Array.from({ length: count }, (_, i) => ({
      id: i,
      url: `url(./assets/${result}.png)`,
      left: Math.random() * 100 + 'vw',

      animationDuration: Math.random() * 5 + 3 + 's',
    }));
  }
}
