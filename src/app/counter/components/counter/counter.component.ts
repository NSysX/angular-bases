import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>Mensaje desde counter component con html en una linea</h2>
  <h3>Counter : {{ counter }}</h3>
   <button (click)="modifyCounter(1)">+1</button>
   <button (click)="modifyCounter(-1)">-1</button>
   <button (click)="modifyCounter(0)">Reset</button>
  `
})
export class CounterComponent {
  constructor() { }

  public counter : number = 10;

  public modifyCounter(value : number) : void {
    do {

      if(value == 0){
        this.counter = 10;
        break;
      }

      this.counter += value;

      break;
    } while (true);
  }
}
