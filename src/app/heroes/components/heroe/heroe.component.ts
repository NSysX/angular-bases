import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name : string = "ironman";
  public age : number = 45

  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name } -> ${ this.age }`;
  }

  changeName(newName : string): void {
    this.name = newName;
  }

  changeAge(newAge : number) : void {
    this.age = newAge;
  }

  limpiaForm() : void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
