import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  itemsList: string[] = [
    'Doner Kebab', 'Chicken Kebab', 'Seekh Kebab', 'Veggie Kebab(V)',
    'Doner Meat & Chips', 'Taco Kebab', 'Special Kebab'
  ];
  priceList: string[] = [
    '£6.00', '£6.00', '£6.00', '£6.00', '£5.00', '£6.50', '£7.00'
  ];

  constructor() { }

  ngOnInit() {
  }


}
