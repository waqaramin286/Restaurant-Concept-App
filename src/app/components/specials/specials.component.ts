import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})

export class SpecialsComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          /* For Mobile Devices */
          {
            title: 'Large Pizza',
            content: '3 Toppings , 2 Cans , 1 Chips',
            price: '10.00',
            image: '../../../assets/largePizzaMeal.jpg',
            cols: 2, rows: 1
          },
          {
            title: 'Students Deal',
            content: '2 Toppings , 1 Can , 1 Chips',
            image: '../../../assets/studentsDeal.jpg',
            cols: 2, rows: 1
          }
        ];
      }
      /* For Desktop Devices */
      return [
        {
          title: 'Large Pizza',
          content: '3 Toppings , 2 Cans , 1 Chips',
          image: '../../../assets/largePizzaMeal.jpg',
          cols: 1, rows: 1
        },
        {
          title: 'Students Deal',
          content: '2 Toppings , 1 Can , 1 Chips',
          image: '../../../assets/studentsDeal.jpg',
          cols: 1, rows: 1
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
