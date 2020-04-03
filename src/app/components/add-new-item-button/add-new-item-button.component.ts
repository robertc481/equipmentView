import { Component, OnInit,Input } from '@angular/core';
import {Item} from '../../models/Item';


import {ItemsService} from '../../services/items.service';
@Component({
  selector: 'app-add-new-item-button',
  templateUrl: './add-new-item-button.component.html',
  styleUrls: ['./add-new-item-button.component.scss']
})
export class AddNewItemButtonComponent implements OnInit {
  @Input() item: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }
  randomizePrice=(number:number)=>(Math.floor(Math.random() * number));
  addNewItem = (item: any) => {
    const newItem: Item = {
      name: `${item.name}${this.randomizePrice(100)}`,
      price: this.randomizePrice(350),
      type: item.type,
      image: item.image,
      key : this.itemsService.getKeyCode(),
    };
    this.itemsService.getNewItems(newItem);
  }

}
