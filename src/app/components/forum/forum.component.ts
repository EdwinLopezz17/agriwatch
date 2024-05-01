import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    NgIf,
    MatIcon
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {

  showAnswers= false



  changeShowAnswers(){
    this.showAnswers = !this.showAnswers
  }
}
