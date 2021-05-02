import { Component } from '@angular/core';
const button = document.getElementById("inputWater")! as HTMLInputElement;
const sex = document.getElementById("sexSelection")! as HTMLInputElement;
const a = 2;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    
    // console.log("Hi there!");
    // console.log(button);
    // console.log(this);
    // console.log(a);

    
    
  }

  onItemSelector(value :any) {
    const sex = document.getElementById("sexSelection")! as HTMLInputElement;
    const cups = document.getElementById("cups")! as HTMLInputElement;
    const plantImage = document.getElementById("plant")! as HTMLInputElement;
    //console.log(value);
   // console.log(sex.value);
    console.log(cups.value);

    //if the user is male
    if (sex.value == "male") {
      //wilted
      if (parseInt(cups.value) < 7) {
        plantImage.src = "../../assets/img/WiltedPlant.png";
      }
      //thirsty
      if (parseInt(cups.value) < 12) {
        plantImage.src = "../../assets/img/ThirstyPlant.png";
      }
      //hydrated
      if (parseInt(cups.value) > 15) {
        plantImage.src = "../../assets/img/HealthyPlant.png";
      }
    }

    //if the user is female
    if (sex.value == "female") {
      if (parseInt(cups.value) < 5) {
        plantImage.src = "../../assets/img/WiltedPlant.png";
      }
      //thirsty
      if (parseInt(cups.value) < 10) {
        plantImage.src = "../../assets/img/ThirstyPlant.png";
      }
      //hydrated
      if (parseInt(cups.value) > 10) {
        plantImage.src = "../../assets/img/HealthyPlant.png";
      }
    }
    }

    
    

}
