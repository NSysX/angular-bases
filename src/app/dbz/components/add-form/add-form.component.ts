import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  @Output() onNewCharacterAntena : EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name : "",
    sueldo: 0
  };

  emitCharacter() : void {
    console.log(this.character);
    if(this.character.name === '') return;

    this.onNewCharacterAntena.emit({...this.character});

    this.character.name = "";
    this.character.sueldo = 0;
    // this.cleanForm();
  }

  // private cleanForm() : void {
  //   this.character = {name : '', power : 0}
  // }

}
