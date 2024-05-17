import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() characterList: Character[] = [];

  @Output()
  public onDeleteListByIdAntena : EventEmitter<string> = new EventEmitter();

  onDeleteCharacterByIdSelector(id? : string) : void {
    console.log(id);
    if( !id ) return;

    this.onDeleteListByIdAntena.emit(id);
  }
}
