import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  @Input() score!: number;
  @Input() bestScore!: number;

}
