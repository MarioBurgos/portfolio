import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  showRank = false;
  btnText = 'top jokes';

  constructor() { }

  ngOnInit(): void {
  }

  toggleRank() {
    this.showRank = !this.showRank;
    this.showRank ? this.btnText = 'Back to jokes' : this.btnText ='top jokes';
  }

}
