import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-instruction",
  templateUrl: "./instruction.component.html",
  styleUrls: ["./instruction.component.css"],
})
export class InstructionComponent {
  constructor(private route: Router) {}
  start() {
    this.route.navigateByUrl("/question");
  }
}
