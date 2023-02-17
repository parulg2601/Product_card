import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  title = "Mobile Phone";
  description = "The Samsung Galaxy S20 FE comes with a triple lens camera, capacious 6.5-inch screen and a large battery.";
  price = "$300";
  ratings = "4/5";
  
}
