import { Component, OnInit } from '@angular/core';
import { Ijoke } from 'src/app/interfaces/ijoke';
import { RankingJokesService } from 'src/app/services/ranking-jokes.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  ranking: Array<Ijoke>;

  constructor(private rankingService: RankingJokesService) {
    this.ranking = new Array<Ijoke>();
   }



  ngOnInit(): void {
    this.ranking = this.rankingService.getRanking();
    console.warn('ranking component', this.ranking)
    this.isEmpty();
  }

  isEmpty() {
    let empty;
    empty = this.ranking.filter(item => item.rank > 0);
    if (empty.length > 0) return true;
    else return false;
  }

}
