import { Component, OnInit } from '@angular/core';

import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {
  title:string = 'nagrody';


  selected = null;
  
  itemType = {
    type:'reward',
    name: `cd-key`,
    price:  Math.random() * 1500,
    key: '',
  };
  myItems  = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.myItems.push(this.itemsService.getItem(this.itemType.type))
    
  };


  
  valueOfItems=()=>{
    const value = this.itemsService.eqItems.reward.map(item=>item.price).reduce((a,b)=>a+b,0);
    return value.toFixed(2);
   };

   selectThis = (item) => {
    this.selected = item;
    this.itemsService.selected = this.selected;
    this.itemsService.showPreview();

    
  }
}
