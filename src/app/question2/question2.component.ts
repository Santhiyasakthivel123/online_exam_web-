import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  constructor(private route:Router) {}
  previous(){
    this.route.navigateByUrl('question');

  }
  next(){
    this.route.navigateByUrl('question10')

  }

}
