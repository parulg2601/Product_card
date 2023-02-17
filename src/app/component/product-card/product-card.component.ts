import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  title = "Mobile Phone";
  description = "The Samsung Galaxy S20 comes with a triple lens camera.";
  price = "$300";
  ratings = "(4)";
  
}
