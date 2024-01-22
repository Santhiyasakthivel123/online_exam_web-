import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.css']
})
export class Question10Component {
  constructor(private route:Router){}
  previous(){
    this.route.navigateByUrl('/question2')

  }
  submit(){
     this.route.navigateByUrl('/last')
  }

}
