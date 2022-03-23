import { AfterViewInit, Component } from '@angular/core';
import { Ijoke } from 'src/app/interfaces/ijoke';
import { DadJoke } from 'src/app/model/dad-joke';
import { ChuckJokeService } from 'src/app/services/chuck-joke.service';
import { DadJokeService } from 'src/app/services/dad-joke.service';

@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.scss']
})
export class JokeContainerComponent implements AfterViewInit {

  joke!: Ijoke;
  blobType: number;


  constructor(
    private _dadJokeService: DadJokeService,
    private _chuckJokeService: ChuckJokeService) {
    this.joke = new DadJoke();
    this.blobType = 1;
     }

  ngAfterViewInit(): void {
    this.getJoke();
  }


  getJoke() {
if (this.blobType >= 4) { this.blobType = 1 }
    else {
      this.blobType++;
};
    let random = Math.floor(Math.random() * 2 + 1);
    console.debug('random', random);
    if (random % 2 === 0) {
      this._dadJokeService.getJoke()
        .subscribe(data => this.joke = data);
      console.debug('joke', this.joke);
    } else {
      this._chuckJokeService.getJoke()
        .subscribe(data => this.joke = data);
      console.debug('joke', this.joke);
    }
  }

}
