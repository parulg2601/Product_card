import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  card = {
    title: 'Mobile Phone',
    description: 'The Samsung Galaxy S20 FE comes with a triple lens camera, capacious 6.5-inch screen and a large battery.', 
    price:'$300', 
    ratings:'4/5'
  };
}
