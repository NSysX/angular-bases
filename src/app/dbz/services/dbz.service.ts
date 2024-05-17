import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters : Character[] = [
    { id : uuid(), name: "Victor Sanchez", sueldo: 1000},
    { id : uuid(), name: "Juan Sanchez", sueldo: 9500},
    { id : uuid(), name: "Antonio Ortiz", sueldo : 10}
  ];

  onNewCharacter(character : Character): void {
    const addIdToNewCharacter : Character = { id: uuid(), ...character }
    this.characters.push(addIdToNewCharacter);
  }

  // this.characters.splice(index,1);
  onDeleteCharacterById( id : string) : void {
    console.log(" === > ${id}");
    this.characters = this.characters.filter(e => e.id !== id);
  }
}
