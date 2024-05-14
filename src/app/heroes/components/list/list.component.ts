import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public lastDeletedHeroe? : string = "";

  public heroeNames : string[] = [
    "Spiderman",
    "Hulk",
    "Ironman"
  ];

  removeLastHero() : void {
    this.lastDeletedHeroe = this.heroeNames.pop();
    console.log(this.lastDeletedHeroe);
  }
}
