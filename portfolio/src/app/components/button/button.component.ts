import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonOptions ?: Button;
  buttonStyle ?: {};

  ngOnInit(): void {
    if (!this.buttonOptions) return;
    this.buttonStyle = {
      "padding":  `${this.buttonOptions.size}rem ${this.buttonOptions.size*1.5}rem`,
      "fontSize": `${this.buttonOptions.size}rem`
    }
  }
}
