import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { MatTableModule } from '@angular/material/table';


 
@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
    
  ],
  exports:[BoardComponent],
})
export class BoardModule { }
