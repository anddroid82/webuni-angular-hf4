import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from 'src/results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent {
  @Input() results:Result[]=[];
  @Output() rowSelect:EventEmitter<number> = new EventEmitter<number>();
  @Input() currentIndex:number = -1;

  rowClick(rowIndex:number){
    this.rowSelect.emit(rowIndex===this.currentIndex?-1:rowIndex);
  }
}
