import { Component, Input, OnInit } from '@angular/core';
import { BoardColumns } from '../../models/board-columns';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  dataSource: any = [];
  boardDisplayColumns: string[] = ['id','name','lastname','pet','dale','reason'];
  boardColumns: BoardColumns[]=[];

  @Input() set data(data:any){
    this.dataSource = data;
  }
  @Input() set columns(columns:BoardColumns[]){
    this.boardColumns=columns
    this.boardDisplayColumns= this.boardColumns.map(col=>col.def)
  }
constructor (){}
  ngOnInit(): void{}

}