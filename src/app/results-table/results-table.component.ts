import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from 'src/results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results:Result[]=[];
  @Output() click:EventEmitter<number> = new EventEmitter<number>();
  @Input() currentIndex:number = -1;

  rowClick(rowIndex:number){
    this.click.emit(rowIndex);
  }

  ngOnInit(): void {
    console.log("init");
  }
}
