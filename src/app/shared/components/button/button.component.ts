import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() style = 'default';
  @Input() text = 'Button';
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.onClick.emit();
  }

}
