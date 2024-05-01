import { Component } from '@angular/core';
import {PlantCardComponent} from "./plant-card/plant-card.component";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PlantCardComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showAddPlant = false;



  changeShowAddPlant(){
    this.showAddPlant = !this.showAddPlant;

  }
}
