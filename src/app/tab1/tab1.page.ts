import { Component } from '@angular/core';
import { Console } from 'node:console';
const inputButton = document.getElementById("inputButton")! as HTMLInputElement;
Console.Log("Hi there!");

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    
  }

}
