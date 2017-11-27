import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
 export class HomePageComponent implements OnInit {

  constructor() { }
  public makeup = "./assets/makeup.jpg";
  public studio = "./assets/studio.jpg";
  public bag = "./assets/bag.jpg";
  public bag1 = "./assets/bag1.jpg";
  public sunglasses = "./assets/sunglasses1.jpg";
  public sunglasses2 = "./assets/sunglasse1.png";



  ngOnInit() {
  }

}
