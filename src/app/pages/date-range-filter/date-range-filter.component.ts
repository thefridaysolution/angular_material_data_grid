import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-range-filter',
    templateUrl: './date-range-filter.component.html',
    styleUrls: ['./date-range-filter.component.scss'],
    standalone: false
})
export class DateRangeFilterComponent implements OnInit {

  ts = `
headings: GridHeading[] = [
  ...
  { fieldName: 'date_of_birth', display: 'Date Of Birth', type: 'date' },
]`;

  constructor() { }

  ngOnInit(): void {
  }

}
