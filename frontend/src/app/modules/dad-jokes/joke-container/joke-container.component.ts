import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Ijoke } from 'src/app/interfaces/ijoke';
import { DadJoke } from 'src/app/model/dad-joke';
import { ChuckJokeService } from 'src/app/services/chuck-joke.service';
import { DadJokeService } from 'src/app/services/dad-joke.service';
import { RankingJokesService } from 'src/app/services/ranking-jokes.service';

@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.scss']
})
export class JokeContainerComponent implements AfterViewInit {

  joke!: Ijoke;
  btnDisabled = false;
  blobType: number;

  constructor(
    private _dadJokeService: DadJokeService,
    private _chuckJokeService: ChuckJokeService,
    private _rankingService: RankingJokesService) {
    this.joke = new DadJoke();
    this.blobType = 0;
    this.getJoke();
     }

  ngAfterViewInit(): void {
    this.getJoke();
    this.btnDisabled = false;
  }

  resetBlob() {
    let blob = <HTMLElement>document.getElementById('blob');
    blob.classList.remove('blob');
    blob.classList.add('blob')

  }

  getJoke() {
    //cambiar secuencialmente el blob de background-image
  if (this.blobType >= 4 || this.blobType === 0) { this.blobType = 1 }
      else {
        this.blobType++;
    };
    //pedir aleatoriamente (dad o chuck) un chiste al servicio oportuno
    let random = Math.floor(Math.random() * 2 + 1);
    if (random % 2 === 0) {
      this._dadJokeService.getJoke()
        .subscribe(data => this.joke = data);
    } else {
      this._chuckJokeService.getJoke()
        .subscribe(data => this.joke = data);
    }
    this.joke = this._rankingService.parametrizeJoke(this.joke);
    this._rankingService.seTJoke(this.joke);
    console.warn(this._rankingService.getJoke());
    this.btnDisabled = false;
  }

  rateJoke(points: number) {
    this._rankingService.rankJoke(points);
    console.log(this._rankingService.rankingJokes);
    this.btnDisabled = true;
  }

}
