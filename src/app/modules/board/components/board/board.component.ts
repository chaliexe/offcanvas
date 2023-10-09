import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string[] = ['id','name','lastname','pet','dale','reason'];
  @Input() set data(data:any){
    this.dataSource = data;
  }

constructor (){}
  ngOnInit(): void{}

}