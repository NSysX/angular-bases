import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeroeComponent,
    ListComponent
  ],
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  providers: [],
})
export class HeroeModule { }
