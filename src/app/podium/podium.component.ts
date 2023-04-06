import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {
  @Input() drivers:string[] = [];
  @Output() podiumClose:EventEmitter<void> = new EventEmitter<void>(); 

  closeClick(){
    this.podiumClose.emit();
  }
}

