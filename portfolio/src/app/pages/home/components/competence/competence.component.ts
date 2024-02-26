import { Component } from '@angular/core';
import { Button } from 'src/app/models/button.model';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
  cvButton: Button = {
    text: "Voir mon CV",
    link: ""
  }

}
