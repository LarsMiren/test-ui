import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  list: Item[];

  constructor() { }

  ngOnInit() {
    this.list = [
      {
        id: "1",
        name: "Hello, World"
      },
      {
        id: "2",
        name: "Hello, World"
      },
      {
        id: "3",
        name: "Hello, World"
      },
    ]
  }

}
