import { Injectable } from '@angular/core';

import { Item} from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
 item: Item;
 selected = null;

  constructor() {}

  eqItems = {
    chest: [
      {
        type: 'chest',
        name:'Puszka Pandory',
        price: 1000,        
        key: 'xxxx-xxxx-xxxx-xxxx',
      },
    ],

    reward: [
      {
        type: 'reward',
        name:'Wiedźmin 3: GOTY Edition',
        price: 1000,        
        key: 'xxxx-xxxx-xxxx-xxxx',
      },
      {
        type: 'reward',
        name:'Wiedźmin 3: Krew i Wino',
        price: 500,        
        key: 'xxxx-xxxx-xxxx-xxxx'
      },
      {
        type:'reward',
        name: 'Wiedźmin 3: Dziki Gon',
        price:  Math.random() * 1500,
        key: 'xxxx-xxxx-xxxx-xxxx',
      },
    ],
  };

 getKeyCode = () => {
  let part1 = Math.random().toString(18).substring(2, 6);
  let part2 = Math.random().toString(18).substring(2, 6);
  let part3 = Math.random().toString(18).substring(2, 6);
  let part4 = Math.random().toString(18).substring(2, 6);
  return `${part1}-${part2}-${part3}-${part4}`;
};

  getItem = (type) => {
    return type === 'chest' ? this.eqItems.chest : this.eqItems.reward;
  }
  addItem = (item) => {
    item.type === this.eqItems.reward ? this.eqItems.reward.push(item) : this.eqItems.chest.push(item);

  }
  getNewItems = (item) => {
    item.type === 'chest' ? this.eqItems.chest.push(item) : this.eqItems.reward.push(item);
  }
  showPreview = () => {
    const preview = document.getElementById('eqPreview');

    preview.classList.remove('closed');
  }
  openItem = (item) => {
    item.type === this.eqItems.reward ? this.eqItems.chest.push(item) : this.eqItems.reward.push(item);

  }
  updateEquipment = (newItem ) => {
     this.eqItems.chest = this.eqItems.chest.filter(item => item.name !== newItem.name);
     this.selected= newItem;
  }
  
}
