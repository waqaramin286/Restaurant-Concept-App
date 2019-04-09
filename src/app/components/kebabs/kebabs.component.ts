import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-kebabs',
  templateUrl: './kebabs.component.html',
  styleUrls: ['./kebabs.component.scss']
})
export class KebabsComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          /* For Mobile Devices */
          {
            title: 'Kids Chicken Nuggets Meal',
            content: '4 Chicken Nuggets  Fries & Capri-Sun',
            price: '4.50',
            cols: 2, rows: 1
          },
          {
            title: 'Kids Burger Meal',
            content: 'Cheese Burger  Fries & Capri-Sun',
            price: '4.50',
            cols: 2, rows: 1
          },
          {
            title: 'Kids Mini Box Meal',
            content: '1 Piece of Chicken  Fries & Capri-Sun',
            price: '4.50',
            cols: 2, rows: 1
          }
        ];
      }
      /* For Desktop Devices */
      return [
        {
          title: 'Kids Chicken Nuggets Meal',
          content: '4 Chicken Nuggets  Fries & Capri-Sun',
          price: '4.50',
          cols: 1, rows: 1
        },
        {
          title: 'Kids Burger Meal',
          content: 'Cheese Burger  Fries & Capri-Sun',
          price: '4.50',
          cols: 1, rows: 1
        },
        {
          title: 'Kids Mini Box Meal',
          content: '1 Piece of Chicken  Fries & Capri-Sun',
          price: '4.50',
          cols: 1, rows: 1
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
