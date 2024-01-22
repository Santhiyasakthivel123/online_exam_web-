import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
   constructor(private route:Router){}
  next(){
     this.route.navigateByUrl('/question2')
  }
}
