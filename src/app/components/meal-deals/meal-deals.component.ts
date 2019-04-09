import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-meal-deals',
  templateUrl: './meal-deals.component.html',
  styleUrls: ['./meal-deals.component.scss']
})
export class MealDealsComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Chicken Fillet OR Half Pounder Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/chickenFilletOrHalfPounderMeal.jpg',
            cols: 2, rows: 1
          },
          {
            title: 'Doner Burger Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/donerBurgerMeal.jpg',
            cols: 2, rows: 1
          },
          {
            title: 'Doner OR Chicken Kebab Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/donerKebabMeal.jpg',
            cols: 2, rows: 1
          },
          {
            title: 'Doner OR Chicken Wrap Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/donerOrChickenWrapMeal.jpg',
            cols: 2, rows: 1
          },
          {
            title: 'Fish Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/fishMeal.png',
            cols: 2, rows: 1
          },
          {
            title: 'Quarter Pounder OR Chicken Burger Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/quarterPounderMeal.jpg',
            cols: 2, rows: 1
          },
          {
            title: 'Special Kebab Meal',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/specialKebabMeal.jpg',
            cols: 2, rows: 1
          }
        ];
      }

      return [
        {
          title: 'Chicken Fillet OR Half Pounder Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/chickenFilletOrHalfPounderMeal.jpg',
          cols: 1, rows: 1
        },
        {
          title: 'Doner Burger Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/donerBurgerMeal.jpg',
          cols: 1, rows: 1
        },
        {
          title: 'Doner OR Chicken Kebab Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/donerKebabMeal.jpg',
          cols: 1, rows: 1
        },
        {
          title: 'Doner OR Chicken Wrap Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/donerOrChickenWrapMeal.jpg',
          cols: 1, rows: 1
        },
        {
          title: 'Fish Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/fishMeal.png',
          cols: 1, rows: 1
        },
        {
          title: 'Quarter Pounder OR Chicken Burger Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/quarterPounderMeal.jpg',
          cols: 1, rows: 1
        },
        {
          title: 'Special Kebab Meal',
          content: '3 Toppings , 2 Cans , 1 Chips',
          price: '10.00',
          image: '../../../assets/specialKebabMeal.jpg',
          cols: 1, rows: 1
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }
}
