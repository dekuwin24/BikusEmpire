import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  // title= " <img src="./assets/logo.png"> ";
  public logo = "./assets/logo.png";
  public facebook="./assets/facebook.png";
  public google="./assets/google.png"


  constructor() { }

  ngOnInit() {
  }


}
