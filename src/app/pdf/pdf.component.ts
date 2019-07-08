import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  displayedColumns = ['priority', 'status', 'dateCreated', 'testNumber', 'testCurrency', 'testTime'];

  dataSource = DATA;

  spanningColumns = ['priority', 'status', 'dateCreated'];

  spans = [];

  constructor() {
    this.cacheSpan('priority', d => d.priority);
    this.cacheSpan('status', d => d.priority + d.status);
    this.cacheSpan('dateCreated', d => d.priority + d.status + d.dateCreated);
  }

  ngOnInit() {
  }
  cacheSpan(key, accessor) {
    for (let i = 0; i < DATA.length;) {
      let currentValue = accessor(DATA[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < DATA.length; j++) {
        if (currentValue != accessor(DATA[j])) {
          break;
        }

        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const DATA = [
  {priority: 'P1', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '11/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '11/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
]
